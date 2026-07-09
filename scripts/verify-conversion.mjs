// Verifies the Google Ads "Submit lead form" conversion fires when the contact
// form is submitted, WITHOUT any real side effects:
//   - Web3Forms submit is stubbed to success  -> no real lead email is sent
//   - all Google tag/ads network is blocked    -> no real conversion is recorded
//   - window.gtag is spied on                  -> proves our code dispatches it
import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const browser = await chromium.launch()
const page = await browser.newPage()

const googleHits = []

// Block anything that would reach Google (gtag.js, conversion beacons) so this
// test can never register a real conversion, and record that a beacon was tried.
await page.route(/googletagmanager\.com|googleadservices\.com|google-analytics\.com|google\.com\/pagead|google\.com\.au\/pagead|doubleclick\.net/, route => {
  googleHits.push(route.request().url())
  return route.abort()
})

// Stub the Web3Forms endpoint so no real enquiry email is sent.
await page.route('**/api.web3forms.com/**', route =>
  route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) }),
)

await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' })

// Spy on gtag: wrap the existing global so we capture the exact arguments our
// gtag_report_conversion() helper passes.
await page.evaluate(() => {
  window.__gtagCalls = []
  const orig = window.gtag
  window.gtag = function () {
    window.__gtagCalls.push(Array.from(arguments))
    return typeof orig === 'function' ? orig.apply(this, arguments) : undefined
  }
})

// Confirm the helper from index.html <head> is present.
const helperType = await page.evaluate(() => typeof window.gtag_report_conversion)

// Fill the required fields and submit the lead form.
await page.fill('#ct-name', 'Test Lead (automated verify)')
await page.fill('#ct-email', 'test-verify@example.com')
await page.fill('#ct-msg', 'Automated conversion verification - please ignore.')
await page.click('button.ct-submit')

// Wait for the success state the form shows on a successful submit.
await page.waitForSelector('.ct-thanks', { timeout: 10000 })

const calls = await page.evaluate(() => window.__gtagCalls)
const conv = calls.find(c => c[0] === 'event' && c[1] === 'conversion')

console.log('helper gtag_report_conversion defined :', helperType === 'function')
console.log('success UI (.ct-thanks) shown         :', true)
console.log('gtag conversion event fired           :', !!conv)
if (conv) console.log('  send_to                             :', conv[2] && conv[2].send_to)
if (conv) console.log('  has event_callback                  :', !!(conv[2] && conv[2].event_callback))
console.log('google beacons attempted (blocked)    :', googleHits.length)

await browser.close()

const ok = helperType === 'function' && conv && conv[2].send_to === 'AW-18223360122/ShGBCJ6Jz8wcEPrQyfFD'
console.log('\nRESULT:', ok ? 'PASS - conversion fires correctly' : 'FAIL')
process.exit(ok ? 0 : 1)

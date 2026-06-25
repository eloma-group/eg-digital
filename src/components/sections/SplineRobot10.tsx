import { memo } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

/* ════════════════════════════════════════════════════════════════════
   Background "stars" Spline scene for Hero 10 - sits BEHIND the foreground
   robot as an ambient backdrop. Its own background is cleared to transparent
   so the Hero10 section gradient shows through and the stars layer over it.

   Same crispness + single-load treatment as the other robots:
   - memo + stable scene/style => initialises exactly once (no scroll reload).
   - CSS supersampling (render SS× larger, scale 1/SS back) keeps it sharp up
     to 4K without changing the scene's framing.
   ════════════════════════════════════════════════════════════════════ */

const SCENE = 'https://prod.spline.design/HKjESZUxeMKrqOWj/scene.splinecode'

/* Supersample factor. 1 = native resolution (already crisp on HiDPI). Higher
   values multiply the pixel work and tank scroll performance - keep at 1. */
const SS = 1

/* Stable references - new objects each render would re-init the canvas. */
const SCALER_STYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: `${SS * 100}%`,
  height: `${SS * 100}%`,
  transform: `scale(${1 / SS})`,
  transformOrigin: 'top left',
} as const

const CANVAS_STYLE = { width: '100%', height: '100%' } as const

/* Clear the scene's own background so the section gradient shows through. */
function makeTransparent(app: Application) {
  app.setBackgroundColor?.('transparent')
}

function SplineRobot10() {
  return (
    <div style={SCALER_STYLE}>
      <Spline scene={SCENE} style={CANVAS_STYLE} onLoad={makeTransparent} />
    </div>
  )
}

export default memo(SplineRobot10)

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#f8f8ff'

const SQRT_5000 = Math.sqrt(5000)
const AUTOPLAY_MS = 6000
const SWIPE_THRESHOLD = 50

interface Testimonial {
  tempId: number
  testimonial: string
  by: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    tempId: 0,
    testimonial: 'EG Digital took our star rating from 4.1 to 4.9 in 90 days. The automated review follow-ups feel personal, never spammy.',
    by: 'Sarah Mitchell',
    avatar: GREEN,
  },
  {
    tempId: 1,
    testimonial: "The sales analytics dashboard is the best I've used. I can see exactly which products underperform and why. It paid for itself ten times over.",
    by: 'James Okonkwo',
    avatar: NAVY,
  },
  {
    tempId: 2,
    testimonial: 'Response Centre cut our message backlog from 200+ daily to under 30. Our team finally has breathing room and customers are happier.',
    by: 'Priya Sharma',
    avatar: '#6366f1',
  },
  {
    tempId: 3,
    testimonial: "We were lost before we found EG Digital. Everything from reviews to reporting now lives in one place. Can't thank the team enough.",
    by: 'Daniel Reyes',
    avatar: '#e07a5f',
  },
  {
    tempId: 4,
    testimonial: 'I would be lost without the in-depth analytics. The ROI for us has been easily 10x within the first quarter.',
    by: 'Mei Lin',
    avatar: GREEN,
  },
  {
    tempId: 5,
    testimonial: 'So glad we made the switch. EG Digital has saved my team well over a hundred hours of manual work already.',
    by: 'Tom Whitfield',
    avatar: NAVY,
  },
  {
    tempId: 6,
    testimonial: "Took some convincing internally, but now that we're on EG Digital we are never going back. Genuinely a game-changer.",
    by: 'Aisha Khan',
    avatar: '#6366f1',
  },
  {
    tempId: 7,
    testimonial: 'The platform is robust yet simple. We had the whole team up to speed in under ten minutes. Support has been unparalleled.',
    by: 'Lucas Brennan',
    avatar: '#e07a5f',
  },
  {
    tempId: 8,
    testimonial: 'The scalability is impressive - it has grown with our business seamlessly as we expanded across three markets.',
    by: 'Hannah Cole',
    avatar: GREEN,
  },
  {
    tempId: 9,
    testimonial: "We've tried many solutions, but EG Digital stands out for reliability and performance. It just works, every single day.",
    by: 'Marco Bianchi',
    avatar: NAVY,
  },
]

// Fluid card size: scales with the viewport so cards read large on 2K/4K and
// stay tappable on mobile. Computed in JS because the absolute-positioned
// transform maths need the real pixel value.
function computeCardSize(w: number): number {
  if (w < 640) return Math.min(330, w - 48)
  return Math.round(Math.max(340, Math.min(w * 0.26, 460)))
}

interface TestimonialCardProps {
  position: number
  testimonial: Testimonial
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0
  const notch = Math.round(cardSize * 0.135)
  const pad = Math.round(cardSize * 0.088)
  const avW = Math.round(cardSize * 0.13)
  const avH = Math.round(cardSize * 0.155)

  return (
    <div
      onClick={() => handleMove(position)}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        cursor: 'pointer',
        border: `2px solid ${isCenter ? NAVY : 'rgba(8,33,60,0.12)'}`,
        background: isCenter ? NAVY : '#fff',
        color: isCenter ? CREAM : NAVY,
        zIndex: isCenter ? 10 : 0,
        width: cardSize,
        height: cardSize,
        padding: pad,
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        clipPath: `polygon(${notch}px 0%, calc(100% - ${notch}px) 0%, 100% ${notch}px, 100% 100%, calc(100% - ${notch}px) 100%, ${notch}px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -cardSize * 0.18 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? `0px 10px 0px 4px ${GREEN}, 0 30px 60px -20px rgba(8,33,60,0.45)`
          : '0px 0px 0px 0px transparent',
        willChange: 'transform',
      }}
    >
      <span
        style={{
          position: 'absolute',
          display: 'block',
          transformOrigin: 'top right',
          transform: 'rotate(45deg)',
          background: isCenter ? 'rgba(248,248,255,0.2)' : 'rgba(8,33,60,0.12)',
          right: -2,
          top: notch,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <div
        aria-hidden
        style={{
          width: avW,
          height: avH,
          marginBottom: Math.round(cardSize * 0.05),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.round(avW * 0.46),
          fontWeight: 900,
          color: '#fff',
          background: testimonial.avatar,
          boxShadow: `3px 3px 0px ${isCenter ? NAVY : CREAM}`,
        }}
      >
        {testimonial.by.charAt(0)}
      </div>
      <h3
        style={{
          fontSize: isCenter
            ? 'clamp(18px,1.7vw,26px)'
            : cardSize > 300
            ? 'clamp(15px,1.2vw,18px)'
            : 15,
          fontWeight: 500,
          lineHeight: 1.4,
          color: isCenter ? CREAM : NAVY,
          margin: 0,
        }}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        style={{
          position: 'absolute',
          bottom: pad,
          left: pad,
          right: pad,
          marginTop: 8,
          fontSize: isCenter ? 15 : 14,
          fontWeight: 600,
          fontStyle: 'italic',
          color: isCenter ? 'rgba(248,248,255,0.85)' : 'rgba(8,33,60,0.55)',
        }}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export function Testimonials() {
  const [cardSize, setCardSize] = useState(() =>
    typeof window === 'undefined' ? 380 : computeCardSize(window.innerWidth),
  )
  const [list, setList] = useState<Testimonial[]>(TESTIMONIALS)
  const [paused, setPaused] = useState(false)

  // Functional update so it stays stable for the autoplay interval and drag.
  const handleMove = useCallback((steps: number) => {
    setList((prev) => {
      const next = [...prev]
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift()
          if (!item) return prev
          next.push({ ...item, tempId: Math.random() })
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = next.pop()
          if (!item) return prev
          next.unshift({ ...item, tempId: Math.random() })
        }
      }
      return next
    })
  }, [])

  useEffect(() => {
    const updateSize = () => setCardSize(computeCardSize(window.innerWidth))
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Auto-advance, paused on hover / drag / when tab is hidden.
  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => handleMove(1), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, handleMove])

  // Swipe / drag support (pointer events cover mouse + touch).
  const dragStartX = useRef<number | null>(null)
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX
    setPaused(true)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current !== null) {
      const dx = e.clientX - dragStartX.current
      if (Math.abs(dx) > SWIPE_THRESHOLD) handleMove(dx < 0 ? 1 : -1)
    }
    dragStartX.current = null
    setPaused(false)
  }

  const stageHeight = cardSize + 220

  return (
    <section
      style={{
        background: CREAM,
        padding: 'clamp(64px,8vw,120px) 0 clamp(48px,6vw,80px)',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: 'min(calc(100vw - 48px),1760px)',
          margin: '0 auto clamp(24px,3vw,48px)',
          padding: '0 clamp(24px,4vw,64px)',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(10px,0.75vw,12px)',
            fontWeight: 800,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: GREEN,
            marginBottom: 14,
          }}
        >
          Happy Clients
        </div>
        <h1
          style={{
            fontSize: 'clamp(40px,5vw,72px)',
            fontWeight: 900,
            color: NAVY,
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            lineHeight: 0.94,
            margin: 0,
          }}
        >
          What Our Clients Say
        </h1>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          dragStartX.current = null
          setPaused(false)
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: stageHeight,
          overflow: 'hidden',
          touchAction: 'pan-y',
          userSelect: 'none',
        }}
      >
        {list.map((testimonial, index) => {
          const position =
            list.length % 2
              ? index - (list.length + 1) / 2
              : index - list.length / 2
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          )
        })}

        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            display: 'flex',
            transform: 'translateX(-50%)',
            gap: 8,
          }}
        >
          <NavButton onClick={() => handleMove(-1)} label="Previous testimonial">
            <ChevronLeft />
          </NavButton>
          <NavButton onClick={() => handleMove(1)} label="Next testimonial">
            <ChevronRight />
          </NavButton>
        </div>
      </div>
    </section>
  )
}

const NavButton: React.FC<{
  onClick: () => void
  label: string
  children: React.ReactNode
}> = ({ onClick, label, children }) => {
  const [hover, setHover] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 56,
        fontSize: 24,
        cursor: 'pointer',
        border: `2px solid ${NAVY}`,
        background: hover ? NAVY : CREAM,
        color: hover ? CREAM : NAVY,
        transition: 'background 0.2s, color 0.2s',
      }}
    >
      {children}
    </button>
  )
}

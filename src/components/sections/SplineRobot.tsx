import { memo } from 'react'
import Spline from '@splinetool/react-spline'
import type { Application } from '@splinetool/runtime'

/* ════════════════════════════════════════════════════════════════════
   Spline robot - hosted 3D scene from Spline's CDN.
   Transparent canvas so it sits on the light Hero2 background. Loaded lazily
   by Hero2 (the heavy Spline runtime is code-split and never blocks paint).

   - memo + stable scene/style => the scene initialises EXACTLY once. The
     underlying <Spline> only re-loads when its props change, so scrolling
     and parent re-renders never reload the robot.
   - 4K crispness WITHOUT changing the model's size/framing: instead of
     touching the runtime pixel ratio (which re-fits the camera and zooms
     the model), we render the canvas into a box SS times larger and scale
     it back down by 1/SS. The aspect ratio is unchanged (square -> square),
     so the composition is identical - we just feed the GPU SS× more pixels,
     giving a clean supersampled image up to 4K.
   ════════════════════════════════════════════════════════════════════ */

const SCENE = 'https://prod.spline.design/69Jsy4aimbR6c9hI/scene.splinecode'

/* Supersample factor. 1 = native resolution (renders at the device pixel
   ratio, already crisp on HiDPI). Higher values 4×+ the pixel work and tank
   scroll performance, so keep this at 1 unless a specific screen needs more. */
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

/* Clear the scene's own background so whatever sits behind the canvas
   (Hero2's light bg, or Hero3's gradient + stars) shows through.
   setBackgroundColor doesn't touch the camera/framing. */
function makeTransparent(app: Application) {
  app.setBackgroundColor?.('transparent')
}

function SplineRobot() {
  return (
    <div style={SCALER_STYLE}>
      <Spline scene={SCENE} style={CANVAS_STYLE} onLoad={makeTransparent} />
    </div>
  )
}

export default memo(SplineRobot)

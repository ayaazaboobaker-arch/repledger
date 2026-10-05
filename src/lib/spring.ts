/**
 * A tiny spring animator for gesture-driven motion (tab bar lens, page swipes). It runs on
 * requestAnimationFrame, touches nothing but the callback you give it, keeps the velocity it was
 * thrown with, and can be interrupted at any point: start a new one from wherever the old one was.
 */
export interface SpringOpts {
  from: number
  to: number
  /** starting speed in units per second (from the finger's release) */
  velocity?: number
  /** higher = faster */
  stiffness?: number
  /** 1 = no overshoot, below 1 = a little wobble */
  dampingRatio?: number
  onUpdate: (value: number, velocity: number) => void
  onDone?: () => void
}

export interface Spring { stop(): void; value(): number; velocity(): number }

const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function spring({ from, to, velocity = 0, stiffness = 380, dampingRatio = 1, onUpdate, onDone }: SpringOpts): Spring {
  let x = from
  let v = velocity
  let raf = 0
  let stopped = false
  if (reduced()) {
    onUpdate(to, 0)
    onDone?.()
    return { stop() {}, value: () => to, velocity: () => 0 }
  }
  const k = stiffness
  const c = 2 * Math.sqrt(k) * dampingRatio
  let last = performance.now()
  const step = (now: number) => {
    if (stopped) return
    // fixed small steps keep it stable whatever the frame rate (60, 90, 120 Hz)
    let dt = Math.min(0.064, (now - last) / 1000)
    last = now
    while (dt > 0) {
      const h = Math.min(dt, 1 / 240)
      const a = -k * (x - to) - c * v
      v += a * h
      x += v * h
      dt -= h
    }
    // done once it's within half a pixel and barely moving: the eye can't see the rest
    if (Math.abs(v) < 12 && Math.abs(x - to) < 0.5) {
      x = to
      v = 0
      onUpdate(x, 0)
      onDone?.()
      return
    }
    onUpdate(x, v)
    raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
  return {
    stop() { stopped = true; cancelAnimationFrame(raf) },
    value: () => x,
    velocity: () => v,
  }
}

/** Rubber band past an edge: the further you pull, the less it moves (like iOS). */
export const rubber = (over: number, size: number) => {
  const s = Math.sign(over), d = Math.abs(over)
  return s * (1 - 1 / ((d * 0.55) / size + 1)) * size
}

/**
 * A light tick under the finger. Android: the vibration API. iPhone (iOS 18 and later): Safari has
 * no vibration API, but flipping a native switch plays the system's selection tick, so a hidden one
 * is flipped. Elsewhere it does nothing.
 */
let iosSwitch: HTMLLabelElement | null = null
export function tick() {
  try {
    if ('vibrate' in navigator) { navigator.vibrate(6); return }
    if (!iosSwitch) {
      const label = document.createElement('label')
      label.setAttribute('aria-hidden', 'true')
      label.style.cssText = 'position:fixed;left:-100px;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none'
      const input = document.createElement('input')
      input.type = 'checkbox'
      input.setAttribute('switch', '')
      input.tabIndex = -1
      label.appendChild(input)
      document.body.appendChild(label)
      iosSwitch = label
    }
    // flipping it moves focus to it: hand focus straight back
    const before = document.activeElement as HTMLElement | null
    iosSwitch.click()
    const input = iosSwitch.firstElementChild as HTMLInputElement
    if (before && before !== document.body) before.focus({ preventScroll: true })
    else input.blur()
  } catch { /* not supported */ }
}


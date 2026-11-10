import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { PenTool, Sparkles, Orbit } from 'lucide-react'

// ─── AUTHENTIC HAND-DRAWN SCRIBBLE & SKETCH PATH DATA (viewBox: 0 0 500 580) ───
// Stage 1: Initial rapid construction strokes & tangent guidelines (0–200ms)
const STAGE_1_PATHS = [
  // Head vertical tangent & top tick
  { d: "M 250 50 L 250 145", stroke: "#B85C42", width: 1.5, dash: 100 },
  { d: "M 235 65 L 265 65", stroke: "#B85C42", width: 1.2, dash: 35 },
  // Left & right shoulder perspective guide axes
  { d: "M 60 520 C 120 480, 180 430, 240 410", stroke: "#242420", width: 1.6, dash: 220 },
  { d: "M 440 520 C 380 480, 320 430, 260 410", stroke: "#B85C42", width: 1.6, dash: 220 },
  // Crown apex curvature marks
  { d: "M 180 135 C 215 105, 285 105, 320 135", stroke: "#242420", width: 2.0, dash: 160 },
  { d: "M 195 125 C 225 100, 275 100, 305 125", stroke: "#B85C42", width: 1.4, dash: 130 },
  // Quick ear / lateral alignment ticks
  { d: "M 105 315 L 130 305 M 108 330 L 135 318", stroke: "#242420", width: 1.4, dash: 60 },
  { d: "M 395 315 L 370 305 M 392 330 L 365 318", stroke: "#B85C42", width: 1.4, dash: 60 },
]

// Stage 2: Rapid helmet outline, visor curves, and cross-hatch scribbles (200–550ms)
const STAGE_2_OUTLINES = [
  // Outer helmet dome — energetic double-stroke curves
  { d: "M 115 390 C 92 235, 148 85, 250 78 C 352 85, 408 235, 385 390", stroke: "#242420", width: 2.4, dash: 750 },
  { d: "M 120 380 C 100 240, 154 92, 250 84 C 346 92, 400 240, 380 380", stroke: "#B85C42", width: 1.8, dash: 720 },
  // Visor oval framing Samar's face & eyes
  { d: "M 132 265 C 132 150, 368 150, 368 265 C 368 375, 132 375, 132 265", stroke: "#242420", width: 2.5, dash: 780 },
  { d: "M 138 265 C 138 158, 362 158, 362 265 C 362 368, 138 368, 138 265", stroke: "#FAF7F0", width: 1.2, dash: 740 },
  // Lower chin visor rim & breath guard arc
  { d: "M 148 335 C 195 385, 305 385, 352 335", stroke: "#242420", width: 2.2, dash: 260 },
  { d: "M 160 345 C 200 392, 300 392, 340 345", stroke: "#B85C42", width: 1.6, dash: 220 },
  // Upper visor glare arc
  { d: "M 165 210 C 200 170, 300 170, 335 210", stroke: "#FAF7F0", width: 2.0, dash: 210 },
  // Neck ring gasket — heavy structural ellipses
  { d: "M 120 412 C 175 450, 325 450, 380 412", stroke: "#242420", width: 2.8, dash: 310 },
  { d: "M 112 432 C 175 475, 325 475, 388 432", stroke: "#B85C42", width: 2.0, dash: 330 },
  { d: "M 105 452 C 175 495, 325 495, 395 452", stroke: "#242420", width: 1.8, dash: 350 },
  // Shoulder pack & harness construction lines
  { d: "M 135 445 C 145 490, 140 540, 130 580", stroke: "#242420", width: 2.2, dash: 160 },
  { d: "M 365 445 C 355 490, 360 540, 370 580", stroke: "#242420", width: 2.2, dash: 160 },
  { d: "M 185 455 L 198 580", stroke: "#B85C42", width: 1.8, dash: 140 },
  { d: "M 315 455 L 302 580", stroke: "#B85C42", width: 1.8, dash: 140 },
  // Center chest control module outline
  { d: "M 215 475 L 285 475 L 280 545 L 220 545 Z", stroke: "#242420", width: 1.6, dash: 220 },
]

// Rapid cross-hatch shading & energetic scribble loops (200–550ms)
const STAGE_2_SCRIBBLES = [
  // Visor upper left shading hatch
  { d: "M 152 195 L 180 223 M 165 190 L 193 218 M 178 185 L 206 213 M 191 180 L 219 208 M 204 178 L 232 206", stroke: "#242420", width: 1.4, dash: 180 },
  // Visor lower right shadow hatch
  { d: "M 305 325 L 333 353 M 318 320 L 346 348 M 331 315 L 359 343", stroke: "#242420", width: 1.4, dash: 130 },
  // Neck bracket cross-hatching
  { d: "M 125 395 L 155 425 M 135 400 L 165 430 M 145 405 L 175 435", stroke: "#B85C42", width: 1.3, dash: 140 },
  { d: "M 345 425 L 375 395 M 335 430 L 365 400 M 325 435 L 355 405", stroke: "#B85C42", width: 1.3, dash: 140 },
  // Left shoulder energetic scribble loop
  { d: "M 85 490 Q 110 475 130 500 Q 105 520 125 540 Q 100 560 115 575", stroke: "#242420", width: 1.5, dash: 220 },
  // Right shoulder energetic scribble loop
  { d: "M 415 490 Q 390 475 370 500 Q 395 520 375 540 Q 400 560 385 575", stroke: "#242420", width: 1.5, dash: 220 },
  // Chest harness diagonal hatch
  { d: "M 225 490 L 245 510 M 235 490 L 255 510 M 245 490 L 265 510 M 255 490 L 275 510", stroke: "#B85C42", width: 1.2, dash: 120 },
]

export default function AstronautPortrait({
  portraitSrc = '/samar_cutout.png',
  astronautSrc = '/samar_astronaut.png',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileTransformed, setIsMobileTransformed] = useState(false)
  const [astronautLoaded, setAstronautLoaded] = useState(false)
  const [sketchStage, setSketchStage] = useState('idle') // 'idle' | 'sketching' | 'suited'
  
  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const svgRef = useRef(null)
  const astronautLayerRef = useRef(null)
  const scribbleOverlayRef = useRef(null)
  const visorGlintRef = useRef(null)

  // Spring physics for smooth interactive pointer tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 22 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ['-20px', '20px'])
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ['-10px', '25px'])

  // Preload astronaut overlay image
  useEffect(() => {
    const img = new Image()
    img.src = astronautSrc
    img.onload = () => setAstronautLoaded(true)
    img.onerror = () => setAstronautLoaded(false)
  }, [astronautSrc])

  // Choreograph the 3-stage Scribble Transformation Timeline with GSAP
  useEffect(() => {
    if (!svgRef.current || !astronautLayerRef.current) return

    const s1Paths = svgRef.current.querySelectorAll('.stage-1-path')
    const s2Outlines = svgRef.current.querySelectorAll('.stage-2-outline')
    const s2Scribbles = svgRef.current.querySelectorAll('.stage-2-scribble')
    const astronaut = astronautLayerRef.current
    const scribbles = scribbleOverlayRef.current
    const glint = visorGlintRef.current

    // Set initial stroke-dashoffset on all paths so they start completely hidden
    s1Paths.forEach((p) => {
      const len = p.getTotalLength() || 150
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 })
    })
    s2Outlines.forEach((p) => {
      const len = p.getTotalLength() || 400
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 })
    })
    s2Scribbles.forEach((p) => {
      const len = p.getTotalLength() || 200
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 })
    })

    gsap.set(astronaut, { opacity: 0, scale: 0.98, filter: 'contrast(1.08) brightness(0.92)' })
    gsap.set(scribbles, { opacity: 1 })
    if (glint) gsap.set(glint, { opacity: 0, xPercent: -100 })

    // Build the master scribble-to-astronaut timeline
    const tl = gsap.timeline({
      paused: true,
      onStart: () => setSketchStage('sketching'),
      onComplete: () => setSketchStage('suited'),
      onReverseComplete: () => setSketchStage('idle'),
    })

    // ── STAGE 1 (0–200ms): Initial rapid ink strokes & tangent guidelines ──
    tl.to(
      s1Paths,
      {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.22,
        stagger: 0.02,
        ease: 'power2.out',
      },
      0
    )

    // ── STAGE 2 (200–550ms): Rapid scribble buildup, helmet outlines, cross-hatching ──
    tl.to(
      s2Outlines,
      {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.32,
        stagger: 0.025,
        ease: 'power3.out',
      },
      0.18
    )

    tl.to(
      s2Scribbles,
      {
        strokeDashoffset: 0,
        opacity: 0.9,
        duration: 0.28,
        stagger: 0.02,
        ease: 'power2.out',
      },
      0.24
    )

    // ── STAGE 3 (550–950ms): Astronaut layer reveals underneath, scribbles settle into technical drawing ──
    tl.to(
      astronaut,
      {
        opacity: 1,
        scale: 1,
        filter: 'contrast(1.04) brightness(1.02)',
        duration: 0.42,
        ease: 'power2.inOut',
      },
      0.50
    )

    // Scribble lines soften down to an authentic editorial technical drawing weight
    tl.to(
      scribbles,
      {
        opacity: 0.38,
        duration: 0.35,
        ease: 'power2.out',
      },
      0.58
    )

    // Visor sheen light sweep
    if (glint) {
      tl.to(
        glint,
        {
          opacity: 1,
          xPercent: 100,
          duration: 0.45,
          ease: 'power3.out',
        },
        0.65
      )
    }

    timelineRef.current = tl

    return () => {
      tl.kill()
    }
  }, [astronautLoaded])

  // Play or reverse scribble animation based on hover / mobile state
  useEffect(() => {
    const active = isHovered || isMobileTransformed
    if (!timelineRef.current) return

    if (active) {
      timelineRef.current.timeScale(1.0).play()
    } else {
      timelineRef.current.timeScale(1.4).reverse()
    }
  }, [isHovered, isMobileTransformed])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMobileTap = () => {
    setIsMobileTransformed((prev) => !prev)
  }

  const activeTransformed = isHovered || isMobileTransformed

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMobileTap}
      className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[6/7] mx-auto select-none cursor-pointer perspective-[1200px] group"
    >
      {/* ─── 1. WARM AMBER-BROWN EDITORIAL SPOTLIGHT ILLUMINATION ─── */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-6 pointer-events-none rounded-full transition-opacity duration-700 blur-2xl"
        style={{
          background: activeTransformed
            ? 'radial-gradient(circle at 50% 40%, rgba(184, 92, 66, 0.38) 0%, rgba(36, 36, 32, 0.12) 55%, transparent 75%)'
            : 'radial-gradient(circle at 50% 45%, rgba(217, 185, 155, 0.40) 0%, rgba(184, 92, 66, 0.12) 55%, transparent 75%)',
        }}
      />

      {/* ─── 2. FLOATING EDITORIAL BADGE OVER PORTRAIT ─── */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 font-mono text-[10px] uppercase tracking-widest text-[#74786A] bg-[#FAF7F0]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#242420]/15 shadow-sm flex items-center gap-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
        {sketchStage === 'sketching' ? (
          <PenTool className="w-3 h-3 text-[#B85C42] animate-pulse" />
        ) : (
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              sketchStage === 'suited' ? 'bg-[#B85C42] animate-pulse' : 'bg-[#74786A]'
            }`}
          />
        )}
        <span>
          {sketchStage === 'sketching'
            ? 'Sketching Gear...'
            : sketchStage === 'suited'
            ? 'Astronaut Protocol Active'
            : 'Hover to Sketch & Suit Up'}
        </span>
      </div>

      {/* Mobile hint badge */}
      <div className="absolute bottom-3 right-3 z-30 font-mono text-[9px] uppercase tracking-wider text-[#74786A] bg-[#FAF7F0]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#242420]/10 sm:hidden">
        Tap to {activeTransformed ? 'Restore' : 'Sketch'}
      </div>

      {/* ─── 3. 3D TILTING CONTAINER ─── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full will-change-transform flex items-end justify-center"
      >
        {/* Soft dynamic floor shadow that moves with pointer */}
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="absolute -bottom-6 w-3/4 h-12 bg-[#242420]/20 rounded-full blur-xl pointer-events-none"
        />

        {/* ─── LAYER A: REAL PROFESSIONAL PHOTOGRAPH (DEFAULT BASE) ─── */}
        <div className="relative w-full h-full flex items-end justify-center z-10">
          <img
            src={portraitSrc}
            alt="Samar Sethi — Professional Headshot"
            className="w-full h-full object-contain object-bottom filter contrast-[1.03] brightness-[0.99] drop-shadow-2xl transition-all duration-500"
          />
        </div>

        {/* ─── LAYER B: ASTRONAUT SUIT LAYER (REVEALS UNDERNEATH SCRIBBLES IN STAGE 3) ─── */}
        <div
          ref={astronautLayerRef}
          className="absolute inset-0 z-20 pointer-events-none flex items-end justify-center will-change-transform"
        >
          <div className="relative w-full h-full flex items-end justify-center overflow-visible">
            <img
              src={astronautLoaded ? astronautSrc : portraitSrc}
              alt="Samar Sethi — Astronaut Transformation"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(36,36,32,0.35)]"
            />

            {/* Visor Sheen & Orbit HUD Reflection */}
            <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[62%] h-[26%] rounded-full border border-white/20 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />

            {/* Holographic orbital indicator ring */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none rounded-full border border-[#B85C42]/20 animate-[spin_24s_linear_infinite]" />
          </div>
        </div>

        {/* ─── LAYER C: HAND-DRAWN SCRIBBLE & SKETCH SVG OVERLAY ─── */}
        <div
          ref={scribbleOverlayRef}
          className="absolute inset-0 z-30 pointer-events-none flex items-end justify-center overflow-visible will-change-opacity"
        >
          <svg
            ref={svgRef}
            viewBox="0 0 500 580"
            className="w-full h-full overflow-visible"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(36,36,32,0.25))' }}
          >
            {/* Stage 1: Initial Construction Strokes & Guide Axes */}
            <g className="stage-1-group">
              {STAGE_1_PATHS.map((item, i) => (
                <path
                  key={`s1-${i}`}
                  d={item.d}
                  stroke={item.stroke}
                  strokeWidth={item.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="stage-1-path"
                />
              ))}
            </g>

            {/* Stage 2: Outer Helmet Outlines, Visor Rim, Gaskets */}
            <g className="stage-2-outlines">
              {STAGE_2_OUTLINES.map((item, i) => (
                <path
                  key={`s2o-${i}`}
                  d={item.d}
                  stroke={item.stroke}
                  strokeWidth={item.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="stage-2-outline"
                />
              ))}
            </g>

            {/* Stage 2: Rapid Cross-Hatching & Energetic Scribbles */}
            <g className="stage-2-scribbles">
              {STAGE_2_SCRIBBLES.map((item, i) => (
                <path
                  key={`s2s-${i}`}
                  d={item.d}
                  stroke={item.stroke}
                  strokeWidth={item.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="stage-2-scribble"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* ─── LAYER D: VISOR GLINT LIGHT SWEEP ─── */}
        <div
          ref={visorGlintRef}
          className="absolute inset-0 pointer-events-none z-40 overflow-hidden rounded-3xl"
        >
          <div
            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.24) 50%, transparent 60%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

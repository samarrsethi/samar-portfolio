import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { Zap, Shield, Sparkles } from 'lucide-react'

// ─── HAND-DRAWN IRON MAN ARMOR SKETCH PATHS (viewBox: 0 0 500 580) ───
// Stage 1: Initial rapid construction lines tracing head, shoulders, and center axis (0–300ms)
const STAGE_1_PATHS = [
  // Head vertical centerline & top cross-tick
  { d: "M 250 40 L 250 155", stroke: "#B85C42", width: 1.6, dash: 120 },
  { d: "M 230 60 L 270 60", stroke: "#B85C42", width: 1.3, dash: 45 },
  // Left & right shoulder perspective axes
  { d: "M 50 510 C 120 470, 180 430, 240 405", stroke: "#242420", width: 1.8, dash: 230 },
  { d: "M 450 510 C 380 470, 320 430, 260 405", stroke: "#B85C42", width: 1.8, dash: 230 },
  // Crown apex curvature marks
  { d: "M 185 130 C 220 95, 280 95, 315 130", stroke: "#242420", width: 2.2, dash: 160 },
  { d: "M 200 115 C 230 90, 270 90, 300 115", stroke: "#C8372D", width: 1.6, dash: 130 },
  // Ear pod alignment ticks
  { d: "M 130 260 L 145 250 M 132 280 L 150 270", stroke: "#242420", width: 1.5, dash: 50 },
  { d: "M 370 260 L 355 250 M 368 280 L 350 270", stroke: "#B85C42", width: 1.5, dash: 50 },
]

// Stage 2: Iconic Iron Man faceplate, helmet dome, eye slits, arc reactor, chest armor (300–650ms)
const STAGE_2_OUTLINES = [
  // Outer helmet dome
  { d: "M 145 370 C 125 220, 175 75, 250 70 C 325 75, 375 220, 355 370", stroke: "#242420", width: 2.6, dash: 720 },
  { d: "M 152 360 C 135 225, 180 82, 250 78 C 320 82, 365 225, 348 360", stroke: "#C8372D", width: 1.8, dash: 690 },
  // Iconic Gold Faceplate Contour (brow, cheekbones, jaw)
  { d: "M 175 190 L 325 190 L 335 240 L 325 295 L 305 340 L 250 355 L 195 340 L 175 295 L 165 240 Z", stroke: "#D4AF37", width: 2.4, dash: 580 },
  { d: "M 185 200 L 315 200 L 325 242 L 315 290 L 298 332 L 250 345 L 202 332 L 185 290 L 175 242 Z", stroke: "#B85C42", width: 1.6, dash: 540 },
  // Dual Glowing Eye Slits
  { d: "M 195 242 L 230 246 L 228 253 L 198 250 Z", stroke: "#38BDF8", width: 2.2, dash: 90 },
  { d: "M 305 242 L 270 246 L 272 253 L 302 250 Z", stroke: "#38BDF8", width: 2.2, dash: 90 },
  // Mouthplate / chin indentations
  { d: "M 225 315 L 275 315 M 235 330 L 265 330", stroke: "#242420", width: 2.0, dash: 90 },
  // Neck Collar Segmented Ring
  { d: "M 160 380 C 200 410, 300 410, 340 380", stroke: "#242420", width: 2.8, dash: 260 },
  { d: "M 150 400 C 200 432, 300 432, 350 400", stroke: "#C8372D", width: 2.2, dash: 280 },
  // Circular Chest Arc Reactor
  { d: "M 250 445 m -32, 0 a 32,32 0 1,0 64,0 a 32,32 0 1,0 -64,0", stroke: "#38BDF8", width: 2.6, dash: 210 },
  { d: "M 250 445 m -24, 0 a 24,24 0 1,0 48,0 a 24,24 0 1,0 -48,0", stroke: "#E0F2FE", width: 2.0, dash: 160 },
  // Triangular Arc Core Accents
  { d: "M 250 422 L 268 456 L 232 456 Z", stroke: "#38BDF8", width: 1.6, dash: 120 },
  // Shoulder Pauldrons & Collarbone Plating
  { d: "M 120 425 C 105 460, 95 510, 85 570", stroke: "#242420", width: 2.6, dash: 200 },
  { d: "M 380 425 C 395 460, 405 510, 415 570", stroke: "#242420", width: 2.6, dash: 200 },
  { d: "M 140 430 L 205 440 L 195 530 L 125 510 Z", stroke: "#D4AF37", width: 2.0, dash: 340 },
  { d: "M 360 430 L 295 440 L 305 530 L 375 510 Z", stroke: "#D4AF37", width: 2.0, dash: 340 },
]

// Rapid cross-hatching shading & kinetic scribble marks (300–650ms)
const STAGE_2_SCRIBBLES = [
  // Helmet cheek cross-hatch shading
  { d: "M 170 260 L 195 285 M 180 255 L 205 280 M 190 250 L 215 275", stroke: "#242420", width: 1.3, dash: 110 },
  { d: "M 330 260 L 305 285 M 320 255 L 295 280 M 310 250 L 285 275", stroke: "#242420", width: 1.3, dash: 110 },
  // Shoulder armor kinetic scribble loops
  { d: "M 80 470 Q 105 455, 125 480 Q 95 500, 115 525 Q 90 545, 105 565", stroke: "#C8372D", width: 1.6, dash: 240 },
  { d: "M 420 470 Q 395 455, 375 480 Q 405 500, 385 525 Q 410 545, 395 565", stroke: "#C8372D", width: 1.6, dash: 240 },
  // Arc reactor energy radiating ticks
  { d: "M 250 405 L 250 413 M 250 477 L 250 485 M 210 445 L 218 445 M 282 445 L 290 445", stroke: "#38BDF8", width: 2.0, dash: 60 },
  { d: "M 222 417 L 228 423 M 278 473 L 272 467 M 222 473 L 228 467 M 278 417 L 272 423", stroke: "#38BDF8", width: 2.0, dash: 60 },
]

export default function IronManTransformation({
  portraitSrc = '/samar_cutout.png',
  ironManSrc = '/ironman_armor.png',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileTransformed, setIsMobileTransformed] = useState(false)
  const [armorLoaded, setArmorLoaded] = useState(false)
  const [suitStage, setSuitStage] = useState('idle') // 'idle' | 'scribbling' | 'armoring' | 'suited'

  const containerRef = useRef(null)
  const timelineRef = useRef(null)
  const svgRef = useRef(null)
  const photoLayerRef = useRef(null)
  const ironManLayerRef = useRef(null)
  const scribbleOverlayRef = useRef(null)
  const reactorGlowRef = useRef(null)
  const eyeGleamRef = useRef(null)

  // Spring physics for smooth pointer-responsive 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 22 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ['-20px', '20px'])
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ['-10px', '25px'])

  // Preload Iron Man armor asset
  useEffect(() => {
    const img = new Image()
    img.src = ironManSrc
    img.onload = () => setArmorLoaded(true)
    img.onerror = () => setArmorLoaded(false)
  }, [ironManSrc])

  // Choreograph Master GSAP 4-Stage Scribble-to-Iron Man Timeline
  useEffect(() => {
    if (!svgRef.current || !photoLayerRef.current || !ironManLayerRef.current) return

    const s1Paths = svgRef.current.querySelectorAll('.s1-path')
    const s2Outlines = svgRef.current.querySelectorAll('.s2-outline')
    const s2Scribbles = svgRef.current.querySelectorAll('.s2-scribble')
    const photo = photoLayerRef.current
    const ironMan = ironManLayerRef.current
    const scribbles = scribbleOverlayRef.current
    const reactor = reactorGlowRef.current
    const eyeGleam = eyeGleamRef.current

    // Set initial dashoffsets to completely hide paths
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

    // Initial state: Photo 100% visible, Iron Man hidden
    gsap.set(photo, { opacity: 1, scale: 1, filter: 'contrast(1.03) brightness(0.99)' })
    gsap.set(ironMan, { opacity: 0, scale: 0.96, filter: 'contrast(1.1) brightness(0.85)' })
    gsap.set(scribbles, { opacity: 1 })
    if (reactor) gsap.set(reactor, { opacity: 0, scale: 0.5 })
    if (eyeGleam) gsap.set(eyeGleam, { opacity: 0, xPercent: -100 })

    // Build reversible master timeline (1.35s total)
    const tl = gsap.timeline({
      paused: true,
      onStart: () => setSuitStage('scribbling'),
      onComplete: () => setSuitStage('suited'),
      onReverseComplete: () => setSuitStage('idle'),
    })

    // ── STAGE 1 (0–300ms): Scribble Formation around head, shoulders, & torso ──
    tl.to(
      s1Paths,
      {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.30,
        stagger: 0.025,
        ease: 'power2.out',
      },
      0
    )

    // ── STAGE 2 (300–650ms): Photograph Disintegration & Dense Armor Outlines ──
    tl.to(
      photo,
      {
        opacity: 0.15,
        scale: 0.98,
        filter: 'contrast(1.15) brightness(0.8) blur(1px)',
        duration: 0.35,
        ease: 'power2.inOut',
      },
      0.30
    )

    tl.to(
      s2Outlines,
      {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.35,
        stagger: 0.02,
        ease: 'power3.out',
      },
      0.28
    )

    tl.to(
      s2Scribbles,
      {
        strokeDashoffset: 0,
        opacity: 0.9,
        duration: 0.30,
        stagger: 0.018,
        ease: 'power2.out',
      },
      0.32
    )

    // ── STAGE 3 (650–1100ms): Iron Man Transformation Emerges Underneath ──
    // Original photo disappears completely
    tl.to(
      photo,
      {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      },
      0.65
    )

    // Iron Man armor blooms in to full presence
    tl.to(
      ironMan,
      {
        opacity: 1,
        scale: 1,
        filter: 'contrast(1.05) brightness(1.02)',
        duration: 0.45,
        ease: 'power2.out',
        onStart: () => setSuitStage('armoring'),
      },
      0.62
    )

    // Arc reactor energy illuminates
    if (reactor) {
      tl.to(
        reactor,
        {
          opacity: 0.95,
          scale: 1,
          duration: 0.40,
          ease: 'power3.out',
        },
        0.75
      )
    }

    // ── STAGE 4 (1100–1400ms): Final Reveal & Settle ──
    // Construction scribbles dissolve away, leaving the fully armored character
    tl.to(
      scribbles,
      {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut',
      },
      1.05
    )

    // Eye visor gleam flash sweep
    if (eyeGleam) {
      tl.to(
        eyeGleam,
        {
          opacity: 1,
          xPercent: 100,
          duration: 0.45,
          ease: 'power3.out',
        },
        1.00
      )
    }

    timelineRef.current = tl

    return () => {
      tl.kill()
    }
  }, [armorLoaded])

  // Play / reverse timeline on hover or mobile tap
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
      {/* ─── 1. WARM EDITORIAL SPOTLIGHT / ARC REACTOR AMBIENT ILLUMINATION ─── */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-6 pointer-events-none rounded-full transition-opacity duration-700 blur-2xl"
        style={{
          background: activeTransformed
            ? 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.28) 0%, rgba(184, 92, 66, 0.35) 45%, rgba(36, 36, 32, 0.12) 65%, transparent 80%)'
            : 'radial-gradient(circle at 50% 45%, rgba(217, 185, 155, 0.40) 0%, rgba(184, 92, 66, 0.12) 55%, transparent 75%)',
        }}
      />

      {/* ─── 2. FLOATING EDITORIAL BADGE OVER PORTRAIT ─── */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 font-mono text-[10px] uppercase tracking-widest text-[#74786A] bg-[#FAF7F0]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#242420]/15 shadow-sm flex items-center gap-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
        {suitStage === 'scribbling' || suitStage === 'armoring' ? (
          <Zap className="w-3 h-3 text-[#B85C42] animate-pulse" />
        ) : suitStage === 'suited' ? (
          <Shield className="w-3 h-3 text-[#38BDF8] animate-pulse" />
        ) : (
          <span className="w-2 h-2 rounded-full bg-[#74786A]" />
        )}
        <span>
          {suitStage === 'scribbling'
            ? 'Jarvis Initializing...'
            : suitStage === 'armoring'
            ? 'Suiting Up Mark 85...'
            : suitStage === 'suited'
            ? 'Mark 85 Protocol Active'
            : 'Hover to Suit Up (Iron Man)'}
        </span>
      </div>

      {/* Mobile hint badge */}
      <div className="absolute bottom-3 right-3 z-30 font-mono text-[9px] uppercase tracking-wider text-[#74786A] bg-[#FAF7F0]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#242420]/10 sm:hidden">
        Tap to {activeTransformed ? 'Restore' : 'Suit Up'}
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
        {/* Dynamic floor shadow that follows pointer */}
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="absolute -bottom-6 w-3/4 h-12 bg-[#242420]/20 rounded-full blur-xl pointer-events-none"
        />

        {/* ─── LAYER A: REAL PROFESSIONAL PHOTOGRAPH (DEFAULT RESTING STATE) ─── */}
        <div
          ref={photoLayerRef}
          className="relative w-full h-full flex items-end justify-center z-10 will-change-transform"
        >
          <img
            src={portraitSrc}
            alt="Samar Sethi — Professional Headshot"
            className="w-full h-full object-contain object-bottom filter contrast-[1.03] brightness-[0.99] drop-shadow-2xl"
          />
        </div>

        {/* ─── LAYER B: FULL IRON MAN ARMORED CHARACTER (TRANSFORMS & REPLACES PHOTO) ─── */}
        <div
          ref={ironManLayerRef}
          className="absolute inset-0 z-20 pointer-events-none flex items-end justify-center will-change-transform"
        >
          <div className="relative w-full h-full flex items-end justify-center overflow-visible">
            <img
              src={armorLoaded ? ironManSrc : portraitSrc}
              alt="Iron Man Mark 85 Transformation"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(36,36,32,0.4)]"
            />

            {/* Glowing Chest Arc Reactor Aura */}
            <div
              ref={reactorGlowRef}
              className="absolute top-[52%] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full pointer-events-none blur-md will-change-transform"
              style={{
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.9) 0%, rgba(14, 165, 233, 0.4) 40%, transparent 70%)',
              }}
            />

            {/* Cyan Eye Slit Glints */}
            <div className="absolute top-[28%] left-[45%] -translate-x-1/2 w-4 h-1.5 bg-[#E0F2FE] rounded-full blur-[1px] shadow-[0_0_8px_#38BDF8] pointer-events-none opacity-80" />
            <div className="absolute top-[28%] left-[55%] -translate-x-1/2 w-4 h-1.5 bg-[#E0F2FE] rounded-full blur-[1px] shadow-[0_0_8px_#38BDF8] pointer-events-none opacity-80" />
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
            {/* Stage 1: Initial Construction Lines */}
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
                  className="s1-path"
                />
              ))}
            </g>

            {/* Stage 2: Outer Helmet, Faceplate, Eye Slits, Arc Reactor Outlines */}
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
                  className="s2-outline"
                />
              ))}
            </g>

            {/* Stage 2: Cross-Hatch Shading & Kinetic Scribbles */}
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
                  className="s2-scribble"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* ─── LAYER D: LIGHT SWEEP ACROSS CHROME PLATING ─── */}
        <div
          ref={eyeGleamRef}
          className="absolute inset-0 pointer-events-none z-40 overflow-hidden rounded-3xl"
        >
          <div
            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, transparent 40%, rgba(56, 189, 248, 0.25) 48%, rgba(255, 255, 255, 0.35) 50%, transparent 60%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

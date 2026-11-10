import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Orbit } from 'lucide-react'

export default function AstronautPortrait({
  portraitSrc = '/samar_cutout.png',
  astronautSrc = '/samar_astronaut.png',
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileTransformed, setIsMobileTransformed] = useState(false)
  const [astronautLoaded, setAstronautLoaded] = useState(false)
  const containerRef = useRef(null)

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
      className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[9/14] mx-auto select-none cursor-pointer perspective-[1200px] group"
    >
      {/* ─── 1. WARM AMBER-BROWN EDITORIAL SPOTLIGHT ILLUMINATION ─── */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-6 pointer-events-none rounded-full transition-opacity duration-700 blur-2xl"
        style={{
          background: activeTransformed
            ? 'radial-gradient(circle at 50% 40%, rgba(184, 92, 66, 0.35) 0%, rgba(36, 36, 32, 0.12) 55%, transparent 75%)'
            : 'radial-gradient(circle at 50% 45%, rgba(217, 185, 155, 0.40) 0%, rgba(184, 92, 66, 0.12) 55%, transparent 75%)',
        }}
      />

      {/* ─── 2. FLOATING EDITORIAL BADGE OVER PORTRAIT ─── */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 font-mono text-[10px] uppercase tracking-widest text-[#74786A] bg-[#FAF7F0]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#242420]/15 shadow-sm flex items-center gap-2 transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
        <span
          className={`w-2 h-2 rounded-full transition-colors duration-500 ${
            activeTransformed ? 'bg-[#B85C42] animate-pulse' : 'bg-[#74786A]'
          }`}
        />
        <span>{activeTransformed ? 'Astronaut Protocol Active' : 'Move to Suit Up'}</span>
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
        {/* Soft dynamic floor shadow that moves with pointer */}
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="absolute -bottom-6 w-3/4 h-12 bg-[#242420]/20 rounded-full blur-xl pointer-events-none"
        />

        {/* ─── LAYER A: REAL PORTRAIT (DEFAULT STATE) ─── */}
        <div
          className={`relative w-full h-full flex items-end justify-center z-10 transition-opacity duration-700 ease-in-out ${
            activeTransformed ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          <img
            src={portraitSrc}
            alt="Samar Sethi — The Person Behind the Code"
            className="w-full h-full object-contain object-bottom filter contrast-[1.04] brightness-[0.98] drop-shadow-2xl"
          />
        </div>

        {/* ─── LAYER B: ASTRONAUT SUIT TRANSFORMATION (HOVER / SUIT-UP STATE) ─── */}
        <div
          className={`absolute inset-0 z-20 pointer-events-none transition-all duration-700 ease-out flex items-end justify-center ${
            activeTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          <div className="relative w-full h-full flex items-end justify-center overflow-visible">
            <img
              src={astronautLoaded ? astronautSrc : portraitSrc}
              alt="Samar Sethi — Astronaut Transformation"
              className="w-full h-full object-contain object-bottom filter contrast-105 brightness-105 drop-shadow-[0_15px_35px_rgba(36,36,32,0.35)]"
            />

            {/* Futuristic Visor Sheen & Orbit HUD Reflection */}
            <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[62%] h-[26%] rounded-full border border-white/25 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />

            {/* Holographic orbital indicator ring */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none rounded-full border border-[#B85C42]/20 animate-[spin_24s_linear_infinite]" />
          </div>
        </div>

        {/* ─── LAYER C: LIGHT SWEEP ACROSS VISOR ─── */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 overflow-hidden rounded-3xl ${
            activeTransformed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
              transform: activeTransformed ? 'translate(50%, 50%)' : 'translate(0%, 0%)',
              transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

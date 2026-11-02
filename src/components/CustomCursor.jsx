import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReducedMotion) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.documentElement.classList.add('custom-cursor-active')

    // Quick setters for 60fps tracking
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'none' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'none' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.25, ease: 'power2.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.25, ease: 'power2.out' })

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

    let isVisible = false

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e
      if (!isVisible) {
        isVisible = true
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
      }
      dotX(x)
      dotY(y)
      ringX(x)
      ringY(y)
    }

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"]')
      if (target) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: '#B85C42',
          backgroundColor: 'rgba(184, 92, 66, 0.08)',
          duration: 0.3,
        })
        gsap.to(dot, {
          scale: 0.5,
          backgroundColor: '#B85C42',
          duration: 0.3,
        })
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"]')
      if (target) {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(36, 36, 32, 0.3)',
          backgroundColor: 'transparent',
          duration: 0.3,
        })
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#242420',
          duration: 0.3,
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 })
      isVisible = false
    }

    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 })
      isVisible = true
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#242420] pointer-events-none z-[10000] opacity-0"
      />
      {/* Editorial ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-[#242420]/30 pointer-events-none z-[9999] opacity-0 transition-colors"
      />
    </>
  )
}

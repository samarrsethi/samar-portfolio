import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'

// Irregular paper tear clip-paths
const TEAR_CLIP_LEFT = `polygon(
  0% 0%, 
  50.2% 0%, 
  49.6% 5%, 
  50.8% 11%, 
  48.9% 18%, 
  51.4% 25%, 
  49.2% 33%, 
  50.9% 41%, 
  48.7% 49%, 
  51.6% 57%, 
  49.1% 65%, 
  50.8% 73%, 
  48.8% 81%, 
  51.2% 89%, 
  49.4% 95%, 
  50.1% 100%, 
  0% 100%
)`

const TEAR_CLIP_RIGHT = `polygon(
  50.2% 0%, 
  100% 0%, 
  100% 100%, 
  50.1% 100%, 
  49.4% 95%, 
  51.2% 89%, 
  48.8% 81%, 
  50.8% 73%, 
  49.1% 65%, 
  51.6% 57%, 
  48.7% 49%, 
  50.9% 41%, 
  49.2% 33%, 
  51.4% 25%, 
  48.9% 18%, 
  50.8% 11%, 
  49.6% 5%
)`

// Newspaper Cover Component with ONLY the two dominant headings and luxurious whitespace
function BroadsheetContent() {
  return (
    <div className="w-[880px] h-[640px] md:w-[1080px] md:h-[720px] bg-[#FAF6EE] text-[#242420] p-8 sm:p-14 select-none shadow-paper-lg relative border border-[#E3DACB] font-serif overflow-hidden flex flex-col justify-between">
      {/* Subtle authentic paper grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-45 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#242420 0.8px, transparent 0.8px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Top Folio / Ear Boxes */}
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-[#242420]/30 pb-3 mb-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#4A4A42]">
          <span>Vol. XXIV — No. 01</span>
          <span className="hidden sm:inline">The Chronicle of Computing, Systems &amp; Alphas</span>
          <span>Delhi NCR &bull; Autumn 2026</span>
        </div>

        {/* ─── HEADING 1: THE SAMAR JOURNAL (Dominant Masthead) ─── */}
        <div className="text-center py-4 border-b-2 border-[#242420] relative overflow-hidden">
          <div className="overflow-hidden py-1">
            <h1 className="masthead-text font-serif text-6xl sm:text-8xl md:text-9xl tracking-tight uppercase font-normal text-[#1A1A16] leading-none will-change-transform">
              The Samar Journal
            </h1>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-[#74786A] mt-2 tracking-widest">
            &ldquo;All the Systems, Intelligence &amp; Craft Fit to Build&rdquo;
          </p>
        </div>

        {/* Date / Monograph Bar */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-widest py-2 border-b border-[#242420]/25 text-[#4A4A42]">
          <span>Est. 2024 &bull; Special Edition</span>
          <span className="text-[#B85C42] font-semibold">Editorial Cover</span>
          <span>Priceless</span>
        </div>
      </div>

      {/* ─── HEADING 2: BEYOND THE CODE. (Bold Editorial Statement with Generous Whitespace) ─── */}
      <div className="my-auto py-8 sm:py-14 text-center relative z-10">
        <div className="overflow-hidden py-2">
          <h2 className="statement-text font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-normal tracking-tight text-[#1A1A16] uppercase leading-[0.95] will-change-transform">
            Beyond The Code.
          </h2>
        </div>
        <div className="overflow-hidden py-1 mt-4">
          <p className="substatement-text font-mono text-xs sm:text-sm text-[#74786A] tracking-[0.25em] uppercase font-medium max-w-xl mx-auto will-change-transform">
            Samar Sethi &mdash; Building intelligent systems &amp; digital experiences
          </p>
        </div>
      </div>

      {/* Bottom Newspaper Colophon / Footer Rule */}
      <div className="relative z-10 pt-3 border-t-2 border-[#242420]/20 flex justify-between items-center text-[10px] font-mono text-[#74786A] uppercase tracking-wider">
        <span>Printed Digitally in India</span>
        <span className="italic font-serif text-xs text-[#242420]">Scroll downward to tear and unfold &darr;</span>
        <span>Page 01 &bull; Cover A</span>
      </div>
    </div>
  )
}

export default function NewspaperIntro({ onSkip }) {
  const containerRef = useRef(null)
  const leftHalfRef = useRef(null)
  const rightHalfRef = useRef(null)
  const paperWrapperRef = useRef(null)
  const ripLineRef = useRef(null)
  const handsLeftRef = useRef(null)
  const handsRightRef = useRef(null)
  const tensionShadowRef = useRef(null)
  const skipBtnRef = useRef(null)
  const scrollPromptRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const leftHalf = leftHalfRef.current
    const rightHalf = rightHalfRef.current
    const paperWrapper = paperWrapperRef.current
    const ripLine = ripLineRef.current
    const handsLeft = handsLeftRef.current
    const handsRight = handsRightRef.current
    const tensionShadow = tensionShadowRef.current
    if (!container || !leftHalf || !rightHalf || !paperWrapper) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // 1. Initial Load Cinematic Entrance Sequence
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Initial state
      gsap.set(paperWrapper, {
        scale: 0.94,
        opacity: 0,
        y: 40,
        rotationX: 4,
        transformPerspective: 1200,
      })
      gsap.set('.masthead-text', { yPercent: 110, opacity: 0 })
      gsap.set('.statement-text', { yPercent: 110, opacity: 0 })
      gsap.set('.substatement-text', { y: 20, opacity: 0 })

      // Animate paper entrance into viewport
      introTl
        .to(paperWrapper, {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.1,
          ease: 'power3.out',
        })
        // Masked reveal for "THE SAMAR JOURNAL"
        .to(
          '.masthead-text',
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power4.out',
            stagger: 0.05,
          },
          '-=0.7'
        )
        // Staggered reveal for "BEYOND THE CODE."
        .to(
          '.statement-text',
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power4.out',
          },
          '-=0.6'
        )
        // Substatement entry
        .to(
          '.substatement-text',
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )

      // 2. Scroll-Driven Tearing Sequence
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100))
          },
        },
      })

      // 0% - 20%: Rests in hands with subtle perspective breathing
      scrollTl.to(paperWrapper, {
        scale: 1.04,
        rotationX: 1.5,
        duration: 0.2,
        ease: 'power1.inOut',
      }, 0)

      // 20% - 45%: Moves forward toward viewer, paper creases, tension builds
      scrollTl.to(paperWrapper, {
        scale: 1.10,
        rotationX: 0,
        duration: 0.25,
        ease: 'power2.inOut',
      }, 0.2)
      scrollTl.to(tensionShadow, {
        opacity: 0.85,
        duration: 0.25,
        ease: 'power2.in',
      }, 0.2)

      // 45% - 70%: The rip line opens! Left and right halves tear apart with paper rotation
      scrollTl.to(ripLine, {
        opacity: 1,
        duration: 0.04,
      }, 0.45)

      // Left Half tear rotation & offset
      scrollTl.to(leftHalf, {
        xPercent: -15,
        yPercent: 4,
        rotation: -7,
        duration: 0.25,
        ease: 'power3.out',
      }, 0.45)
      scrollTl.to(handsLeft, {
        xPercent: -20,
        rotation: -6,
        duration: 0.25,
        ease: 'power3.out',
      }, 0.45)

      // Right Half tear rotation & offset
      scrollTl.to(rightHalf, {
        xPercent: 15,
        yPercent: 6,
        rotation: 8,
        duration: 0.25,
        ease: 'power3.out',
      }, 0.45)
      scrollTl.to(handsRight, {
        xPercent: 20,
        rotation: 7,
        duration: 0.25,
        ease: 'power3.out',
      }, 0.45)

      // 70% - 100%: Torn halves fly out completely offscreen, revealing portfolio underneath
      scrollTl.to(leftHalf, {
        xPercent: -120,
        yPercent: 20,
        rotation: -28,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.7)
      scrollTl.to(handsLeft, {
        xPercent: -130,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.7)

      scrollTl.to(rightHalf, {
        xPercent: 120,
        yPercent: 25,
        rotation: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.7)
      scrollTl.to(handsRight, {
        xPercent: 130,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.7)

      scrollTl.to(ripLine, {
        opacity: 0,
        duration: 0.15,
      }, 0.7)

      scrollTl.to(scrollPromptRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.15,
      }, 0.45)
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#EFE9DF] flex items-center justify-center select-none"
    >
      {/* Background Studio Surface & Soft Shadows */}
      <div className="absolute inset-0 bg-[#F5F1E8] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#E6DFD2]/40 to-[#D4CBBC]/60 pointer-events-none" />

      {/* Floating Header info */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-none font-mono text-[11px] uppercase tracking-wider text-[#74786A]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B85C42] animate-pulse" />
          <span>The Samar Journal &bull; Interactive Editorial Edition</span>
        </div>
        <div className="hidden sm:block">
          Scroll to Tear Open &bull; {scrollProgress}%
        </div>
      </div>

      {/* Paper & Hands Assembly Wrapper with Responsive Proportional Scaling */}
      <div
        ref={paperWrapperRef}
        className="relative flex items-center justify-center will-change-transform perspective-[1200px] scale-[0.38] sm:scale-[0.65] md:scale-[0.82] lg:scale-100 origin-center"
      >
        {/* Tension crease shadow (appears right before the tear) */}
        <div
          ref={tensionShadowRef}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-transparent via-[#242420]/30 to-transparent pointer-events-none z-30 opacity-0"
        />

        {/* Realistic SVG Fibrous Rip Seam */}
        <div
          ref={ripLineRef}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 z-40 pointer-events-none opacity-0"
        >
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 10 1000">
            <path
              d="M5 0 Q2 100 8 200 T3 400 T7 600 T2 800 T5 1000"
              stroke="#FAF6EE"
              strokeWidth="3"
              fill="none"
              filter="drop-shadow(0 0 3px rgba(36,36,32,0.3))"
            />
          </svg>
        </div>

        {/* ─── LEFT HALF (Clipped + Left Hand) ─── */}
        <div
          ref={leftHalfRef}
          className="relative will-change-transform torn-edge-left z-20"
          style={{
            clipPath: TEAR_CLIP_LEFT,
          }}
        >
          <BroadsheetContent />
        </div>

        {/* Left Holding Hand Overlay (Photo-realistic POV) */}
        <div
          ref={handsLeftRef}
          className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none will-change-transform"
        >
          <div className="relative w-28 sm:w-44 h-48 sm:h-72">
            <img
              src="/newspaper_hands.jpg"
              alt="Hands holding newspaper"
              className="w-full h-full object-cover object-left rounded-r-3xl filter contrast-105 brightness-95 drop-shadow-2xl"
              style={{
                clipPath: 'polygon(0% 10%, 100% 25%, 90% 75%, 0% 90%)',
              }}
            />
          </div>
        </div>

        {/* ─── RIGHT HALF (Clipped + Right Hand) ─── */}
        <div
          ref={rightHalfRef}
          className="absolute inset-0 will-change-transform torn-edge-right z-10"
          style={{
            clipPath: TEAR_CLIP_RIGHT,
          }}
        >
          <BroadsheetContent />
        </div>

        {/* Right Holding Hand Overlay (Photo-realistic POV) */}
        <div
          ref={handsRightRef}
          className="absolute -right-12 sm:-right-20 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none will-change-transform"
        >
          <div className="relative w-28 sm:w-44 h-48 sm:h-72">
            <img
              src="/newspaper_hands.jpg"
              alt="Hands holding newspaper"
              className="w-full h-full object-cover object-right rounded-l-3xl filter contrast-105 brightness-95 drop-shadow-2xl"
              style={{
                clipPath: 'polygon(0% 25%, 100% 10%, 100% 90%, 10% 75%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Bottom Prompt */}
      <div
        ref={scrollPromptRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30 text-[#74786A] font-mono text-xs tracking-widest uppercase"
      >
        <span>Scroll to tear and unfold</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#B85C42]" />
      </div>

      {/* "Skip Intro" Button */}
      <button
        ref={skipBtnRef}
        onClick={onSkip}
        className="absolute bottom-6 right-6 z-40 px-4 py-2 bg-[#FAF7F0] border border-[#242420]/25 rounded-full text-xs font-mono uppercase tracking-wider text-[#242420] hover:bg-[#B85C42] hover:text-white hover:border-[#B85C42] transition-all shadow-md flex items-center gap-1.5"
      >
        <span>Skip Intro</span>
        <span>&darr;</span>
      </button>
    </section>
  )
}

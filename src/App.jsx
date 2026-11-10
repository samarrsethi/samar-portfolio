import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import NewspaperIntro from './components/NewspaperIntro'
import AboutSection from './components/AboutSection'
import TechnicalExpertise from './components/TechnicalExpertise'
import SelectedWork from './components/SelectedWork'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'
import { PageTurnCurl, SpreadLiftTransition, FoldAwayTransition } from './components/PageTransitions'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Initialize Lenis with smooth inertia
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    })
    lenisRef.current = lenis
    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          lenis.scrollTo(element, { offset: -60, duration: 1.3 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  const handleSkipIntro = () => {
    const aboutEl = document.getElementById('about')
    if (aboutEl && lenisRef.current) {
      lenisRef.current.scrollTo(aboutEl, { offset: -40, duration: 1.2 })
    } else if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#242420] overflow-x-hidden selection:bg-[#B85C42]/20 selection:text-[#242420] relative font-sans">
      {/* Subtle authentic paper grain texture overlay across viewport */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.025] z-[5] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#242420 0.7px, transparent 0.7px)`,
          backgroundSize: '14px 14px',
        }}
      />

      {/* Editorial hairline vertical boundary guides */}
      <div className="fixed inset-0 pointer-events-none z-[4] max-w-7xl mx-auto px-6 sm:px-10 flex justify-between opacity-15">
        <div className="w-[1px] h-full bg-[#242420]" />
        <div className="w-[1px] h-full bg-[#242420]" />
      </div>

      {/* Top minimal scroll progress indicator */}
      <ScrollProgressBar />

      {/* Refined editorial custom cursor */}
      <CustomCursor />

      {/* Global Navbar with correct 4-section links: 01 About, 02 Expertise, 03 Work, 04 Contact */}
      <Navbar />

      {/* ─── SCENE 1: THE UNFOLDING — Realistic Interactive Newspaper Tearing Sequence ─── */}
      {/* 
        The Newspaper intro is pinned. As the visitor scrolls, the newspaper cover tears apart,
        and SECTION 01 (ABOUT ME) is already positioned underneath it, directly visible through the gap!
      */}
      <NewspaperIntro onSkip={handleSkipIntro} />

      {/* ─── SCENE 2: PHYSICAL NEWSPAPER EDITORIAL PAGES & CONTINUOUS FLOW ─── */}
      <main className="relative z-10 bg-[#F5F1E8]">
        {/* 01 — ABOUT ME: THE PERSON BEHIND THE CODE (PORTRAIT + MARQUEES + ASTRONAUT HOVER) */}
        <AboutSection />

        {/* ── Page Turn Curl: Section 01 → Section 02 ── */}
        <PageTurnCurl />

        {/* 02 — TECHNICAL EXPERTISE: ILLUSTRATED TECHNICAL SUPPLEMENT */}
        <TechnicalExpertise />

        {/* ── Spread Lift: Section 02 → Section 03 ── */}
        <SpreadLiftTransition />

        {/* 03 — SELECTED WORK: FULL-WIDTH EDITORIAL SPREADS & LIVE SIMULATIONS */}
        <SelectedWork />

        {/* ── Fold Away: Section 03 → Section 04 ── */}
        <FoldAwayTransition />

        {/* 04 — CONTACT: THE TELEGRAM DESK */}
        <ContactSection />
      </main>

      {/* Footer Colophon */}
      <Footer onScrollTop={handleScrollTop} />
    </div>
  )
}

export default App

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import NewspaperIntro from './components/NewspaperIntro'
import Introduction from './components/Introduction'
import AboutSection from './components/AboutSection'
import SelectedWork from './components/SelectedWork'
import TechnicalExpertise from './components/TechnicalExpertise'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Initialize Lenis with refined inertia
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    })
    lenisRef.current = lenis

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
    const introEl = document.getElementById('intro')
    if (introEl && lenisRef.current) {
      lenisRef.current.scrollTo(introEl, { offset: 0, duration: 1.2 })
    } else if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' })
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
      {/* Extremely subtle editorial paper grain overlay across the entire page */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-[5] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#242420 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Very subtle editorial hairline guides */}
      <div className="fixed inset-0 pointer-events-none z-[4] max-w-7xl mx-auto px-6 sm:px-10 flex justify-between opacity-15">
        <div className="w-[1px] h-full bg-[#242420]" />
        <div className="w-[1px] h-full bg-[#242420]" />
      </div>

      {/* Top minimal scroll progress indicator */}
      <ScrollProgressBar />

      {/* Refined editorial custom cursor */}
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar />

      {/* ─── SCENE 1: THE UNFOLDING — Realistic Interactive Newspaper Tearing Sequence ─── */}
      <NewspaperIntro onSkip={handleSkipIntro} />

      {/* ─── SCENE 2: EDITORIAL PORTFOLIO (Revealed underneath) ─── */}
      <main className="relative z-10 bg-[#F5F1E8]">
        {/* 01 — Introduction */}
        <Introduction />

        {/* 02 — About */}
        <AboutSection />

        {/* 03 — Selected Work */}
        <SelectedWork />

        {/* 04 — Technical Expertise */}
        <TechnicalExpertise />

        {/* 05 — Contact */}
        <ContactSection />
      </main>

      {/* Footer Colophon */}
      <Footer onScrollTop={handleScrollTop} />
    </div>
  )
}

export default App

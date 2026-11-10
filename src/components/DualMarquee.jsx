import { motion } from 'framer-motion'

export default function DualMarquee() {
  const upperItems = [
    'ARTIFICIAL INTELLIGENCE',
    'SYSTEMS ENGINEERING',
    'PYTHON',
    'LOCAL INFERENCE',
    'CREATIVE DEVELOPMENT',
  ]

  const lowerItems = [
    "BUILDING WHAT'S NEXT.",
    'THINKING BEYOND THE CODE.',
    'ENGINEERING IDEAS INTO REALITY.',
  ]

  // Duplicate items 4 times to ensure seamless infinite looping without visible gaps
  const upperRepeated = Array(4).fill(upperItems).flat()
  const lowerRepeated = Array(4).fill(lowerItems).flat()

  return (
    <div className="w-full overflow-hidden select-none pointer-events-none py-6 space-y-3">
      {/* ─── UPPER MARQUEE: Right to Left (Muted Charcoal Grey) ─── */}
      <div className="flex w-max overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-6 whitespace-nowrap will-change-transform"
        >
          {upperRepeated.map((item, idx) => (
            <span
              key={`upper-${idx}`}
              className="font-mono text-2xl sm:text-3xl md:text-5xl font-semibold uppercase tracking-tight text-[#242420]/[0.12] flex items-center gap-6"
            >
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-[#242420]/20 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── LOWER MARQUEE: Left to Right (Muted Terracotta Accent) ─── */}
      <div className="flex w-max overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-6 whitespace-nowrap will-change-transform"
        >
          {lowerRepeated.map((item, idx) => (
            <span
              key={`lower-${idx}`}
              className="font-serif italic text-3xl sm:text-4xl md:text-6xl font-normal uppercase tracking-tight text-[#B85C42]/[0.18] flex items-center gap-6"
            >
              <span>{item}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85C42]/30 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

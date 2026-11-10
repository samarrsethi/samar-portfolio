import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Linkedin, Github, Instagram, MapPin, Clock } from 'lucide-react'

const channels = [
  {
    name: 'LinkedIn',
    handle: 'Samar Sethi',
    category: 'Professional Network',
    desc: 'Connect for internships, collaborative engineering & academic network.',
    url: 'https://www.linkedin.com/in/samar-sethi-bb96273bb/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    handle: '@samarrsethi',
    category: 'Source Code & Repositories',
    desc: 'Inspect open-source repositories, algorithms & platform architectures.',
    url: 'https://github.com/samarrsethi',
    icon: Github,
  },
  {
    name: 'Instagram',
    handle: '@samrrrrsethi',
    category: 'Personal & Creative',
    desc: 'Visual journal, campus life & behind-the-scenes engineering dispatches.',
    url: 'https://www.instagram.com/samrrrrsethi/',
    icon: Instagram,
  },
  {
    name: 'Gmail Direct',
    handle: 'samarsethi777@gmail.com',
    category: 'Electronic Mail Dispatch',
    desc: 'Click to open pre-addressed email composer. Inquiries answered within 24 hours.',
    url: 'https://mail.google.com/mail/?view=cm&to=samarsethi777@gmail.com',
    icon: Mail,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto relative select-none">
      {/* ─── EDITORIAL SECTION MASTHEAD ─── */}
      <div className="border-b-2 border-[#242420] pb-6 mb-14">
        <div className="flex flex-wrap items-center justify-between font-mono text-xs uppercase tracking-widest text-[#74786A] mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#B85C42] font-semibold">04 &bull; Inquiries &amp; Correspondence</span>
            <span>&mdash;</span>
            <span>The Telegram Desk</span>
          </div>
          <span>Direct Transmission Lines</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1A1A16] tracking-tight uppercase leading-none"
              >
                Telegram Desk.
              </motion.h2>
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#74786A] mt-2">
              Transmissions answered promptly regarding low-latency systems, research &amp; collaborative builds.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Statement & Coordinates */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A16] leading-[1.08]">
              Open for ambitious ventures, collaborative research &amp; engineering dispatches.
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-[#4A4A42] leading-relaxed max-w-xl"
          >
            Whether you wish to discuss local AI inference architectures, quantitative models, early-stage venture building with DriverSathi, or simply exchange ideas over good code &mdash; reach out directly through any of the four verified channels.
          </motion.p>

          {/* Location & Availability Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="pt-6 border-t border-[#242420]/15 flex flex-wrap gap-6 font-mono text-xs text-[#74786A]"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>Delhi NCR &bull; India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#B85C42]" />
              <span>IST (UTC+5:30)</span>
            </div>
            <div className="flex items-center gap-2 text-[#242420]">
              <span className="w-2 h-2 rounded-full bg-[#B85C42] animate-pulse" />
              <span>Available for Opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 4 Direct Channels (LinkedIn, GitHub, Instagram, Gmail) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-[#FAF7F0] border border-[#242420]/15 hover:border-[#B85C42] transition-all duration-300 shadow-paper hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#EFE9DF] border border-[#242420]/10 flex items-center justify-center text-[#B85C42] group-hover:bg-[#B85C42] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#74786A] group-hover:text-[#B85C42] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#74786A]">
                    {channel.category}
                  </p>

                  <h4 className="font-serif text-2xl text-[#1A1A16] group-hover:text-[#B85C42] transition-colors relative inline-block my-1">
                    {channel.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B85C42] group-hover:w-full transition-all duration-300" />
                  </h4>

                  <p className="font-mono text-xs text-[#B85C42] mb-2 font-medium">
                    {channel.handle}
                  </p>

                  <p className="font-sans text-xs text-[#74786A] leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#242420]/10 flex items-center justify-between font-mono text-[11px] text-[#242420] group-hover:text-[#B85C42] transition-colors">
                  <span>Open Transmission</span>
                  <span>&rarr;</span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

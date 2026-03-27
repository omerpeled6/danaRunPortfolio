import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const fadeUp = (delay) => ({
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-200 pt-20 pb-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-end text-right">
              <motion.h1
                variants={fadeUp(0)}
                initial="hidden"
                animate="visible"
                className="pb-4 text-5xl sm:text-6xl font-bold tracking-tight lg:text-7xl bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"
              >
                {HERO_CONTENT.title}
              </motion.h1>
              <motion.span
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="visible"
                className="text-2xl sm:text-3xl tracking-tight text-neutral-400"
              >
                דנה נסים – {HERO_CONTENT.subtitle.split('.')[0]}
              </motion.span>
              <motion.p
                variants={fadeUp(0.4)}
                initial="hidden"
                animate="visible"
                className="my-4 text-2xl sm:text-3xl tracking-tight text-neutral-400"
              >
                {HERO_CONTENT.subtitle}
              </motion.p>
              <motion.a
                href="#contact"
                variants={fadeUp(0.6)}
                initial="hidden"
                animate="visible"
                className="mt-4 bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50"
              >
                {HERO_CONTENT.cta}
              </motion.a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                src="/logo.jpg"
                alt="דנה נסים - DanaRun"
                className="rounded-2xl shadow-2xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

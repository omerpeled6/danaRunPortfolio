import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-right">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-bold tracking-tight lg:mt-16 lg:text-7xl bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"
            >
              {HERO_CONTENT.title}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight text-neutral-400"
            >
              דנה נסים – {HERO_CONTENT.subtitle.split('.')[0]}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-600 lg:text-xl leading-relaxed"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>
            <motion.a
              href="#contact"
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              {HERO_CONTENT.cta}
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="/photo.jpg"
              alt="דנה נסים - DanaRun"
              className="rounded-2xl shadow-2xl h-[600px] w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


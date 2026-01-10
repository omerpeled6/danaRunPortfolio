import { BENEFITS } from '../constants'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
  return (
    <div id="benefits" className="border-b border-neutral-200 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-neutral-800"
      >
        למה לבחור ב־<span className="text-cyan-500">DanaRun?</span>
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center max-w-sm"
          >
            <div className="mb-4 text-5xl text-cyan-600">
              <FaCheckCircle />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-800">{benefit.title}</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

import { BENEFITS } from '../constants'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
  return (
    <div id="benefits" className="border-b border-neutral-200 py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold text-neutral-800"
        >
          למה לבחור ב־<span className="text-cyan-500">DanaRun?</span>
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
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
    </div>
  )
}

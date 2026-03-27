import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div id="about" className="border-b border-neutral-200 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <h1 className="mb-16 text-center text-4xl text-neutral-800">
          קצת
          <span className="text-cyan-500"> עליי</span>
        </h1>
        <div className="flex flex-wrap items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-end">
              <p className="my-2 max-w-xl py-6 font-light tracking-tight text-neutral-600 text-base lg:text-lg leading-relaxed text-right">
                {ABOUT_TEXT.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl h-[500px] w-auto shadow-2xl object-cover" src="/me2.jpeg" alt="דנה נסים" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

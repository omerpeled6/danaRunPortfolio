import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div id="about" className="border-b border-neutral-200 pb-4 ">
      <h1 className="my-20 text-center text-4xl text-neutral-800">
        קצת
        <span className="text-cyan-500"> עליי</span>
      </h1>
      <div className="flex flex-wrap flex-row-reverse">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-[500px] w-auto shadow-2xl object-cover" src="/me2.jpeg" alt="דנה נסים" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-600 leading-relaxed text-right">
              {ABOUT_TEXT.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


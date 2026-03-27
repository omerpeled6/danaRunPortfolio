import { WORKSHOPS } from '../constants'
import { motion } from 'framer-motion'

export default function Workshops() {
  return (
    <div id="workshops" className="border-b border-neutral-200 py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold text-neutral-800"
        >
          סדנאות <span className="text-cyan-500">ומסלולים</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKSHOPS.map((workshop, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="flex flex-col h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl hover:border-cyan-500/50 transition-colors"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="mb-6 h-48 w-full rounded-xl object-cover"
              />
              <h3 className="mb-2 text-2xl font-bold text-neutral-800 text-right">{workshop.title}</h3>
              <span className="mb-4 block text-cyan-600 font-medium text-right">{workshop.type}</span>
              <p className="mb-6 text-neutral-600 leading-relaxed text-right whitespace-pre-line flex-grow">{workshop.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {workshop.details.map((detail, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 rounded bg-slate-100 px-3 py-1 text-sm font-medium text-cyan-700"
                  >
                    <span className="text-cyan-500">✓</span> {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

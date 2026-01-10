import { PERSONAL_TRAINING } from '../constants'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function Projects() {
  return (
    <div id="personal-training" className="border-b border-neutral-200 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-800"
      >
        ליווי <span className="text-cyan-500">אישי</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-12 mb-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/5"
        >
          <img
            src="/photo.jpg"
            alt="Personal Training"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-right"
        >
          <h3 className="mb-4 text-3xl font-bold text-neutral-800">{PERSONAL_TRAINING.title}</h3>
          <p className="mb-8 text-xl text-neutral-600 leading-relaxed text-right">
            {PERSONAL_TRAINING.description}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_TRAINING.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            {PERSONAL_TRAINING.cta}
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

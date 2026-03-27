import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <div id="contact" className="py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3 mb-10"
        >
          <img src="/logo2.jpg" alt="DanaRun Branding" className="rounded-2xl shadow-2xl w-full h-auto object-contain mb-2" />
          <h1 className="text-4xl font-bold text-neutral-800">צרו <span className="text-cyan-500">קשר</span></h1>
        </motion.div>
        <div className="flex flex-wrap items-start justify-center gap-8 lg:gap-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-right space-y-8"
          >
            <div className="flex items-center justify-start gap-4 text-xl text-neutral-700">
              <FaPhone className="text-cyan-600" />
              <span dir="ltr">{CONTACT.phoneNo}</span>
            </div>
            <div className="flex items-center justify-start gap-4 text-xl text-neutral-700">
              <FaEnvelope className="text-cyan-600" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-cyan-600 transition-colors">{CONTACT.email}</a>
            </div>
            <div className="flex items-center justify-start gap-4 text-xl text-neutral-700">
              <FaMapMarkerAlt className="text-cyan-600" />
              <span>{CONTACT.address}</span>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">עקבו אחריי</h3>
            <div className="flex gap-8 text-4xl">
              <a href={CONTACT.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebook /></a>
              <a href={CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform"><FaInstagram /></a>
            </div>
            <a
              href={`https://wa.me/${CONTACT.phoneNo.replace(/[-+ ]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-cyan-600 px-8 py-3 font-bold text-white hover:bg-cyan-700 transition-all shadow-lg"
            >
              שלחו לי הודעה בוואטסאפ
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

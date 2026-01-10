import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../constants'

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-16 w-auto" src="/logo1.jpg" alt="DanaRun Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl text-neutral-700">
        <a
          href={CONTACT.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href={CONTACT.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={`https://wa.me/${CONTACT.phoneNo.replace(/[-+ ]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-600 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  )
}


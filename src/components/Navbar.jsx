import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ${scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
        : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Social icons — left in RTL layout */}
          <div className="flex items-center gap-5 text-2xl text-gray-500">
            <a href={`https://wa.me/${CONTACT.phoneNo.replace(/[-+ ]/g, '')}`}
              target="_blank" rel="noopener noreferrer"
              className="hover:text-[#4ec3c1] transition-colors duration-200" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href={CONTACT.socials.instagram}
              target="_blank" rel="noopener noreferrer"
              className="hover:text-[#4ec3c1] transition-colors duration-200" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={CONTACT.socials.facebook}
              target="_blank" rel="noopener noreferrer"
              className="hover:text-[#4ec3c1] transition-colors duration-200" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>

          {/* Logo — right in RTL layout */}
          <a href="#" className="flex-shrink-0">
            <img
              className="h-10 sm:h-12 w-auto"
              src="/logo_black.jpg"
              alt="DanaRun Logo"
            />
          </a>

        </div>
      </div>
    </nav>
  )
}

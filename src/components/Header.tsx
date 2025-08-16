import React, { useState } from 'react';
import { useConsultation } from '../contexts/ConsultationContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openConsultationModal } = useConsultation();

  const navLinks = [
    { href: '#services', label: 'Xidmətlər' },
    { href: '#search', label: 'Universitet axtar' },
    { href: '#results', label: 'Nəticələr' },
    { href: '#testimonials', label: 'Təcrübələr' },
    { href: '#contact', label: 'Əlaqə' }
  ];

  return (
    <header className="backdrop-blur-md bg-white/80 shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
  <div className="flex-shrink-0 flex items-center space-x-2">
    <img 
      src={logo} 
      alt="Edupol Study Abroad" 
      className="w-12 h-12 object-contain" 
    />
    <h1 className="text-2xl font-extrabold text-primary-600 tracking-tight">
      Edupol Study Abroad
    </h1>
  </div>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={openConsultationModal}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform font-medium"
            >
              Ödənişsiz konsultasiya
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t shadow-lg rounded-b-xl">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={openConsultationModal}
                  className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-transform font-medium"
                >
                  Ödənişsiz konsultasiya
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

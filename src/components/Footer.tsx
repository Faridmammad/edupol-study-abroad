import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Center */}
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Edupol Study Abroad"
            className="h-20 object-contain" 
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Edupol Study Abroad. Bütün hüquqlar qorunur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

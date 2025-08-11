import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Edupol</h3>
              <p className="text-gray-400">Study Abroad</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Xaricdə təhsil almaq üçün professional dəstək. IELTS, SAT hazırlığından tutmuş 
              universitet qəbuluna qədər hər addımda yanınızdayıq.
            </p>
          
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
  © {new Date().getFullYear()} Edupol Study Abroad. Bütün hüquqlar qorunur.
</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Siyasəti
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                İstifadə Şərtləri
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Siyasəti
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
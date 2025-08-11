import React from 'react';
import { useConsultation } from '../contexts/ConsultationContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      {/* Decorative background waves */}
      <svg
        className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#hero-bg)"
          d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192V0H0Z"
        />
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(45)">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Xaricdə Təhsil Almaq
            <span className="block bg-gradient-to-r from-primary-200 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
              Arzularınızı Reallaşdırın
            </span>
          </h1>
          <p className="text-xl text-primary-100 leading-relaxed max-w-2xl">
            Dünyanın ən yaxşı universitetlərində təhsil almaq üçün{" "}
            <span className="font-semibold text-white">professional dəstək</span>. IELTS, SAT hazırlığından tutmuş universitet qəbuluna qədər hər addımda yanınızdayıq.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={openConsultationModal}
              className="bg-white text-primary-700 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-primary-100 hover:text-primary-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
              whileTap={{ scale: 0.95 }}
            >
              Pulsuz Konsultasiya
            </motion.button>
            <motion.button
              onClick={handleScrollToServices}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
              whileTap={{ scale: 0.95 }}
            >
              Xidmətlərimizi Tanıyın
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
  className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-10 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  {[
    { value: '500+', label: 'Uğurlu Tələbə' },
    { value: '50+', label: 'Ölkə' },
    { value: '95%', label: 'Qəbul Dərəcəsi' },
  ].map((stat, i) => (
    <div
      key={i}
      className="bg-white/10 rounded-xl px-8 py-5 shadow-md hover:bg-white/20 transition-colors"
    >
      <p className="text-3xl md:text-4xl font-extrabold text-primary-200 drop-shadow">
        {stat.value}
      </p>
      <p className="text-base md:text-lg text-primary-100">{stat.label}</p>
    </div>
  ))}
</motion.div>

        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-white/30 max-w-md w-full group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
                alt="Study Abroad Illustration"
                className="rounded-2xl w-full h-64 object-cover shadow-lg border-4 border-white/40 transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full px-6 py-2 shadow-lg flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              <span className="font-bold text-white text-lg">Edupol</span>
            </div>
            <div className="mt-8 text-center space-y-3">
              <h3 className="text-2xl font-semibold text-primary-900">Nə üçün Edupol?</h3>
              <ul className="text-left space-y-2 text-primary-900">
                {[
                  '10+ illik təcrübə',
                  'Professional komanda',
                  'Fərdi yanaşma',
                  'Nəticə garantisi',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

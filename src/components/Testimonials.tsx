import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';


const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials"
      className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top right, #4f46e5, #3730a3 50%, #1e1b4b)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Tələbələrin hekayələri</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
            Xaricdə təhsil almaq istəyən tələbələrin bizimlə yaşadıqları təcrübələr.
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Testimonial Content */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: Image & Info */}
            <div className="md:w-1/3 relative">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
                style={{ height: '100%', maxHeight: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white max-w-[80%]">
  <h3 className="text-2xl font-bold">{current.name}</h3>
  <p className="text-sm text-indigo-200">{current.city}</p>
  <p className="text-sm text-indigo-100 mt-1">📍 {current.university}</p>
</div>




            </div>

            {/* Right: Story */}
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center bg-white/5">
              <p className="text-lg leading-relaxed text-gray-100 mb-6">{current.story}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={prev}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-center mt-6 text-indigo-200 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
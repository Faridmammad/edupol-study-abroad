import React, { useState } from 'react';
import { services } from '../data/services';
import { useConsultation } from '../contexts/ConsultationContext';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openConsultationModal } = useConsultation();

  const handleShowDetails = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Xidmətlərimiz
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Xaricdə təhsil almaq üçün lazım olan bütün xidmətləri təqdim edirik. 
              Hər addımda professional dəstək alacaqsınız.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header Image with Overlay */}
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary-900/50 to-transparent flex items-center justify-center ">
                    <div className="p-6 text-white">
                      <h3 className="text-3xl font-bold shadow-xl shadow-slate-800 ">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleShowDetails(service)}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Ətraflı Məlumat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Detailed Information */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div
              className="relative h-52 bg-cover bg-center rounded-t-3xl"
              style={{ backgroundImage: `url(${selectedService.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary-900/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selectedService.description}
              </p>

              {/* Detailed Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {Object.entries(selectedService.detailedInfo).map(([key, value]) => {
                  const labels: Record<string, string> = {
                    duration: 'Kurs Müddəti',
                    price: 'Qiymət',
                    schedule: 'Cədvəl',
                    materials: 'Materiallar',
                    practiceTests: 'Məşq Testləri',
                    support: 'Dəstək',
                    guarantee: 'Nəticə Zəmanəti',
                    additionalInfo: 'Əlavə Məlumat',
                  };
                  const label = labels[key as keyof typeof labels];

                  if (['guarantee', 'additionalInfo'].includes(key)) return null;

                  return (
                    <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{label}</h4>
                      <p className="text-gray-600 mt-1 font-medium">{value}</p>
                    </div>
                  );
                })}
              </div>

              {/* Guarantee */}
              {selectedService.detailedInfo.guarantee && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                    ✅ Nəticə Zəmanəti
                  </h4>
                  <p className="text-green-700">{selectedService.detailedInfo.guarantee}</p>
                </div>
              )}

              {/* Additional Info */}
              {selectedService.detailedInfo.additionalInfo && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold text-blue-900 flex items-center gap-2 mb-2">
                    ℹ️ Əlavə Məlumat
                  </h4>
                  <p className="text-blue-700 leading-relaxed">{selectedService.detailedInfo.additionalInfo}</p>
                </div>
              )}

              {/* Features List */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 text-lg mb-4">Xidmətin əsas xüsusiyyətləri</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row">

                <button
                  onClick={openConsultationModal}
                  className="flex-1 bg-orange-900 text-zinc-50 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 border border-gray-300 shadow"
                >
                  Konsultasiya təyin et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
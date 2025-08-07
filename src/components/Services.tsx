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
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Xidmətlərimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Xaricdə təhsil almaq üçün lazım olan bütün xidmətləri təqdim edirik. 
              Hər addımda professional dəstək alacaqsınız.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Service Icon */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => handleShowDetails(service)}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Ətraflı Məlumat
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bütün Xidmətlərimizə Pulsuz Konsultasiya
              </h3>
              <p className="text-gray-600 mb-6">
                Hangi xidmətin sizin üçün ən uyğun olduğunu müəyyən etmək üçün 
                ekspertlərimizlə görüşün və fərdi plan hazırlayın.
              </p>
              <button onClick={openConsultationModal} className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
                Konsultasiya Təyin Et
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Detailed Information */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{selectedService.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {selectedService.description}
              </p>

              {/* Detailed Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Kurs Müddəti</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.duration}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Qiymət</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.price}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cədvəl</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.schedule}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Materiallar</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.materials}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Məşq Testləri</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.practiceTests}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dəstək</h4>
                  <p className="text-gray-600">{selectedService.detailedInfo.support}</p>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-900 mb-2">Nəticə Zəmanəti</h4>
                <p className="text-green-700">{selectedService.detailedInfo.guarantee}</p>
              </div>

              {/* Additional Information */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">Əlavə Məlumat</h4>
                <p className="text-blue-700 leading-relaxed">{selectedService.detailedInfo.additionalInfo}</p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Xidmətin Əsas Xüsusiyyətləri</h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Qeydiyyatdan Keç
                </button>
                <button onClick={openConsultationModal} className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Konsultasiya Təyin Et
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
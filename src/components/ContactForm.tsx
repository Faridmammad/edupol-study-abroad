import React, { useState } from 'react';
import { ContactForm as ContactFormType } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormType>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: '', label: 'Xidmət seçin' },
    { value: 'ielts', label: 'IELTS hazırlığı' },
    { value: 'sat', label: 'SAT hazırlığı' },
    { value: 'study-abroad', label: 'Xaricdə təhsil' },
    { value: 'consultation', label: 'Konsultasiya' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormType> = {};
    if (!formData.name.trim()) newErrors.name = 'Ad tələb olunur';
    if (!formData.email.trim()) newErrors.email = 'Email tələb olunur';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Düzgün email daxil edin';
    if (!formData.phone.trim()) newErrors.phone = 'Telefon nömrəsi tələb olunur';
    if (!formData.service) newErrors.service = 'Xidmət seçin';
    if (!formData.message.trim()) newErrors.message = 'Mesaj tələb olunur';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-20 blur-3xl z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/90 border-4 border-primary-100 rounded-3xl shadow-2xl p-12">
            <div className="text-6xl mb-6 animate-bounce">✅</div>
            <h2 className="text-3xl font-bold text-primary-700 mb-4">
              Mesajınız Göndərildi!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Təşəkkür edirik! Mesajınızı aldıq və ən qısa zamanda sizinlə əlaqə saxlayacağıq.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-primary-600 hover:to-primary-800 transition-all"
            >
              Yeni Mesaj Göndər
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary-200 to-primary-400 rounded-full opacity-20 blur-3xl z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-4 drop-shadow">
            Bizimlə əlaqə
          </h2>
          <p className="text-xl text-primary-900 max-w-3xl mx-auto">
            Xaricdə təhsil haqqında suallarınız varsa və ya konsultasiya almaq istəyirsinizsə, bizimlə əlaqə saxlayın. 24 saat ərzində cavab verəcəyik.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 border-4 border-primary-100 rounded-3xl shadow-2xl p-10 relative">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Mesaj göndərin
            </h3>
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-mediumtext-stone-700 mb-2">
                  Ad Soyad *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-primary-50/50 text-primary-900 placeholder-primary-300 ${errors.name ? 'border-red-500' : 'border-primary-200'}`}
                    placeholder="Ad və soyadınızı daxil edin"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-mediumtext-stone-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1" /></svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-primary-50/50 text-primary-900 placeholder-primary-300 ${errors.email ? 'border-red-500' : 'border-primary-200'}`}
                    placeholder="email@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-mediumtext-stone-700 mb-2">
                  Telefon nömrəsi *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-primary-50/50 text-primary-900 placeholder-primary-300 ${errors.phone ? 'border-red-500' : 'border-primary-200'}`}
                    placeholder="+994 50 123 45 67"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              {/* Service */}
              <div className="relative">
                <label htmlFor="service" className="block text-sm font-mediumtext-stone-700 mb-2">
                  Xidmət *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  </span>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-primary-50/50 text-primary-900 ${errors.service ? 'border-red-500' : 'border-primary-200'}`}
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value} className="text-primary-900">
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
              </div>
              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-mediumtext-stone-700 mb-2">
                  Mesaj *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-4 text-primary-400">
                  </span>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-primary-50/50 text-primary-900 placeholder-primary-300 ${errors.message ? 'border-red-500' : 'border-primary-200'}`}
                    placeholder="Sual və ya təklifinizi yazın..."
                  />
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:from-primary-600 hover:to-primary-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-bounce-slow"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Göndərilir...
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Mesaj göndər
                  </span>
                )}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/90 border-4 border-primary-100 rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Əlaqə məlumatları
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-700 text-left">Bakı şəhəri, Nəsimi rayonu,<br/>Rəşid Behbudov 146</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-700 text-left">+994 55 488 90 20</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-700 text-left">info@edupol.az</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-stone-700 text-left">Bazar ertəsi - Cümə: 09:00 - 18:00</p>
                    <p className="text-stone-700 text-left">Şənbə: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
{/* Sosial Media */}
<div className="bg-white/90 border-4 border-primary-100 rounded-3xl shadow-2xl p-8">
  <h3 className="text-2xl font-bold text-primary-900 mb-6">
    Sosial media
  </h3>
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/edupol"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
      aria-label="Facebook"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z"/>
</svg>
    </a>
    <a
      href="https://www.instagram.com/edupol.studyabroad"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
      aria-label="Instagram"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z"/>
</svg>

    </a>
    <a
      href="https://www.youtube.com/@edupolstudyabroad3727"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
      aria-label="YouTube"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M23.498 6.186a2.995 2.995 0 00-2.113-2.117C19.343 3.5 12 3.5 12 3.5s-7.343 0-9.385.57a2.995 2.995 0 00-2.113 2.117A31.09 31.09 0 000 12a31.09 31.09 0 00.502 5.814 2.995 2.995 0 002.113 2.117c2.042.571 9.385.571 9.385.571s7.343 0 9.385-.571a2.995 2.995 0 002.113-2.117A31.09 31.09 0 0024 12a31.09 31.09 0 00-.502-5.814zM9.545 15.568V8.432l6.182 3.568-6.182 3.568z"/>
</svg>

    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 
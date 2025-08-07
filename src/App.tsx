import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import UniversitySearch from './components/UniversitySearch';
import StudentResults from './components/StudentResults';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { useConsultation } from './contexts/ConsultationContext';
import './App.css';

function App() {
  const { isConsultationModalOpen, closeConsultationModal } = useConsultation();
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <UniversitySearch />
      <StudentResults />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ConsultationModal isOpen={isConsultationModalOpen} onClose={closeConsultationModal} />
    </div>
  );
}

export default App;

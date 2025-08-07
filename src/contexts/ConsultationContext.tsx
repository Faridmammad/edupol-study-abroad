import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConsultationContextType {
  isConsultationModalOpen: boolean;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

interface ConsultationProviderProps {
  children: ReactNode;
}

export const ConsultationProvider: React.FC<ConsultationProviderProps> = ({ children }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isConsultationModalOpen,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConsultationProvider } from './contexts/ConsultationContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConsultationProvider>
      <App />
    </ConsultationProvider>
  </React.StrictMode>
);



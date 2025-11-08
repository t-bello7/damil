import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage when available to persist user choice
  const [language, setLanguage] = useState(() => {
    try {
      const stored = window.localStorage.getItem('language');
      return stored || 'de';
    } catch (e) {
      return 'de';
    }
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'de' ? 'en' : 'de'));
  };

  // Persist language selection to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem('language', language);
    } catch (e) {
      // ignore storage errors
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
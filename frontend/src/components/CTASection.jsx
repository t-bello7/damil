import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CTASection = ({ onContactClick }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t.cta.title}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+4917624732421"
              className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              +49 176 247 324 21
            </a>
            
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.cta.book}
            </Button>
          </div>

          <p className="text-blue-100 mt-6 text-lg">
            {t.cta.expert}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
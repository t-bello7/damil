import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = ({ onContactClick }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex justify-center gap-3 mb-8 animate-fade-in">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
              {t.hero.badge1}
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
              {t.hero.badge2}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            {t.hero.subtitle}
          </p>

          {/* Company Name */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {t.hero.company}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.hero.cta}
            </Button>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700">
            <a
              href="tel:+4917624732421"
              className="flex items-center gap-2 text-lg font-semibold hover:text-blue-600 transition-colors group"
            >
              <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              +49 176 247 324 21
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
    </section>
  );
};

export default Hero;
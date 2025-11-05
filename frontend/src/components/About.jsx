import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="DNA Management Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
              {t.about.title}
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t.about.subtitle}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {t.about.description1}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {t.about.description2}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.about.description3}
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              {t.about.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t.about.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
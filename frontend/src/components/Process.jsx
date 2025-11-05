import React from 'react';
import { Card, CardContent } from './ui/card';
import { ClipboardList, Calculator, Calendar, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Process = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [ClipboardList, Calculator, Calendar, UserCheck];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            {t.process.title}
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          {t.process.subtitle}
        </h2>

        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          {t.process.description}
        </p>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200 -z-10"></div>

          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <CardContent className="pt-8 pb-6 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Number */}
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      {step.step}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
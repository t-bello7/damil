import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Award, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const WhyChooseUs = ({ onContactClick }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Award,
      title: t.whyUs.expertise.title,
      description: t.whyUs.expertise.description
    },
    {
      icon: Clock,
      title: t.whyUs.service.title,
      description: t.whyUs.service.description
    },
    {
      icon: Users,
      title: t.whyUs.professionals.title,
      description: t.whyUs.professionals.description
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            {t.whyUs.title}
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-4xl mx-auto text-gray-900">
          {t.whyUs.subtitle}
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {t.whyUs.cta}
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600 font-medium">{t.whyUs.stats.projects}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
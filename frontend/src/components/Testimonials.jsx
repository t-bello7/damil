import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { mockTestimonials } from '../data/mockData';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  };

  const currentTestimonial = mockTestimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            {t.testimonials.title}
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          {t.testimonials.subtitle}
        </h2>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl text-center mb-8 leading-relaxed italic">
                "{language === 'de' ? currentTestimonial.text_de : currentTestimonial.text_en}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg mb-1">
                  {currentTestimonial.name}
                </p>
                <p className="text-blue-600 font-medium">{currentTestimonial.source}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: t.contact.form.error,
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Allow overriding API base with env var in development
      const API_BASE = process.env.REACT_APP_CONTACT_FORM_API;
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.sent) {
        toast({ title: t.contact.form.success });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast({ title: data.detail || t.contact.form.error, variant: 'destructive' });
      }
    } catch (err) {
      console.error('Send email error', err);
      toast({ title: t.contact.form.error, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
              {t.contact.title}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.contact.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                      <a href="tel:+4917624732421" className="text-blue-600 hover:text-blue-700 font-medium">
                        +49 176 247 324 21
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:kontact@dnamanagement.de" className="text-blue-600 hover:text-blue-700 font-medium">
                        kontact@dnamanagement.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Standort</h3>
                      <p className="text-gray-600">LÜHMANNSTRASSE HAMBURG , 21075</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-none shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.contact.form.submit}</CardTitle>
                  <CardDescription>{t.contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form id="my-form" method="POST" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.name}
                          className="border-gray-300 focus:border-blue-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.email}
                          className="border-gray-300 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.phone}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+49"
                          className="border-gray-300 focus:border-blue-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{t.contact.form.service}</Label>
                        <Input
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          placeholder={t.contact.form.service}
                          className="border-gray-300 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.form.message}
                        rows={5}
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300"
                    >
                      {isSubmitting ? 'Wird gesendet...' : t.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
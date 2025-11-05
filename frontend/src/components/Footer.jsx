import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_e47a43b6-b1d0-4ff7-9333-3a68895ac010/artifacts/pvmp7alv_Sleek%20Lettermark%20Logo%20for%20DNA%20Management-2.jpg"
              alt="DNA Management Logo"
              className="h-16 w-auto object-contain mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-400 text-sm font-semibold">{t.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:+4917624732421" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+49 176 247 324 21</span>
              </a>
              <a href="mailto:info@dnamanagement.de" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@dnamanagement.de</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'de' ? 'Dienstleistungen' : 'Services'}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{language === 'de' ? 'Gebäudereinigung' : 'Building Cleaning'}</li>
              <li>{language === 'de' ? 'Büroreinigung' : 'Office Cleaning'}</li>
              <li>{language === 'de' ? 'Facility Management' : 'Facility Management'}</li>
              <li>{language === 'de' ? 'Glasreinigung' : 'Glass Cleaning'}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DNA Management. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Globe } from 'lucide-react';

const Header = ({ onContactClick }) => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://customer-assets.emergentagent.com/job_e47a43b6-b1d0-4ff7-9333-3a68895ac010/artifacts/pvmp7alv_Sleek%20Lettermark%20Logo%20for%20DNA%20Management-2.jpg"
              alt="DNA Management Logo"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {/* Show current language code to avoid confusion (DE when German is active) */}
              <span className="font-semibold">{language === 'de' ? 'DE' : 'EN'}</span>
            </Button>
            
            <Button
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              {t.nav.contact}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
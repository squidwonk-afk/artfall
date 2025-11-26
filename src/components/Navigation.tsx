import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/lore', label: t('nav.lore') },
    { path: '/music/glitchpop', label: t('nav.glitchpop') },
    { path: '/music/lofi', label: t('nav.lofi') },
    { path: '/visuals', label: t('nav.visuals') },
    { path: '/poetry', label: t('nav.poetry') },
    { path: '/minigame', label: t('nav.minigame') },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇱🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMenuOpen(false);
    // Set text direction for RTL languages
    if (lng === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-[#E86A2A]/20"
      >
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Left: Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#E86A2A] transition-colors p-2 z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Center: ARTFALL Logo */}
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)} 
            className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.3em] hover:text-[#E86A2A] transition-colors"
          >
            ARTFALL
          </Link>

          {/* Right: Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm text-white hover:text-[#FFB26B] transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline">{currentLanguage.flag}</span>
            </button>
            
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 right-0 bg-black/95 backdrop-blur-md border border-[#E86A2A]/30 rounded-lg overflow-hidden min-w-[180px] shadow-xl"
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        i18n.language === lang.code 
                          ? 'bg-[#E86A2A]/20 text-[#E86A2A] border-l-2 border-[#E86A2A]' 
                          : 'text-white hover:bg-[#E86A2A]/10 hover:text-[#FFB26B]'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="tracking-wide">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/95 backdrop-blur-md border-b border-[#E86A2A]/20 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base tracking-wider transition-colors border-l-2 pl-4 ${
                      location.pathname === link.path 
                        ? 'text-[#E86A2A] border-[#E86A2A] bg-[#E86A2A]/10' 
                        : 'text-white hover:text-[#FFB26B] border-transparent hover:border-[#FFB26B]/50 hover:bg-[#E86A2A]/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

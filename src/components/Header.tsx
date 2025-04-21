import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavItem {
  key: string;
  href: string;
}

const navItems: NavItem[] = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-black">🚀</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-black-600 hover:text-teal-700 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('es')}>
                <img src="https://flagcdn.com/w40/cr.png" alt="ES" className="w-6 h-4 rounded shadow" />
              </button>
              <button onClick={() => changeLanguage('en')}>
                <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-6 h-4 rounded shadow" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}

            {/* Language Switcher for mobile */}
            <div className="flex space-x-4 mt-4 justify-center">
              <button onClick={() => changeLanguage('es')}>
                <img src="https://flagcdn.com/w40/cr.png" alt="ES" className="w-6 h-4 rounded shadow" />
              </button>
              <button onClick={() => changeLanguage('en')}>
                <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-6 h-4 rounded shadow" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  logoText?: string;
  logoImage?: string;
  navItems: Array<{
    label: string;
    href: string;
  }>;
  ctaLabel: string;
  ctaLink: string;
}

const Header: React.FC<HeaderProps> = ({
  logoText = 'Company',
  logoImage,
  navItems,
  ctaLabel,
  ctaLink,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="h-10" />
            ) : (
              <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                {logoText}
              </span>
            )}
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className={`font-medium hover:text-primary-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              href={ctaLink}
              variant={isScrolled ? 'primary' : 'light'}
            >
              {ctaLabel}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button 
                    href={ctaLink}
                    variant="primary"
                    className="w-full"
                  >
                    {ctaLabel}
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
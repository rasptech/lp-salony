
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preços', href: '#precos' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 sm:py-4 glass' : 'py-4 sm:py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center">
            <img
              src="https://horizons-cdn.hostinger.com/68caaa43-582a-4766-aa21-fa491638c064/64693ad5b9d664c83d03a03702a77caa.webp"
              alt="Salony"
              className={`h-6 sm:h-7 transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className={`rounded-full px-6 py-5 text-sm font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                  : 'bg-white text-primary hover:bg-white/90'
                }`}
              asChild
            >
              <a href="#cta" data-cta="cta_header_desktop">Começar agora</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 p-2.5 -mr-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || mobileMenuOpen ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl md:hidden max-h-[calc(100dvh-72px)] overflow-y-auto"
          >
            <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full rounded-full bg-primary text-white hover:bg-primary/90 py-5 sm:py-6 text-base sm:text-lg mt-3 sm:mt-4"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#cta" data-cta="cta_header_mobile">Começar agora</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

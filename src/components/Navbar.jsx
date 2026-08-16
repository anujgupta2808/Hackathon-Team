import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/logo.png';
import { Menu, X, ArrowRight, Users, Trophy, Radar, Mail, Info } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about', icon: Info },
  { label: 'Team', href: '#team', icon: Users },
  { label: 'Team Page', href: '#team-page', icon: Users },
  { label: 'Our Hackathons', href: '#our-hackathons', icon: Trophy },
  { label: 'Live Tracker', href: '#live-tracker', icon: Radar },
  { label: 'Contact', href: '#contact', icon: Mail },
];

function Navbar({ onNavigate, currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);

    // Handle hash-based page navigation
    if (href === '#privacy-policy' || href === '#terms-conditions' || href === '#sitemap' || href === '#team-page') {
      if (onNavigate) {
        onNavigate(href.replace('#', ''));
      }
      return;
    }

    // If not on home page, navigate home first then scroll to section
    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 350);
      }
      return;
    }

    // Scroll to section on home page
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBrandClick = () => {
    setIsMobileOpen(false);
    if (onNavigate) {
      onNavigate(null); // Go home
    }
  };

  return (
    <>
      {/* Dynamic Navbar */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/60 shadow-lg shadow-slate-950/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
            {/* Brand / Logo - no background */}
            <button
              onClick={handleBrandClick}
              className="flex items-center gap-2.5 group"
            >
              <img
                src={logoUrl}
                alt="Phoenix Logo"
                className={`w-8 h-8 md:w-9 md:h-9 object-contain mix-blend-screen transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(99,102,241,0.4)] ${
                  isScrolled ? 'w-7 h-7 md:w-8 md:h-8' : ''
                }`}
              />
              <span className="text-slate-100 font-bold tracking-tight text-base sm:text-lg transition-all duration-300">
                PHOENIX
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800/50 transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <button
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-px"
              >
                Contact Team
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Dynamic Island Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-slate-100 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-lg shadow-slate-950/50 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800/80"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Dynamic Island Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              key="island"
              initial={{ scale: 0.9, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -20, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md md:hidden"
            >
              <div className="rounded-[2rem] bg-slate-950/90 backdrop-blur-2xl border border-slate-700/60 shadow-2xl shadow-slate-950/60 overflow-hidden">
                {/* Island top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <img src={logoUrl} alt="Phoenix Logo" className="w-6 h-6 object-contain" />
                    <span className="text-slate-100 font-bold text-sm tracking-wide">
                      PHOENIX
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-700/80 transition-colors"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Island content */}
                <nav className="px-4 py-4 flex flex-col gap-1">
                  {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.05, duration: 0.3 }}
                        onClick={() => handleNavClick(item.href)}
                        className="flex items-center gap-3 text-left px-4 py-3 rounded-xl text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 font-medium transition-colors"
                      >
                        <span className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-indigo-400" />
                        </span>
                        {item.label}
                      </motion.button>
                    );
                  })}

                  {/* Legal pages */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Legal
                    </p>
                    {[
                      { label: 'Privacy Policy', href: '#privacy-policy' },
                      { label: 'Terms & Conditions', href: '#terms-conditions' },
                      { label: 'Sitemap', href: '#sitemap' },
                    ].map((item, index) => (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.14 + (NAV_ITEMS.length + index) * 0.05, duration: 0.3 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-4 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 text-sm transition-colors"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + NAV_ITEMS.length * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick('#contact')}
                    className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-sm font-medium transition-colors"
                  >
                    Contact Team
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </nav>

                {/* Island footer */}
                <div className="px-5 py-3 border-t border-slate-800/80">
                  <p className="text-xs text-slate-500">
                    Thakur College of Science & Commerce
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">2nd Year • CS / IT</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
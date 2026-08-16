import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import TeamSection from './components/TeamSection.jsx';
import TeamPage from './components/TeamPage.jsx';
import OurHackathons from './components/OurHackathons.jsx';
import LiveIndiaTracker from './components/LiveIndiaTracker.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsConditions from './components/TermsConditions.jsx';
import Sitemap from './components/Sitemap.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle hash-based navigation on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy-policy' || hash === 'terms-conditions' || hash === 'sitemap' || hash === 'team-page') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    if (page === null || page === 'home') {
      setCurrentPage('home');
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleBack = () => {
    handleNavigate('home');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onNavigate={handleNavigate} />
            <AboutUs />
            <TeamSection onNavigate={handleNavigate} />
            <OurHackathons />
            <LiveIndiaTracker />
            <ContactUs />
          </motion.main>
        )}

        {currentPage === 'privacy-policy' && (
          <motion.div
            key="privacy-policy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PrivacyPolicy onBack={handleBack} />
          </motion.div>
        )}

        {currentPage === 'terms-conditions' && (
          <motion.div
            key="terms-conditions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TermsConditions onBack={handleBack} />
          </motion.div>
        )}

        {currentPage === 'sitemap' && (
          <motion.div
            key="sitemap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Sitemap onBack={handleBack} />
          </motion.div>
        )}

        {currentPage === 'team-page' && (
          <motion.div
            key="team-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TeamPage onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
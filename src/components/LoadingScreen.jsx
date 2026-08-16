import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/logo.png';

function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2.5 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
        >
          {/* Background glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.1] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl"
          />

          {/* Logo zoom animation */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.6, times: [0, 0.7, 1], ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <motion.img
              src={logoUrl}
              alt="Phoenix Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-3xl md:text-4xl font-bold tracking-[0.3em] text-slate-100"
            >
              PHOENIX
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              className="mt-4 h-0.5 w-40 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-4 text-xs md:text-sm text-slate-500 tracking-[0.2em] uppercase"
            >
              Charting New Territory
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
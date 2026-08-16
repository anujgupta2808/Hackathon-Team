import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

function PageLayout({ icon: Icon = FileText, eyebrow, title, subtitle, onBack, children }) {
  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-radial-glow overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-32 right-[5%] w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-32 left-[5%] w-80 h-80 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            <Icon className="w-4 h-4" />
            {eyebrow}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-surface brand-glow rounded-2xl p-6 md:p-10"
        >
          {children}
        </motion.div>

        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-slate-600"
        >
          <img src="logo.png" alt="Phoenix Logo" className="w-5 h-5 object-contain mix-blend-screen" />
          <span className="text-sm">
            Phoenix<span className="text-indigo-400"></span> • 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default PageLayout;
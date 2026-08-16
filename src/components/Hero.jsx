import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Users,
  Map,
  ChevronDown,
  ArrowRight,
  Trophy,
} from 'lucide-react';

const KPIS = [
  {
    label: 'Hackathons Competed',
    value: '0',
    icon: Rocket,
    accent: 'text-red-400',
  },
  {
    label: 'Wins',
    value: '0',
    icon: Trophy,
    accent: 'text-amber-400',
  },
  {
    label: 'Next Up',
    value: 'SIH 2026',
    icon: Map,
    accent: 'text-navy-400',
  },
  {
    label: 'Team Members',
    value: '6',
    icon: Users,
    accent: 'text-emerald-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero({ onNavigate }) {
  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-radial-glow pt-24 pb-16"
    >
      {/* Subtle animated grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #818cf8 1px, transparent 1px), linear-gradient(to bottom, #818cf8 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-red-600/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-navy-600/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface text-sm text-slate-300 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            SIH 2026 — Our First Hackathon
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.05]"
          >
            Phoenix,
            <br />
            <span className="text-gradient-animated">Ready to Explore</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of 2nd-year CS/IT undergraduate students from{' '}
            <span className="text-slate-200 font-medium">
              Thakur College of Science and Commerce (TCSC), Mumbai
            </span>
            . No wins yet — SIH 2026 is our first hackathon, and we're ready to
            chart our course.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('#live-tracker')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-slate-100 font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
            >
              Explore Live Hackathons
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('team-page')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:text-slate-100 hover:border-red-500/60 hover:bg-slate-900/60 font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
            >
              Meet the Team
            </button>
          </motion.div>

          {/* KPI Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 md:mt-20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {KPIS.map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div
                    key={kpi.label}
                    className="glass-surface glass-surface-hover brand-glow rounded-2xl px-4 py-5 sm:px-6 sm:py-6 text-center"
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${kpi.accent} mx-auto mb-2`} />
                    <div className="text-2xl sm:text-3xl font-bold text-slate-100">
                      {kpi.value}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-tight">
                      {kpi.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;
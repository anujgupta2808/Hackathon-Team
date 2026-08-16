import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  Layers,
  Rocket,
} from 'lucide-react';
import ourHackathonsData from '../data/ourHackathonsData.js';

const TABS = [
  { key: 'all', label: 'All', icon: Layers, filter: () => true },
  {
    key: 'upcoming',
    label: 'Upcoming',
    icon: Calendar,
    filter: (h) => h.status === 'Upcoming' || h.status === 'Our First Hackathon 🚀',
  },
  {
    key: 'past',
    label: 'Past',
    icon: Trophy,
    filter: (h) => h.status.includes('Winner') || h.status.includes('Finalist'),
  },
];

const STATUS_STYLES = {
  success:
    'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  neutral:
    'bg-slate-500/10 text-slate-300 border-slate-500/30',
  info: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
};

function OurHackathons() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredHackathons = useMemo(() => {
    const activeTabConfig = TABS.find((tab) => tab.key === activeTab);
    return ourHackathonsData.filter(activeTabConfig.filter);
  }, [activeTab]);

  return (
    <section id="our-hackathons" className="relative py-20 md:py-28 bg-radial-glow-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            <Rocket className="w-4 h-4" />
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Every Legend Starts
            <br />
            <span className="text-gradient-animated">With a First Step</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            We have no wins yet — SIH 2026 is our very first hackathon. We are
            preparing to compete on the national stage and make our mark.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex flex-wrap justify-center items-center gap-1 p-1.5 rounded-2xl glass-surface">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-slate-100'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="hackathon-tab-pill"
                      className="absolute inset-0 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredHackathons.map((hackathon) => (
              <motion.article
                key={hackathon.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-surface glass-surface-hover brand-glow rounded-2xl p-6 md:p-7 flex flex-col h-full"
              >
                {/* Status tag + date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                      STATUS_STYLES[hackathon.statusTone] || STATUS_STYLES.neutral
                    }`}
                  >
                    {hackathon.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {hackathon.date}
                  </span>
                </div>

                {/* Event name & organizer */}
                <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                  {hackathon.eventName}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{hackathon.organizer}</p>

                {/* Event type */}
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-indigo-300/80">
                  <MapPin className="w-3.5 h-3.5" />
                  {hackathon.eventType}
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-800/80" />

                {/* Project title */}
                <div className="inline-flex items-start gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">
                    {hackathon.projectTitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                  {hackathon.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {hackathon.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  {hackathon.projectRepo ? (
                    <a
                      href={hackathon.projectRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Project Repository
                    </a>
                  ) : (
                    <span className="text-xs text-slate-600 italic">
                      Repository coming soon
                    </span>
                  )}

                  <span className="w-px h-4 bg-slate-800/80" />

                  {hackathon.liveDemo ? (
                    <a
                      href={hackathon.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo / Devfolio
                    </a>
                  ) : (
                    <span className="text-xs text-slate-600 italic">
                      Live demo pending
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state for Past tab */}
        <AnimatePresence>
          {filteredHackathons.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <Trophy className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-300 font-medium">No wins yet — but we're just getting started</p>
              <p className="text-sm text-slate-500 mt-2">
                SIH 2026 is our first hackathon. Check back after December 2026!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OurHackathons;
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Calendar,
  Trophy,
  ExternalLink,
  Radio,
  Building2,
  Users,
} from 'lucide-react';
import liveIndiaHackathonsData from '../data/liveIndiaHackathonsData.js';

const MODE_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'Online', label: 'Online' },
  { key: 'In-Person', label: 'In-Person' },
];

function formatDateRange(start, end) {
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const startFormatted = formatDate(start);
  const endFormatted = formatDate(end);

  if (startFormatted === endFormatted) {
    return startFormatted;
  }
  return `${startFormatted} — ${endFormatted}`;
}

const PLATFORM_COLORS = {
  SIH: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  Devfolio: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  Unstop: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
  HackerEarth: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
  eYantra: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  Nasscom: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
};

function LiveIndiaTracker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modeFilter, setModeFilter] = useState('all');

  const filteredHackathons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return liveIndiaHackathonsData.filter((hackathon) => {
      // Mode filter
      if (modeFilter !== 'all' && hackathon.mode !== modeFilter) {
        return false;
      }

      // Search query
      if (query) {
        const searchableText = [
          hackathon.title,
          hackathon.organizer,
          hackathon.description,
          ...hackathon.techFocus,
        ]
          .join(' ')
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, modeFilter]);

  return (
    <section
      id="live-tracker"
      className="relative py-20 md:py-28 bg-radial-glow overflow-hidden"
    >
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
            <Radio className="w-4 h-4" />
            Live Tracker
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Live Hackathon Radar
            <br />
            <span className="text-gradient-animated">Across India</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            Current and upcoming competitions from Devfolio, Unstop, SIH,
            eYantra and more — curated so you never miss a build weekend.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-surface rounded-2xl p-4 md:p-5 mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by hackathon, platform, or tech focus..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
            </div>

            {/* Mode filter */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/60 border border-slate-800/80 overflow-x-auto no-scrollbar">
              {MODE_FILTERS.map((filter) => {
                const isActive = modeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setModeFilter(filter.key)}
                    className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                      isActive
                        ? 'text-slate-100'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mode-filter-pill"
                        className="absolute inset-0 rounded-lg bg-indigo-600/80"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div className="mb-6 text-sm text-slate-500">
          Showing{' '}
          <span className="text-slate-200 font-medium">
            {filteredHackathons.length}
          </span>{' '}
          of {liveIndiaHackathonsData.length} hackathons
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 truncate">
                        {hackathon.organizer}
                      </p>
                      <h3 className="text-base font-semibold text-slate-100 leading-snug">
                        {hackathon.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border shrink-0 ${
                      PLATFORM_COLORS[hackathon.platform] ||
                      'bg-slate-500/10 text-slate-300 border-slate-500/30'
                    }`}
                  >
                    {hackathon.platform}
                  </span>
                </div>

                {/* Meta info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />
                    <span className="leading-tight">
                      {formatDateRange(hackathon.startDate, hackathon.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />
                    <span className="truncate">{hackathon.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Trophy className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                    <span className="truncate">{hackathon.prizePool}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {hackathon.description}
                </p>

                {/* Tech focus */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {hackathon.techFocus.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Apply CTA */}
                <a
                  href={hackathon.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-sweep inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/40"
                >
                  Apply Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filteredHackathons.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-300 font-medium">No hackathons found</p>
              <p className="text-sm text-slate-500 mt-2">
                Try adjusting your search query or mode filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default LiveIndiaTracker;
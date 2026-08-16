import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import teamData from '../data/teamData.js';
import TeamCard from './TeamCard.jsx';

function TeamSection({ onNavigate }) {
  return (
    <section id="team" className="relative py-20 md:py-28 bg-radial-glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            <Users className="w-4 h-4" />
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            The Minds Behind
            <br />
            <span className="text-gradient-animated">Every Build</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            Six engineers. One mission. Each member brings a specialized skill
            set — from ML pipelines to pixel-perfect interfaces — unified by a
            shared obsession with shipping exceptional software. We're gearing
            up for our first hackathon, SIH 2026.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {teamData.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* View full team page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center"
        >
          <button
            onClick={() => onNavigate && onNavigate('team-page')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-slate-100 font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
          >
            View Full Team Page
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
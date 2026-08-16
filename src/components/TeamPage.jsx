import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  GraduationCap,
  Globe,
  Linkedin,
  Github,
  MessageSquare,
  Instagram,
} from 'lucide-react';
import teamData from '../data/teamData.js';

const INITIALS_COLORS = [
  'from-navy-600 to-red-600',
  'from-red-600 to-navy-700',
  'from-navy-700 to-red-500',
  'from-red-500 to-navy-600',
  'from-navy-800 to-red-600',
  'from-red-600 to-navy-800',
];

function TeamPage({ onBack }) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero with team group image as background */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="logo.png"
          alt="Phoenix Team"
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-navy-950/40 to-black" />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="absolute top-24 left-4 sm:left-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-slate-700/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
              <Users className="w-4 h-4" />
              The Phoenix Team
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
              Meet the Minds Behind
              <br />
              <span className="text-gradient-animated-red">Phoenix</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Six engineers. One mission. Each member brings a specialized skill
              set — from ML pipelines to pixel-perfect interfaces — unified by a
              shared obsession with shipping exceptional software.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Member details — 1:3 ratio, alternating sides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {teamData.map((member, index) => {
            const isLeft = index % 2 === 0;
            const gradient = INITIALS_COLORS[index % INITIALS_COLORS.length];
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            const socials = [
              { key: 'portfolio', label: 'Portfolio', url: member.socials.portfolio, icon: Globe },
              { key: 'linkedin', label: 'LinkedIn', url: member.socials.linkedin, icon: Linkedin },
              { key: 'github', label: 'GitHub', url: member.socials.github, icon: Github },
              { key: 'whatsapp', label: 'WhatsApp', url: member.socials.whatsapp, icon: MessageSquare },
              { key: 'instagram', label: 'Instagram', url: member.socials.instagram, icon: Instagram },
            ];

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 md:gap-10 items-stretch`}
              >
                {/* Photo — 1 part */}
                <div className="lg:w-1/4">
                  <div
                    className={`relative h-full min-h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl shadow-black/50`}
                  >
                    {member.avatarUrl ? (
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-28 h-28 mx-auto rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">
                            {initials}
                          </span>
                        </div>
                        <p className="mt-4 text-white/80 text-sm font-medium">
                          {member.role}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                {/* Info — 3 parts */}
                <div className="lg:w-3/4">
                  <div className="glass-surface-navy brand-glow-red rounded-2xl p-6 md:p-10 h-full">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                        {member.name}
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-300 border border-red-500/20">
                        {member.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-5">
                      <GraduationCap className="w-4 h-4 text-red-400/70" />
                      {member.academicInfo}
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-900/80 text-slate-300 border border-navy-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-2 pt-5 border-t border-navy-800/80">
                      {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.key}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on ${social.label}`}
                            title={social.label}
                            className="p-2.5 rounded-lg border border-navy-800/80 text-slate-500 hover:text-slate-100 hover:border-red-500/40 hover:bg-navy-900/50 transition-all duration-300"
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
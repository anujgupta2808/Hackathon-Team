import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Linkedin,
  Github,
  MessageSquare,
  Instagram,
  User,
  GraduationCap,
} from 'lucide-react';

const INITIALS_COLORS = [
  'from-navy-600 to-red-600',
  'from-red-600 to-navy-700',
  'from-navy-700 to-red-500',
  'from-red-500 to-navy-600',
  'from-navy-800 to-red-600',
  'from-red-600 to-navy-800',
];

function TeamCard({ member, index }) {
  const gradient = INITIALS_COLORS[index % INITIALS_COLORS.length];

  const socials = [
    {
      key: 'portfolio',
      label: 'Portfolio',
      url: member.socials.portfolio,
      icon: Globe,
      hoverClass:
        'hover:bg-slate-700/60 hover:text-slate-100 hover:border-slate-500/60 hover:shadow-lg hover:shadow-slate-500/10',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      url: member.socials.linkedin,
      icon: Linkedin,
      hoverClass:
        'hover:bg-red-600/15 hover:text-red-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10',
    },
    {
      key: 'github',
      label: 'GitHub',
      url: member.socials.github,
      icon: Github,
      hoverClass:
        'hover:bg-navy-600/15 hover:text-navy-200 hover:border-navy-400/50 hover:shadow-lg hover:shadow-navy-500/10',
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      url: member.socials.whatsapp,
      icon: MessageSquare,
      hoverClass:
        'hover:bg-red-600/15 hover:text-red-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      url: member.socials.instagram,
      icon: Instagram,
      hoverClass:
        'hover:bg-navy-600/15 hover:text-navy-300 hover:border-navy-500/40 hover:shadow-lg hover:shadow-navy-500/10',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-surface glass-surface-hover brand-glow rounded-2xl p-6 md:p-7 flex flex-col h-full"
    >
      {/* Avatar / Initials placeholder */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-slate-100 font-bold text-lg shadow-lg`}
        >
          {member.avatarUrl ? (
            <img
              src={member.avatarUrl}
              alt={member.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <User className="w-7 h-7 opacity-80" />
          )}
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-red-500 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </span>
        </div>

        {/* Role badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-300 border border-red-500/20">
          {member.role}
        </span>
      </div>

      {/* Name & academic */}
      <h3 className="text-lg font-semibold text-slate-100">{member.name}</h3>
      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
        <GraduationCap className="w-3.5 h-3.5 text-red-400/70" />
        {member.academicInfo}
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">
        {member.bio}
      </p>

      {/* Tech stack */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
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
                className={`p-2 rounded-lg border border-transparent text-slate-500 transition-all duration-300 ${social.hoverClass}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Cloud,
  Brain,
  LayoutGrid,
  GraduationCap,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description:
      'End-to-end product engineering with modern frameworks like React, Next.js, Node.js, and TypeScript — designed for scale from day one.',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'hover:border-red-500/40',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Resilient, cost-optimized deployments on AWS, Vercel, and Docker — with CI/CD pipelines that ship with confidence.',
    accent: 'text-navy-400',
    bg: 'bg-navy-500/10',
    border: 'hover:border-navy-500/40',
  },
  {
    icon: Brain,
    title: 'Machine Learning Systems',
    description:
      'Practical AI solutions from computer vision to NLP — trained, evaluated, and deployed as production-grade microservices.',
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'hover:border-red-500/40',
  },
  {
    icon: LayoutGrid,
    title: 'System Architecture',
    description:
      'Thoughtful architecture decisions — data modeling, API design, and scalability planning — built for real-world constraints.',
    accent: 'text-navy-400',
    bg: 'bg-navy-500/10',
    border: 'hover:border-navy-500/40',
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function AboutUs() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-radial-glow-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Built by Students.
            <br />
            <span className="text-gradient-animated">Engineered Like Professionals.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            Phoenix began as a shared obsession — a group of 2nd-year
            IT undergraduates at Thakur College of Science and Commerce who
            refused to wait for "senior year" to build production-grade
            software. We have no wins yet — SIH 2026 is our first hackathon —
            and we're approaching it with the hunger of a team with everything
            to prove.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={FADE_UP}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`glass-surface glass-surface-hover brand-glow rounded-2xl p-6 md:p-7 ${cap.border} transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${cap.bg} mb-5`}>
                  <Icon className={`w-5 h-5 ${cap.accent}`} />
                </div>
                <h3 className="text-slate-100 font-semibold mb-2.5">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* TCSC Feature Card */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 md:mt-14"
        >
          <div className="glass-surface brand-glow rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
              {/* College crest / badge */}
              <div className="relative p-8 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800/80 bg-gradient-to-br from-navy-950/60 to-red-950/40">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center shadow-lg shadow-navy-950/50">
                    <Building2 className="w-10 h-10 text-red-400" />
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 text-slate-200 font-semibold">
                    <GraduationCap className="w-4 h-4 text-red-400" />
                    TCSC
                  </div>
                  <p className="mt-1 text-xs text-slate-500">College Crest Placeholder</p>
                </div>
              </div>

              {/* TCSC details */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                    <Award className="w-3.5 h-3.5" />
                    Academic Excellence
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Accredited
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                  Thakur College of Science & Commerce
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8">
                  Located in Kandivali East, Mumbai — a premier institution known
                  for its rigorous science and commerce curriculum, vibrant tech
                  culture, and consistent academic results. Our team represents
                  the college's undergraduate IT programs, pushing
                  beyond the classroom to build solutions that matter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-slate-900/50 border border-slate-800/80 p-4">
                    <div className="text-2xl font-bold text-slate-100">2025–28</div>
                    <div className="mt-1 text-xs text-slate-500">Batch Duration</div>
                  </div>
                  <div className="rounded-xl bg-slate-900/50 border border-slate-800/80 p-4">
                    <div className="text-2xl font-bold text-red-400">IT</div>
                    <div className="mt-1 text-xs text-slate-500">Domain Focus</div>
                  </div>
                  <div className="rounded-xl bg-slate-900/50 border border-slate-800/80 p-4">
                    <div className="text-2xl font-bold text-slate-100">Top 5%</div>
                    <div className="mt-1 text-xs text-slate-500">Academic Standing</div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-2 text-sm text-slate-500">
                  <Sparkles className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <p>
                    Our education emphasizes not just theory, but the disciplined
                    practice of turning ideas into working software — exactly
                    what hackathons demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Map,
  Home,
  Rocket,
  Mail,
  Scale,
  Compass,
  ArrowRight,
} from 'lucide-react';
import PageLayout from './PageLayout.jsx';

const SECTIONS = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { label: 'Home', description: 'Landing page with hero, KPIs, and overview', href: '#top' },
      { label: 'About Us', description: 'Our story, capabilities, and college background', href: '#about' },
      { label: 'Team', description: 'Meet the six members of Phoenix', href: '#team' },
      { label: 'Team Page', description: 'Full team page with member details', href: '#team-page' },
      { label: 'Our Hackathons', description: 'Our hackathon journey — SIH 2026 is our first', href: '#our-hackathons' },
      { label: 'Live Tracker', description: 'Live hackathon radar across India', href: '#live-tracker' },
      { label: 'Contact Us', description: 'Get in touch with the team', href: '#contact' },
    ],
  },
  {
    title: 'Legal Pages',
    icon: Scale,
    links: [
      { label: 'Privacy Policy', description: 'How we collect, use, and protect your data', href: '#privacy-policy' },
      { label: 'Terms & Conditions', description: 'Rules and guidelines for using our website', href: '#terms-conditions' },
      { label: 'Sitemap', description: 'Overview of all pages on this website', href: '#sitemap' },
    ],
  },
  {
    title: 'External Resources',
    icon: Rocket,
    links: [
      { label: 'Smart India Hackathon', description: 'Official SIH portal — our first hackathon', href: 'https://sih.gov.in' },
      { label: 'Devfolio', description: 'Hackathon platform for project submissions', href: 'https://devfolio.co' },
      { label: 'Unstop', description: 'Competitions and hackathon listings', href: 'https://unstop.com' },
      { label: 'GitHub', description: 'Our open-source repositories', href: 'https://github.com/vedantmh48-cpu' },
    ],
  },
];

function Sitemap({ onBack }) {
  return (
    <PageLayout
      icon={Map}
      eyebrow="Navigation"
      title="Sitemap"
      subtitle="A complete overview of every page and section on the Phoenix website. Use this to quickly find what you're looking for."
      onBack={onBack}
    >
      <div className="space-y-10">
        {SECTIONS.map((section, sectionIndex) => {
          const SectionIcon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <SectionIcon className="w-4 h-4 text-indigo-400" />
                <h2 className="text-lg font-semibold text-slate-200">
                  {section.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.links.map((link, linkIndex) => {
                  const isExternal = link.href.startsWith('http');
                  const isHash = link.href.startsWith('#');

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (isHash && !isExternal) {
                          e.preventDefault();
                          if (link.href === '#privacy-policy' || link.href === '#terms-conditions' || link.href === '#sitemap' || link.href === '#team-page') {
                            onBack();
                            setTimeout(() => {
                              window.location.hash = link.href;
                            }, 100);
                          } else {
                            const el = document.querySelector(link.href);
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }
                        }
                      }}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                      className="group glass-surface glass-surface-hover rounded-xl p-4 flex items-start gap-3 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                        <Compass className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                            {link.label}
                          </span>
                          {isExternal && (
                            <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-colors -rotate-45" />
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          );
        })}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">
                Can't find what you're looking for?
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Reach out to us directly — we're happy to help.
              </p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/40"
          >
            Contact Us
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </PageLayout>
  );
}

export default Sitemap;
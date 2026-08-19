import React from 'react';
import { motion } from 'framer-motion';
import logoUrl from '../assets/logo.png';
import {
  Mail,
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  Phone,
} from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Team Page', href: '#team-page' },
  { label: 'Our Hackathons', href: '#our-hackathons' },
  { label: 'Live Tracker', href: '#live-tracker' },
  { label: 'Contact', href: '#contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#privacy-policy' },
  { label: 'Terms & Conditions', href: '#terms-conditions' },
  { label: 'Sitemap', href: '#sitemap' },
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/vedantmh48-cpu',
    icon: Github,
    hoverClass: 'hover:text-slate-100 hover:border-slate-500/60',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vedantmhatre',
    icon: Linkedin,
    hoverClass: 'hover:text-blue-300 hover:border-blue-500/40',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/vedantmh48',
    icon: Instagram,
    hoverClass: 'hover:text-pink-300 hover:border-pink-500/40',
  },
];

function Footer({ onNavigate }) {
  const scrollToSection = (e, href) => {
    e.preventDefault();

    // Handle legal page navigation
    if (href === '#privacy-policy' || href === '#terms-conditions' || href === '#sitemap' || href === '#team-page') {
      if (onNavigate) {
        onNavigate(href.replace('#', ''));
      }
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate(null);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5"
            >
              <img
                src={logoUrl}
                alt="Phoenix Logo"
                className="w-8 h-8 md:w-9 md:h-9 object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]"
              />
              <span className="text-slate-100 font-semibold tracking-tight text-lg">
                PHOENIX<span className="text-indigo-400"></span>
              </span>
            </button>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">
              A fresh hackathon team of 2nd-year IT undergraduates from
              Thakur College of Science and Commerce, Mumbai. We have no wins
              yet — SIH 2026 is our first hackathon, and we're ready to chart
              new territory.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`p-2.5 rounded-lg border border-slate-800/80 text-slate-500 transition-all duration-300 ${social.hoverClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Legal links */}
            <h4 className="text-sm font-semibold text-slate-200 mt-6 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919028076580"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400/70" />
                  +91 90280 76580
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@phoenix.dev"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-400/70" />
                  team@phoenix.dev
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400/70 mt-0.5 shrink-0" />
                <span>
                  Thakur College of Science & Commerce,
                  <br />
                  Kandivali East, Mumbai
                </span>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-slate-400">
                <GraduationCap className="w-4 h-4 text-indigo-400/70" />
                B.Sc. IT • 2nd Year
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 PHOENIX • Thakur College of Science and Commerce
          </p>
          <p className="text-xs text-slate-600">
            Built with precision in Mumbai, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
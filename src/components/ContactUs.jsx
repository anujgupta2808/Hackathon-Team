import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  CheckCircle2,
  Compass,
} from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 90280 76580',
    href: 'tel:+919028076580',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/40',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'team@phoenix.dev',
    href: 'mailto:team@phoenix.dev',
    accent: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'hover:border-indigo-500/40',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Thakur College of Science & Commerce, Kandivali East, Mumbai',
    href: null,
    accent: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'hover:border-sky-500/40',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = encodeURIComponent(
      `Hi Phoenix! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Open WhatsApp with prefilled message to team number
    window.open(`https://wa.me/919028076580?text=${message}`, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);

    // Reset after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-radial-glow-secondary overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-20 right-[5%] w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            <Compass className="w-4 h-4" />
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Let's Build Something
            <br />
            <span className="text-gradient-animated">Phoenix Together</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
            Have a question about SIH 2026, want to collaborate, or just want to
            say hi? We'd love to hear from you. Drop us a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 md:gap-10">
          {/* Contact info cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {CONTACT_INFO.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div
                  className={`glass-surface glass-surface-hover brand-glow rounded-2xl p-5 flex items-start gap-4 ${info.border} transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${info.bg} shrink-0`}>
                    <Icon className={`w-5 h-5 ${info.accent}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-200 break-words">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('tel:') ? undefined : '_blank'}
                  rel={info.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}

            {/* WhatsApp quick CTA */}
            <motion.a
              href="https://wa.me/919028076580"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-surface glass-surface-hover brand-glow rounded-2xl p-5 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-200">WhatsApp Us</p>
                    <p className="text-xs text-slate-500 mt-0.5">Fastest response</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300">
                  +91 90280 76580
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-surface brand-glow rounded-2xl p-6 md:p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5, delay: 0.1, duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-100">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate-400 max-w-sm">
                  Thanks for reaching out! We'll get back to you shortly. In the
                  meantime, feel free to WhatsApp us at +91 90280 76580.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <User className="w-4 h-4 text-indigo-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                      <Mail className="w-4 h-4 text-indigo-400" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration opportunity, SIH 2026 question, etc."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, collaboration idea, or question..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-600">
                  Form opens WhatsApp with your message — the fastest way to reach us.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
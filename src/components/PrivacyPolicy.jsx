import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import PageLayout from './PageLayout.jsx';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you voluntarily provide when using our website, including your name, email address, and message content submitted through our contact form.',
      'We may also collect non-personal, anonymized analytics data such as browser type, device information, pages visited, and time spent on the site to improve our user experience.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'To respond to your inquiries, questions, and collaboration requests submitted through our contact form.',
      'To improve our website content, design, and overall user experience based on aggregated usage patterns.',
      'To communicate with you about our hackathon participation, team updates, and events that may be relevant to your interests.',
    ],
  },
  {
    title: '3. Information Sharing',
    body: [
      'We do not sell, trade, or otherwise transfer your personal information to outside parties.',
      'We may share information with trusted third parties who assist us in operating our website, servicing you, or conducting our team activities — provided those parties agree to keep your information confidential.',
      'We may disclose information when required by law, enforce our site policies, or protect our or others\' rights, property, or safety.',
    ],
  },
  {
    title: '4. Data Security',
    body: [
      'We implement a variety of security measures to maintain the safety of your personal information when you submit it through our contact form.',
      'Your information is transmitted via secure channels and stored only as necessary to fulfill the purpose of your inquiry.',
    ],
  },
  {
    title: '5. Cookies and Tracking',
    body: [
      'Our website may use cookies and similar technologies to enhance your browsing experience and collect anonymous usage statistics.',
      'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some site features may not function properly without cookies.',
    ],
  },
  {
    title: '6. Third-Party Links',
    body: [
      'Our website may contain links to third-party websites (such as SIH, Devfolio, GitHub, LinkedIn) with their own privacy policies.',
      'We have no responsibility or liability for the content and activities of these linked sites. We encourage you to review their privacy policies before providing any personal information.',
    ],
  },
  {
    title: '7. Children\'s Privacy',
    body: [
      'Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.',
      'If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will promptly remove such information.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.',
      'You are advised to review this Privacy Policy periodically for any changes.',
    ],
  },
  {
    title: '9. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy, please contact us at team@phoenix.dev or call us at +91 90280 76580.',
    ],
  },
];

function PrivacyPolicy({ onBack }) {
  return (
    <PageLayout
      icon={ShieldCheck}
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have about your data."
      onBack={onBack}
    >
      <div className="space-y-8">
        <div className="text-sm text-slate-500 mb-4">
          Last Updated: August 14, 2026
        </div>

        {SECTIONS.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-l-2 border-indigo-500/30 pl-5"
          >
            <h2 className="text-lg font-semibold text-slate-200 mb-3">
              {section.title}
            </h2>
            {section.body.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-sm text-slate-400 leading-relaxed mb-2">
                {paragraph}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;
import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import PageLayout from './PageLayout.jsx';

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.',
      'These terms apply to all visitors, users, and others who access or use the Phoenix website.',
    ],
  },
  {
    title: '2. Team Description',
    body: [
      'Phoenix is a hackathon team composed of 2nd-year CS/IT undergraduate students from Thakur College of Science & Commerce, Mumbai.',
      'As of August 2026, we have not yet competed in any hackathons. Our first hackathon is Smart India Hackathon (SIH) 2026, and we are currently in the preparation phase.',
      'All information about our projects, wins, and achievements displayed on this website is accurate and reflects our current journey.',
    ],
  },
  {
    title: '3. Use of Content',
    body: [
      'All content on this website — including text, graphics, logos, and code — is the property of Phoenix or its content suppliers and is protected by applicable copyright laws.',
      'You may view, download, and print portions of this site for personal, non-commercial use only. Any other use requires prior written permission from us.',
    ],
  },
  {
    title: '4. Contact Form and Communication',
    body: [
      'When you submit a message through our contact form, it may be delivered to us via WhatsApp at +91 90280 76580.',
      'By submitting your information, you consent to us contacting you regarding your inquiry. We will not share your information with third parties for marketing purposes.',
    ],
  },
  {
    title: '5. External Links Disclaimer',
    body: [
      'Our website may contain links to external websites (e.g., SIH official portal, Devfolio, Unstop, GitHub) that are not operated by us.',
      'We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
    ],
  },
  {
    title: '6. No Warranties',
    body: [
      'The website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.',
      'We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    body: [
      'In no event shall Phoenix, its members, or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website.',
      'This includes any errors or omissions in content, or any loss or damage incurred as a result of the use of any content posted, transmitted, or made available through the site.',
    ],
  },
  {
    title: '8. Intellectual Property',
    body: [
      'The "Phoenix" name, logo, and all associated branding are the intellectual property of the team.',
      'Any project code, prototypes, or solutions developed by the team for hackathons remain the property of Phoenix unless otherwise agreed with external organizers or sponsors.',
    ],
  },
  {
    title: '9. Governing Law',
    body: [
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of India.',
      'Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.',
    ],
  },
  {
    title: '10. Changes to These Terms',
    body: [
      'We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page.',
      'Your continued use of the website after any changes constitutes acceptance of the new terms.',
    ],
  },
  {
    title: '11. Contact Us',
    body: [
      'If you have any questions about these Terms and Conditions, please contact us at team@phoenix.dev or call us at +91 90280 76580.',
    ],
  },
];

function TermsConditions({ onBack }) {
  return (
    <PageLayout
      icon={Scale}
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website. By accessing this site, you agree to be bound by these terms."
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

export default TermsConditions;
import React from 'react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-20 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Privacy Policy | TuitionStar"
        description="Learn how TuitionStar protects and encrypts user data, complying with GDPR, COPPA, and student privacy standards."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">Last Updated: January 15, 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
          <p>
            At <strong>{SITE_CONFIG.name}</strong>, operated by {SITE_CONFIG.company.name}, we are deeply committed to safeguarding the privacy and security of educators, students, and parents who utilize our applications and services. This Privacy Policy explains our practices regarding data collection, encryption, and rights.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            1. Information We Collect
          </h2>
          <p>We collect only the information necessary to provide seamless educational coordination:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm">
            <li><strong>Account Information:</strong> Names, email addresses, phone numbers, and profile avatars.</li>
            <li><strong>Classroom & Academic Data:</strong> Batch rosters, attendance check-ins, homework files, and test scores logged by tutors.</li>
            <li><strong>Parent-Child Connections:</strong> Verified linkage keys connecting authorized parents to their students.</li>
            <li><strong>Payment Logs:</strong> Transaction records, invoice numbers, and payment status indicators. Note: Full credit card numbers are processed directly by PCI-compliant partners (Stripe / Apple Pay) and are never stored on TuitionStar servers.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            2. Protection of Minor Data (COPPA & Student Privacy)
          </h2>
          <p>
            Because TuitionStar is used to manage educational records for minors, we enforce strict compliance with the Children's Online Privacy Protection Act (COPPA) and international student privacy frameworks. Minors' accounts cannot be discovered publicly and can only be accessed by approved tutors and linked parents. We never sell, monetize, or profile student data for advertising.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            3. Data Storage & Encryption
          </h2>
          <p>
            All data in transit is encrypted using TLS 1.3 cryptographic protocols. Data at rest is encrypted using AES-256 standard encryption. Regular automated audits ensure our infrastructure maintains strict compliance with ISO 27001 and GDPR benchmarks.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            4. Your Rights & Data Deletion
          </h2>
          <p>
            You have the right to inspect, export, or permanently erase all personal data associated with your TuitionStar account at any time. Simply submit a deletion request via account settings or contact our Data Protection Officer at <a href={`mailto:${SITE_CONFIG.contact.privacyEmail}`} className="text-blue-600 dark:text-blue-400 underline">{SITE_CONFIG.contact.privacyEmail}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

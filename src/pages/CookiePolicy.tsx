import React from 'react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-20 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Cookie Policy | TuitionStar"
        description="Learn how TuitionStar utilizes strictly necessary and functional cookies to ensure secure logins and lightning-fast page loading."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white mt-1">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">Last Updated: January 15, 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
          <p>
            This Cookie Policy explains how <strong>{SITE_CONFIG.name}</strong> uses cookies and similar browser storage technologies when you visit our websites and applications.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you access web services. They help websites remember your session, preserve your dark/light theme preference, and protect against unauthorized CSRF requests.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            2. Categories of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Strictly Necessary Cookies:</strong> Essential for account authentication, role authorization, and security defenses.</li>
            <li><strong>Functional Preferences:</strong> Store your theme choice (Light mode / Dark mode) and selected language.</li>
            <li><strong>Performance Telemetry:</strong> Anonymized metrics to assess page load speeds and API latency. We do not use third-party invasive cross-site tracking cookies.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            3. Managing Your Cookie Settings
          </h2>
          <p>
            Most modern web browsers allow you to block or delete cookies via browser settings. Please note that disabling essential cookies may prevent you from logging into your TuitionStar tutor or parent workspace.
          </p>
        </div>
      </div>
    </div>
  );
};

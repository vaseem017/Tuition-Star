import React from 'react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

export const Terms: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-20 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Terms of Service | TuitionStar"
        description="Review the terms and conditions governing the use of TuitionStar apps, workspaces, and tutor discovery features."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white mt-1">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-2">Last Updated: January 15, 2025</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
          <p>
            Welcome to <strong>{SITE_CONFIG.name}</strong>. By accessing our web applications, iOS application, Android application, or discovery directory, you agree to comply with and be bound by the following terms of service.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            1. User Accounts & Responsibilities
          </h2>
          <p>
            Educators, students, and parents must provide accurate registration details. Tutors are responsible for maintaining the confidentiality of their credentials and ensuring that students and parents added to their rosters have consented to communication.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            2. Tutor Discovery & Marketplace Terms
          </h2>
          <p>
            TuitionStar provides a directory platform connecting prospective students with verified tutors. While TuitionStar performs baseline credential audits on Super Tutors, independent tutors operate as independent educators and are not direct employees of TuitionStar.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            3. Subscription & Billing
          </h2>
          <p>
            Paid subscriptions (Pro Tutor, Academy) are billed on a recurring monthly or annual basis until canceled. Subscriptions can be canceled at any time with access continuing through the end of the paid billing period.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-2">
            4. Limitation of Liability
          </h2>
          <p>
            {SITE_CONFIG.company.name} shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including test outcomes or third-party tutor scheduling conflicts.
          </p>
        </div>
      </div>
    </div>
  );
};

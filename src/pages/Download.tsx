import React from 'react';
import {
  Apple,
  Smartphone,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const DownloadPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Download TuitionStar | iOS, Android & Web Applications"
        description="Download the TuitionStar mobile app for iOS and Android, or launch the responsive web workspace. Manage classes and attendance on any device."
      />

      {/* Main Download Hub Hero */}
      <section className="py-8 sm:py-12 radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
              Cross-Platform Availability
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
              Download the TuitionStar App.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Access your batches, attendance records, quiz grades, and family messages from your phone, tablet, or laptop.
            </p>
          </AnimatedSection>

          {/* 3 Platform Download Cards */}
          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* iOS */}
            <AnimatedStaggerItem className="rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6">
                  <Apple className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Apple iOS</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">For iPhone & iPad</p>

                <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Requires iOS 15.0 or later</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Supports Dynamic Island & Lock Screen widgets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Face ID / Touch ID biometric lock</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={SITE_CONFIG.downloads.iosAppStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0c1e4e]/20"
                >
                  <Apple className="w-4 h-4 fill-current" /> Download on App Store
                </a>
              </div>
            </AnimatedStaggerItem>

            {/* Android */}
            <AnimatedStaggerItem className="rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Google Play</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">For Android Phones & Tablets</p>

                <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Requires Android 8.0 (Oreo) or later</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Instant push notification delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Offline cache sync for spotty connections</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={SITE_CONFIG.downloads.googlePlayStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Smartphone className="w-4 h-4" /> Get on Google Play
                </a>
              </div>
            </AnimatedStaggerItem>

            {/* Web Workspace */}
            <AnimatedStaggerItem className="rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Workspace</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Chrome, Safari, Firefox, Edge</p>

                <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>No download required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Optimized for desktop grading & spreadsheet export</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Multi-window multitasking support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={SITE_CONFIG.downloads.webAppUrl}
                  className="w-full py-3 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#0c1e4e]/20"
                >
                  <Globe className="w-4 h-4" /> Launch Web App
                </a>
              </div>
            </AnimatedStaggerItem>
          </AnimatedStaggerContainer>

          {/* QR Code Quick Scan Section */}
          <AnimatedSection direction="up" distance={25} className="rounded-3xl bg-[#0c1e4e] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-2xl border border-blue-900/60">
            <div className="space-y-3 max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Quick Mobile Install</span>
              <h3 className="text-2xl font-bold">Point your smartphone camera to install.</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Scan this dynamic QR code on any iPhone or Android phone to instantly open the correct store page and start your free 5-student account.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white shadow-xl flex flex-col items-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-32 h-32 text-slate-900 fill-current">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h2v2h-2v-2zm2-4h2v2h-2v-2zm-4-4h2v2h-2v-2zm6 6h2v2h-2v-2zm0-6h2v2h-2v-2z" />
              </svg>
              <span className="text-[11px] font-bold text-slate-900 mt-2">Scan with Camera</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

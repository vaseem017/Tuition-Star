import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Bell,
  Award,
  DollarSign,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const ForParents: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="TuitionStar for Parents | Stay Connected With Your Child's Learning"
        description="Get real-time push attendance notifications, view same-day test marks, chat with private tutors, and track fee statements transparently."
      />

      {/* Hero */}
      <section className="py-8 sm:py-16 radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="up" distance={20} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Parent Peace of Mind
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c1e4e] dark:text-white leading-[1.12]">
                Stay Connected With Your Child’s{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0c1e4e] dark:from-emerald-400 dark:to-teal-300">
                  Learning.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                No more guessing whether your child arrived at tuition safely or how they performed on this week's physics exam. Receive instant push notifications, same-day test marks, and itemized fee receipts right on your smartphone.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/download"
                  id="parents-download-cta"
                  className="px-6 py-3.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-sm transition-all shadow-lg shadow-[#0c1e4e]/20 hover:shadow-[#0c1e4e]/30 active:scale-95 flex items-center gap-2"
                >
                  <span>Download Parent App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/find-a-tutor"
                  id="parents-find-tutor-cta"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  Find a Vetted Tutor
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <span>✓ Instant attendance notifications</span>
                <span>✓ Direct tutor message channel</span>
                <span>✓ Bank-grade encryption</span>
              </div>
            </AnimatedSection>

            {/* Parent Real-Time Notification Visual */}
            <AnimatedSection direction="up" delay={0.2} distance={30} className="lg:col-span-5">
              <div className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 font-bold text-xs">
                      🔔
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Live Parent Notifications</div>
                      <div className="text-[10px] text-slate-400">Student: Leo Harrison • Grade 10</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 space-y-1">
                  <div className="flex items-center justify-between text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Attendance Confirmed
                    </span>
                    <span className="text-xs font-normal text-emerald-700 dark:text-emerald-300">4:02 PM</span>
                  </div>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    Leo arrived on time for <strong>IGCSE Mathematics (Extended)</strong> with Dr. Sarah Jenkins.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-[#0c1e4e]/30 border border-blue-100 dark:border-blue-900/50 space-y-1">
                  <div className="flex items-center justify-between text-sm font-bold text-[#0c1e4e] dark:text-blue-300">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-blue-600" /> Test Score Published
                    </span>
                    <span className="text-xs font-normal text-slate-500">Yesterday</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    Calculus Diagnostic Quiz: <strong>48 / 50 (96%)</strong> • Ranked 1st in Batch!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Monthly Tuition Fees</div>
                      <div className="text-xs text-slate-400">Receipt #TS-8941 paid via Apple Pay</div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">$360.00</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Parents Love TuitionStar Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1e4e] dark:text-white">
            Transparency Built for Busy Parents
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            No more waiting for parent-teacher conferences to discover learning challenges.
          </p>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Bell,
              title: 'Instant Push Alerts',
              desc: 'Get notified the second attendance is marked. You always know your child arrived safely.',
            },
            {
              icon: Award,
              title: 'Same-Day Test Scores',
              desc: 'Review scores, class averages, and tutor remarks within hours of test completion.',
            },
            {
              icon: MessageCircle,
              title: 'Direct Tutor Feedback',
              desc: 'Exchange focused messages with tutors without joining chaotic 50-person WhatsApp groups.',
            },
            {
              icon: DollarSign,
              title: 'Clear Fee Statements',
              desc: 'Transparent digital records of all tuition payments, scheduled dates, and digital receipts for tax filing.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedStaggerItem
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all shadow-xs hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>
      </section>

      {/* App CTA */}
      <AnimatedSection direction="up" distance={30}>
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

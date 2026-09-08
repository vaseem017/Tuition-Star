import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const ForTutors: React.FC = () => {
  const tutorWorkflow = [
    {
      step: '1',
      title: 'Build Your Verified Profile',
      desc: 'Highlight degrees, syllabi taught (IB, AP, IGCSE, SAT), hourly rates, and student achievements on the discovery directory.',
    },
    {
      step: '2',
      title: 'Organize Batches & Schedules',
      desc: 'Create conflict-free 1-on-1 or group slots with automated calendar sync and student limits.',
    },
    {
      step: '3',
      title: '3-Tap Attendance Marking',
      desc: 'Mark students present, late, or excused. Parents receive immediate push confirmations automatically.',
    },
    {
      step: '4',
      title: 'Record Marks & Homework',
      desc: 'Log quiz scores, upload solution PDFs, and track topic retention before major school exams.',
    },
    {
      step: '5',
      title: 'Automate Monthly Fee Receipts',
      desc: 'TuitionStar sends courteous itemized invoices and dues alerts, ending awkward money conversations.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="TuitionStar for Tutors | Run Your Tuition Business Smarter"
        description="For private tutors who want less admin and more teaching. Manage batches, attendance, marks, homework, schedules, and automated fee receipts in one place."
      />

      {/* Hero */}
      <section className="py-8 sm:py-16 radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="up" distance={20} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#0c1e4e]/40 border border-[#0c1e4e]/20 dark:border-blue-900/60 text-[#0c1e4e] dark:text-blue-300 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                Dedicated Tutor Operating System
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c1e4e] dark:text-white leading-[1.12]">
                Run Your Tuition Business{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c1e4e] via-blue-700 to-indigo-600 dark:from-blue-400 dark:to-sky-300">
                  Smarter.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                For independent educators and academies who want less admin and more time inspiring students. Keep every class, attendance log, quiz score, and fee receipt organized in one slick dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/download"
                  id="tutors-get-started-cta"
                  className="px-6 py-3.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-sm transition-all shadow-lg shadow-[#0c1e4e]/20 hover:shadow-[#0c1e4e]/30 active:scale-95 flex items-center gap-2"
                >
                  <span>Start Managing Your Students</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/find-students"
                  id="tutors-browse-students-cta"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  Browse Student Requests
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <span>✓ 5 students free forever</span>
                <span>✓ iOS & Android mobile apps</span>
                <span>✓ 0% commission on discovery</span>
              </div>
            </AnimatedSection>

            {/* Visual Mini Mockup */}
            <AnimatedSection direction="up" delay={0.2} distance={30} className="lg:col-span-5">
              <div className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0c1e4e] text-white flex items-center justify-center font-bold text-xs">
                      TS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Prof. Marcus Sterling</div>
                      <div className="text-xs text-slate-500">IB Higher Physics • 4 Batches</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                    Live Batch
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Today's Attendance</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">14 / 14 Present</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-2 rounded-full w-full" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-[#0c1e4e]/30 border border-blue-100 dark:border-blue-900/40 text-xs">
                  <div className="font-bold text-[#0c1e4e] dark:text-blue-300 mb-1 flex items-center gap-1.5 text-sm">
                    <Clock className="w-4 h-4" /> Next Batch Starting in 25 mins
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-xs">
                    AP Calculus BC • Batch C (Room 2A / Online Zoom link synced)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                    <div className="text-base font-extrabold text-[#0c1e4e] dark:text-white">$3,840</div>
                    <div className="text-xs text-slate-500">Fees Collected</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                    <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">98.4%</div>
                    <div className="text-xs text-slate-500">Attendance Rate</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5-Step Teaching Workflow */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
              Structured Simplicity
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Your Daily Teaching Workflow, Perfected.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Save 8+ hours of weekly clerical labor while presenting a world-class professional image to families.
            </p>
          </AnimatedSection>

          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {tutorWorkflow.map((step) => (
              <AnimatedStaggerItem
                key={step.step}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-[#0c1e4e] text-[#0c1e4e] dark:text-blue-300 font-extrabold flex items-center justify-center text-xs mb-3 font-mono">
                  0{step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* Feature Breakdown Table / Matrix */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" distance={20} className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1e4e] dark:text-white">
            Everything You Can Manage in TuitionStar
          </h2>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Students & Batches', desc: 'Manage 1-on-1 private slots or 10-person group batches with individual notes, contacts, and custom curriculum goals.' },
            { title: 'Lightning Attendance', desc: 'Record attendance in seconds. Choose present, late, or excused. Parents receive push notifications without you writing a single text.' },
            { title: 'Gradebook & Tests', desc: 'Input test marks, weight assignments, and review benchmark distribution across your entire class.' },
            { title: 'Homework & Solutions', desc: 'Attach PDF homework prompts and answer keys. Students submit work in-app for your structured evaluation.' },
            { title: 'Automated Invoicing', desc: 'Generate professional fee receipts, track payment statuses, and let software send diplomatic payment reminders.' },
            { title: 'Schedules & Holidays', desc: '2-way Google and Apple calendar sync prevents accidental double-bookings or missed sessions.' },
            { title: 'Student Progress Analytics', desc: 'Visual trend curves illustrate student progress over weeks and months, proving the return on investment to parents.' },
            { title: 'Announcements & Messages', desc: 'Broadcast schedule adjustments or holiday alerts to entire batches in one tap.' },
            { title: 'Discovery Marketplace', desc: 'Get discovered by eager students and parents searching for expert private tutoring in your subject and syllabus.' },
          ].map((item, idx) => (
            <AnimatedStaggerItem key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all hover:-translate-y-1">
              <CheckCircle2 className="w-5 h-5 text-[#0c1e4e] dark:text-blue-400 mb-2" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>
      </section>

      {/* App CTA */}
      <AnimatedSection direction="up" distance={30}>
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

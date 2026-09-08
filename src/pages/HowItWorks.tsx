import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { cn } from '../lib/utils';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tutors' | 'students' | 'parents'>('tutors');

  const tracks = {
    tutors: [
      {
        step: '01',
        title: 'Sign Up & Configure Your Batches',
        desc: 'Install the TuitionStar app or log in on web. Add your subjects, specify batch sizes (individual or group), and set your recurring weekly time slots in under 3 minutes.',
      },
      {
        step: '02',
        title: 'Invite Students & Parents via Link',
        desc: 'Share a personalized invite link or QR code with your existing students. When they join, their parents are automatically linked for notifications.',
      },
      {
        step: '03',
        title: 'Conduct Classes & Log Attendance in 3 Taps',
        desc: 'Open your batch on your phone, tap checkmarks beside each name, and hit confirm. Push alerts are dispatched immediately to parents.',
      },
      {
        step: '04',
        title: 'Record Marks & Collect Fees Effortlessly',
        desc: 'Input test scores and homework feedback. TuitionStar sends automated monthly fee receipts and payment reminders without uncomfortable follow-up texts.',
      },
    ],
    students: [
      {
        step: '01',
        title: 'Discover Your Ideal Tutor',
        desc: 'Search verified educators by curriculum (IB, AP, IGCSE, SAT), hourly rate, teaching mode, and student ratings.',
      },
      {
        step: '02',
        title: 'Sync Your Study Timetable',
        desc: 'Accept your batch schedule. Classes automatically sync to your phone calendar with automated 30-minute reminder alerts.',
      },
      {
        step: '03',
        title: 'Submit Homework & Review Notes',
        desc: 'Snap photos of assignments and upload them directly into the app. Access study guides, formula sheets, and past papers uploaded by your tutor.',
      },
      {
        step: '04',
        title: 'Track Performance & Master Exams',
        desc: 'Review test feedback, see your grade trajectories climb, and identify tricky weak spots before major final exams.',
      },
    ],
    parents: [
      {
        step: '01',
        title: 'Download Free Parent App',
        desc: 'Create your account and connect to your child with a 6-digit secure code provided by their tutor.',
      },
      {
        step: '02',
        title: 'Real-Time Class Check-in Alerts',
        desc: 'Get a push notification the moment your child is marked present at tuition, providing continuous peace of mind.',
      },
      {
        step: '03',
        title: 'Inspect Weekly Marks & Feedback',
        desc: 'View same-day quiz scores, test analytics, and tutor remarks without waiting for quarterly report cards.',
      },
      {
        step: '04',
        title: 'Transparent Invoices & Receipts',
        desc: 'View transparent monthly fee breakdowns, upcoming billing dates, and digital receipts saved in your private vault.',
      },
    ],
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="How TuitionStar Works | Step-by-Step Educational Ecosystem"
        description="Learn how TuitionStar connects private tutors, students, and parents in 4 simple steps for transparent, accountable learning."
      />

      <section className="py-8 sm:py-12 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection direction="up" distance={20}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Simplified Setup & Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            How TuitionStar Works.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Tailored onboarding paths for every user in the tuition journey.
          </p>
        </AnimatedSection>

        {/* Tab Switcher */}
        <AnimatedSection direction="up" delay={0.15} distance={15} className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          {[
            { id: 'tutors', label: 'For Tutors', icon: GraduationCap },
            { id: 'students', label: 'For Students', icon: Users },
            { id: 'parents', label: 'For Parents', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2',
                  activeTab === tab.id
                    ? 'bg-[#0c1e4e] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </AnimatedSection>
      </section>

      {/* Steps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-4">
        <AnimatedStaggerContainer key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks[activeTab].map((item, idx) => (
            <AnimatedStaggerItem
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#0c1e4e] dark:text-blue-400 font-mono mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-[#0c1e4e] dark:text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero configuration friction</span>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>
      </section>

      <AnimatedSection direction="up" distance={30}>
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

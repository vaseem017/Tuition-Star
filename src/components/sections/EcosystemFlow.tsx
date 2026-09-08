import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Users,
  ShieldCheck,
  TrendingUp,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  CalendarCheck,
  FileSpreadsheet,
  Award,
  BellRing,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export const EcosystemFlow: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const steps = [
    {
      step: '01',
      role: 'Tutors',
      action: 'Organize & Teach',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
      description:
        'Tutors set up structured batches, log attendance in seconds, grade tests, assign homework, and automate fee reminders.',
      features: ['Automated Attendance', 'Batch Gradebook', 'Fee Invoices'],
      link: '/for-tutors',
    },
    {
      step: '02',
      role: 'Students',
      action: 'Learn & Excel',
      icon: Users,
      color: 'from-sky-600 to-blue-600',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
      description:
        'Students discover vetted mentors, access schedules, submit assignments, and track their topic mastery before big exams.',
      features: ['Tutor Discovery', 'Timetable Sync', 'Homework Portal'],
      link: '/for-students',
    },
    {
      step: '03',
      role: 'Parents',
      action: 'Stay Connected',
      icon: ShieldCheck,
      color: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
      description:
        'Parents receive real-time push alerts when class starts, review test scores immediately, and monitor monthly progress.',
      features: ['Instant Class Alerts', 'Score Transparency', 'Direct Messages'],
      link: '/for-parents',
    },
    {
      step: '04',
      role: 'Continuous Progress',
      action: 'Achieve Results',
      icon: TrendingUp,
      color: 'from-indigo-600 to-purple-600',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
      description:
        'Data-driven insights prove academic growth. Students achieve higher grades, parents gain trust, and tutors grow their reputation.',
      features: ['Visual Growth Curves', 'Diagnostic Baselines', 'PDF Report Cards'],
      link: '/features',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Connected Educational Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More Than Just Software. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              A Unified Learning Loop.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            TuitionStar breaks down the communication silos between tuition classes, students, and home.
            Everyone stays synchronized in real time.
          </p>
        </div>

        {/* The 4-Step Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeNode === index;

            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveNode(index)}
                className={cn(
                  'relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between group',
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-blue-500/80 shadow-xl dark:shadow-blue-950/50 ring-1 ring-blue-500/50'
                    : 'bg-white/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 font-mono">{item.step}</span>
                    <span className={cn('text-xs px-2.5 py-0.5 rounded-full font-semibold', item.badgeColor)}>
                      {item.role}
                    </span>
                  </div>

                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm bg-gradient-to-br',
                    item.color
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.action}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-4">
                    {item.features.map((f, i) => (
                      <div key={i} className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bidirectional Marketplace Discovery Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#082042] to-[#0D3B66] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-semibold mb-3 border border-blue-300/20">
                <Search className="w-3.5 h-3.5" />
                Two-Way Matching Marketplace
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Students Find Trusted Tutors. Tutors Find Eager Students.
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Whether you are a student striving for top exam scores or an educator seeking new tuition batches, TuitionStar’s discovery network matches learners with qualified subject matter experts in minutes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/find-a-tutor"
                id="ecosystem-find-tutor-btn"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Find a Tutor
              </Link>
              <Link
                to="/find-students"
                id="ecosystem-find-students-btn"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all backdrop-blur-sm"
              >
                Find Student Requests
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

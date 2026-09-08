import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Award,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const ForStudents: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="TuitionStar for Students | Find the Right Tutor. Learn With Confidence."
        description="Discover top private tutors, organize your study calendar, submit homework assignments, and watch your exam scores steadily rise."
      />

      {/* Hero */}
      <section className="py-8 sm:py-16 radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="up" distance={20} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#0c1e4e]/40 border border-[#0c1e4e]/20 dark:border-blue-900/60 text-[#0c1e4e] dark:text-blue-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                Student Learning Center
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c1e4e] dark:text-white leading-[1.12]">
                Find the Right Tutor.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c1e4e] via-blue-700 to-indigo-600 dark:from-blue-400 dark:to-sky-300">
                  Learn With Confidence.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Connect with verified subject experts who demystify tricky concepts. Keep your class notes, homework deadlines, test scores, and tutor chats all in one friendly mobile app.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/find-a-tutor"
                  id="students-find-tutor-cta"
                  className="px-6 py-3.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-sm transition-all shadow-lg shadow-[#0c1e4e]/20 hover:shadow-[#0c1e4e]/30 active:scale-95 flex items-center gap-2"
                >
                  <span>Search Verified Tutors</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/download"
                  id="students-download-cta"
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  Download Free App
                </Link>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <span>✓ Browse 40+ subjects</span>
                <span>✓ Direct tutor trial requests</span>
                <span>✓ Free student account</span>
              </div>
            </AnimatedSection>

            {/* Student Dashboard Card Visual */}
            <AnimatedSection direction="up" delay={0.2} distance={30} className="lg:col-span-5">
              <div className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Student"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Maya K.</div>
                      <div className="text-xs text-slate-400">Grade 12 • IB Diploma Programme</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                    Score: 94% (Grade 7)
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Next Lesson: IB Chemistry HL</div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">With Elena Rostova • In 35 mins</div>
                    </div>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#0c1e4e] text-white font-semibold text-xs">
                      Join Room
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Organic Chemistry Problem Set</div>
                      <div className="text-amber-500 text-xs font-medium">Due Tomorrow at 5:00 PM</div>
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      Pending
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Your test average climbed <strong>+18%</strong> over the past 6 weeks!
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4 Pillars for Students */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1e4e] dark:text-white">
            Everything You Need to Master Any Subject
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            No more lost papers, missed homework deadlines, or confusing exam mark schemes.
          </p>
        </AnimatedSection>

        <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              title: 'Discover & Compare Tutors',
              desc: 'Filter hundreds of verified tutors by curriculum (IB, AP, IGCSE, SAT), reviews, hourly rates, and availability.',
            },
            {
              icon: Clock,
              title: 'Unified Timetable',
              desc: 'All your tuition subjects displayed on one clean calendar with automated schedule reminders.',
            },
            {
              icon: FileText,
              title: 'Homework & Solutions',
              desc: 'Upload completed homework directly from your phone. Receive annotated tutor feedback and revision rubrics.',
            },
            {
              icon: Award,
              title: 'Watch Your Marks Rise',
              desc: 'Track diagnostic test results and topic-by-topic mastery so you enter exam halls completely prepared.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedStaggerItem
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0c1e4e]/40 transition-all shadow-xs hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300 flex items-center justify-center mb-4">
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

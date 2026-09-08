import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Users,
  Target,
  GraduationCap,
  Heart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const About: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="About TuitionStar | Our Mission for Smarter Education"
        description="Learn the story behind TuitionStar and how we are empowering independent private educators, students, and parents with seamless clarity and accountability."
      />

      {/* Hero Header */}
      <AnimatedSection direction="up" distance={20} className="py-8 sm:py-14 text-center max-w-4xl mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
          Our Purpose & Mission
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
          Bridging the Communication Gap in Global Education.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          TuitionStar was founded to replace chaotic WhatsApp group chats, forgotten paper notebooks, and awkward fee reminders with an elegant, unified educational ecosystem.
        </p>
      </AnimatedSection>

      {/* The Problem vs Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              The Status Quo Before TuitionStar
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Fragmented Tools & Silent Anxiety
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Private tutoring has traditionally run on disjointed channels: messy messaging threads where crucial lesson updates get buried, paper attendance registers that get misplaced, test marks that parents never see until school report cards arrive, and awkward end-of-month fee conversations.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Parents constantly asking "Did my child arrive on time?"
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Tutors spending 8+ hours a week on clerical administration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Students losing homework handouts and test rubrics
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              The TuitionStar Breakthrough
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              A Single, Connected, Accountable Platform
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              TuitionStar brings all three stakeholders — educators, learners, and families — into a shared, live feedback loop. When attendance is marked, parents know instantly. When a quiz is graded, students receive immediate feedback. When fees are due, invoices are generated automatically.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Instant push notifications eliminate anxious phone calls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Visual growth trends prove real academic return on investment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Transparent discovery helps vetted tutors connect with students
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-900/30 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Our Guiding Principles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Every feature we ship adheres to four fundamental design pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Radical Simplicity',
                desc: 'Features must take 3 taps or less. We refuse to build bloated, complicated software that takes hours to master.',
              },
              {
                icon: ShieldCheck,
                title: 'Total Transparency',
                desc: 'Parents deserve complete clarity regarding attendance, performance, and billing with zero ambiguity.',
              },
              {
                icon: GraduationCap,
                title: 'Educator Empowerment',
                desc: 'We treat private tutors as the heroes of education. Our software elevates their credibility and grows their practice.',
              },
              {
                icon: TrendingUp,
                title: 'Academic Growth',
                desc: 'Every tool we create ultimately exists to help students master challenging concepts and reach top universities.',
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <AnimatedSection direction="up" distance={20} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1e4e] dark:text-white">
            The TuitionStar Impact in Numbers
          </h2>
        </AnimatedSection>
        <AnimatedStaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SITE_CONFIG.stats.map((s, i) => (
            <AnimatedStaggerItem key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-blue-400">{s.value}</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{s.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.description}</div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection direction="up" distance={25} className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1e4e] via-[#11296b] to-[#0c1e4e] text-white shadow-2xl border border-blue-900/60 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to experience smarter tuition management?</h3>
          <p className="text-blue-200 text-sm max-w-lg mx-auto">
            Join thousands of educators, students, and parents today. Free up to 5 students.
          </p>
          <div className="pt-2">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0c1e4e] font-bold text-sm hover:bg-blue-50 transition-colors shadow-md"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

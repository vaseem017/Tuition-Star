import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Search,
  Sparkles,
  CheckCircle2,
  Users,
  GraduationCap,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { InteractiveProductMockup } from '../components/dashboard/InteractiveProductMockup';
import { EcosystemFlow } from '../components/sections/EcosystemFlow';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import { SITE_CONFIG } from '../config/siteConfig';
import { TUTORS_DATA } from '../data/tutorsData';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <SEO
        title="TuitionStar | Everything You Need to Make Tuition Smarter"
        description="TuitionStar brings tutors, students and parents together with powerful tools to manage classes, attendance, marks, communication and progress — all in one place."
      />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden radial-glow bg-grid-pattern">
        {/* Subtle Brand Navy Background Accent Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#0c1e4e]/10 dark:bg-blue-600/15 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" distance={25} duration={0.7} className="text-center max-w-4xl mx-auto space-y-6">
            {/* High-end badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 dark:bg-[#0c1e4e]/50 border border-[#0c1e4e]/20 dark:border-blue-700/40 text-[#0c1e4e] dark:text-blue-300 text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>The Next-Gen Education Management & Tutor Discovery Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-slate-500 dark:text-slate-400 font-normal">iOS • Android • Web</span>
            </div>

            {/* Main Headline with #0c1e4e gradient feel */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c1e4e] dark:text-white leading-[1.12]">
              Everything You Need to Make{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0c1e4e] via-blue-700 to-[#102a6b] dark:from-blue-400 dark:via-sky-300 dark:to-blue-500">
                Tuition Smarter.
              </span>
            </h1>

            {/* Supporting Messaging */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              TuitionStar brings tutors, students and parents together with powerful tools to manage classes, attendance, marks, communication and progress — all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link
                to="/download"
                id="hero-cta-get-started"
                className="px-6 py-3.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-sm transition-all shadow-lg shadow-[#0c1e4e]/25 hover:shadow-xl hover:shadow-[#0c1e4e]/35 active:scale-95 flex items-center gap-2 group"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/download"
                id="hero-cta-download-app"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0c1e4e] dark:text-blue-400" />
                <span>Download the App</span>
              </Link>

              <Link
                to="/find-a-tutor"
                id="hero-cta-find-tutor"
                className="px-6 py-3.5 rounded-xl bg-blue-50/80 dark:bg-[#0c1e4e]/40 hover:bg-blue-100 dark:hover:bg-[#0c1e4e]/70 text-[#0c1e4e] dark:text-blue-300 font-semibold text-sm transition-all border border-blue-200/60 dark:border-blue-800/60 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Find a Tutor</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Free forever for up to 5 students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Instant parent push updates</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Interactive Modern Product UI Mockup */}
          <AnimatedSection direction="up" delay={0.15} distance={18} duration={0.5} className="mt-14 max-w-6xl xl:max-w-7xl mx-auto">
            <InteractiveProductMockup />
          </AnimatedSection>
        </div>
      </section>

      {/* CENTRALIZED STATS TRUST STRIP */}
      <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#050a16]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {SITE_CONFIG.stats.map((stat, idx) => (
              <AnimatedStaggerItem key={idx} className={idx > 1 ? 'pt-6 md:pt-0' : ''}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.description}
                </div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* CORE VALUE PROPOSITION: 3 AUDIENCES */}
      <section className="py-20 bg-slate-50/60 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              One Unified Platform. <br />
              <span className="text-[#0c1e4e] dark:text-blue-400">Three Empowered Audiences.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Each user enjoys a personalized interface tailored specifically to their educational goals.
            </p>
          </AnimatedSection>

          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tutors Card */}
            <AnimatedStaggerItem className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#0c1e4e]/40 border border-[#0c1e4e]/20 dark:border-blue-900/60 text-[#0c1e4e] dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
                  For Private Tutors & Centers
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                  Manage your entire tuition operation.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Ditch WhatsApp groups and spreadsheets. Organize batches, track attendance in 3 taps, log test marks, assign homework, and automate monthly fee receipts.
                </p>
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Instant attendance notifications to parents</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Automated fee invoices & payment reminders</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Discovery profile to recruit new students</span>
                  </div>
                </div>
              </div>
              <Link
                to="/for-tutors"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0c1e4e] dark:text-blue-400 hover:text-blue-700 group-hover:translate-x-1 transition-all"
              >
                Explore Tutor Features <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedStaggerItem>

            {/* Students Card */}
            <AnimatedStaggerItem className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200/60 dark:border-sky-900/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  For Students & Learners
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                  Find the right tutor and track learning.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Discover verified subject specialists, view color-coded class calendars, submit assignments, and watch your exam scores steadily rise.
                </p>
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Filter tutors by syllabus (IB, AP, IGCSE, SAT)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Homework upload and tutor remarks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Visual score trends before examinations</span>
                  </div>
                </div>
              </div>
              <Link
                to="/for-students"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 group-hover:translate-x-1 transition-all"
              >
                Explore Student Experience <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedStaggerItem>

            {/* Parents Card */}
            <AnimatedStaggerItem className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  For Caring Parents
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                  Stay connected with your child’s education.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  No more wondering if your child reached tuition safely. Get instant attendance push alerts, test score breakdowns, and transparent fee records.
                </p>
                <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Push notification when attendance is logged</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Same-day test marks and tutor comments</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Clear fee statements and itemized receipts</span>
                  </div>
                </div>
              </div>
              <Link
                to="/for-parents"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 group-hover:translate-x-1 transition-all"
              >
                Explore Parent Portal <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedStaggerItem>
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* CONNECTED ECOSYSTEM FLOW */}
      <AnimatedSection direction="up" distance={30}>
        <EcosystemFlow />
      </AnimatedSection>

      {/* FEATURED TUTORS DIRECTORY PREVIEW */}
      <section className="py-20 bg-white dark:bg-[#050a16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" distance={20} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
                Verified Educators
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Learn From Top Rated Subject Specialists.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
                All tutors are credential-checked with verified student reviews.
              </p>
            </div>

            <Link
              to="/find-a-tutor"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0c1e4e] dark:text-blue-400 hover:text-blue-700 shrink-0"
            >
              Browse All 2,000+ Tutors <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TUTORS_DATA.slice(0, 4).map((tutor) => (
              <AnimatedStaggerItem
                key={tutor.id}
                className="rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tutor.name}</h4>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[140px]">
                        {tutor.education}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm py-2 border-y border-slate-100 dark:border-slate-800 mb-3">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{tutor.rating}</span>
                      <span className="text-slate-400 font-normal">({tutor.reviewsCount})</span>
                    </div>
                    <div className="font-bold text-[#0c1e4e] dark:text-white">
                      ${tutor.hourlyRate}<span className="text-xs text-slate-400 font-normal">/hr</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tutor.subjects.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {tutor.bio}
                  </p>
                </div>

                <Link
                  to={`/find-a-tutor?id=${tutor.id}`}
                  className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-[#0c1e4e] hover:text-white dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all text-center"
                >
                  View Profile & Schedule
                </Link>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* SOCIAL PROOF & TESTIMONIALS */}
      <AnimatedSection direction="up" distance={30}>
        <TestimonialsSection />
      </AnimatedSection>

      {/* PROMINENT APP DOWNLOAD SHOWCASE */}
      <AnimatedSection direction="up" distance={30}>
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

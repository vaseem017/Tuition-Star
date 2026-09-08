import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { FEATURES_DATA } from '../data/featuresData';
import { cn } from '../lib/utils';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'Tutors', label: 'Tutor Operations' },
    { id: 'Students', label: 'Student Experience' },
    { id: 'Parents', label: 'Parent Portal' },
    { id: 'Discovery', label: 'Tutor & Student Matching' },
    { id: 'Analytics', label: 'Analytics & Reporting' },
  ];

  const displayedGroups = activeCategory === 'all'
    ? FEATURES_DATA
    : FEATURES_DATA.filter((g) => g.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Features & Capabilities | TuitionStar"
        description="Explore the complete feature suite of TuitionStar: batch management, real-time attendance, test gradebooks, parent notifications, fee tracking, and tutor discovery."
      />

      {/* Header Section */}
      <section className="py-8 sm:py-12 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection direction="up" distance={20}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Complete Functional Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-2">
            Engineered for Rigorous Tuition Management.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From independent tutors managing 10 students to multi-teacher academies coordinating hundreds, TuitionStar equips your education business with enterprise-grade stability.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection direction="up" delay={0.15} distance={15} className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
                activeCategory === cat.id
                  ? 'bg-[#0c1e4e] text-white shadow-md shadow-[#0c1e4e]/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
              )}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>
      </section>

      {/* Feature Deep Dive Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mt-6">
        {displayedGroups.map((group) => {
          return (
            <AnimatedSection
              key={group.id}
              direction="up"
              distance={25}
              className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-10 shadow-sm overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300 text-xs font-semibold mb-2">
                    {group.subtitle}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <Link
                    to="/download"
                    className="px-5 py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0c1e4e]/20 transition-all flex items-center gap-1.5"
                  >
                    <span>Try This Live</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature Sub-Cards Grid with Stagger */}
              <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.features.map((feat, idx) => (
                  <AnimatedStaggerItem
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:border-[#0c1e4e]/40 dark:hover:border-blue-800 transition-all flex flex-col justify-between hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0c1e4e] dark:text-blue-400" />
                        {feat.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0c1e4e] dark:bg-blue-950 dark:text-blue-300">
                            {feat.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </AnimatedStaggerItem>
                ))}
              </AnimatedStaggerContainer>
            </AnimatedSection>
          );
        })}
      </section>

      {/* App Download CTA */}
      <AnimatedSection direction="up" distance={30} className="mt-16">
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

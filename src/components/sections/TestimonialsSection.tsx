import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Users } from 'lucide-react';
import { TESTIMONIALS_DATA, Testimonial } from '../../data/testimonialsData';
import { cn } from '../../lib/utils';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Tutor' | 'Parent' | 'Student'>('All');

  const filteredTestimonials = activeFilter === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.role === activeFilter);

  return (
    <section className="py-20 bg-white dark:bg-[#060B13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Social Proof & Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for the People Who Make Learning Happen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Read how private tutors, parents, and students experience seamless accountability and academic momentum every week.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 text-xs font-semibold">
            {(['All', 'Tutor', 'Parent', 'Student'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-4 py-1.5 rounded-lg transition-all',
                  activeFilter === filter
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {filter === 'All' ? 'All Stories' : `${filter}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {t.metric && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      {t.metric}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50 dark:fill-blue-950" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.title}</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.subjectOrGrade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

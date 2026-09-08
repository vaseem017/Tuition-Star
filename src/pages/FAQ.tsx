import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  GraduationCap,
  Users,
  DollarSign,
  Lock,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { FAQ_ITEMS } from '../data/faqData';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/common/AnimatedSection';

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true });

  const categories = [
    { id: 'All', label: 'All Questions' },
    { id: 'General', label: 'General' },
    { id: 'For Tutors', label: 'For Tutors' },
    { id: 'For Students & Parents', label: 'Students & Parents' },
    { id: 'Pricing', label: 'Billing & Pricing' },
    { id: 'Security', label: 'Security & Privacy' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Frequently Asked Questions (FAQ) | TuitionStar"
        description="Got questions about TuitionStar? Find answers regarding tutor tools, student discovery, parent push notifications, pricing tiers, and privacy compliance."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" distance={20} className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            TuitionStar Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            Frequently Asked Questions.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Everything you need to know about the product, billing, security, and onboarding.
          </p>

          {/* Search Box */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., fee reminders, attendance, privacy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c1e4e] shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all',
                  activeCategory === c.id
                    ? 'bg-[#0c1e4e] text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = !!openIndices[index];

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-blue-600 dark:text-blue-400'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <h3 className="font-bold text-slate-900 dark:text-white text-base">No questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching with a different keyword or view all questions.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-800/60 p-8 text-center space-y-3 border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Our support team is available 6 days a week to answer your tuition management or tutor discovery questions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-xs shadow-md shadow-[#0c1e4e]/20 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

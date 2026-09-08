import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  X,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PRICING_PLANS, PRICING_FEATURES_MATRIX } from '../data/pricingData';
import { FAQ_ITEMS } from '../data/faqData';
import { cn } from '../lib/utils';
import { AppDownloadCTA } from '../components/sections/AppDownloadCTA';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const pricingFaqs = FAQ_ITEMS.filter((f) => f.category === 'Pricing');

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Transparent Pricing | TuitionStar"
        description="Free forever for up to 5 students. Simple, transparent pricing for independent tutors and expanding tuition academies. No hidden fees."
      />

      {/* Hero Header */}
      <section className="py-8 sm:py-12 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection direction="up" distance={20}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            Predictable Pricing for Growing Educators.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Start 100% free with up to 5 students. Upgrade only when your tuition batches expand.
          </p>
        </AnimatedSection>

        {/* Annual / Monthly Toggle */}
        <AnimatedSection direction="up" delay={0.15} distance={15} className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={cn(
              'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all',
              billingCycle === 'monthly'
                ? 'bg-[#0c1e4e] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            )}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={cn(
              'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2',
              billingCycle === 'annual'
                ? 'bg-[#0c1e4e] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            )}
          >
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold uppercase">
              Save 20%
            </span>
          </button>
        </AnimatedSection>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-4">
        <AnimatedStaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const period = plan.period ? (billingCycle === 'annual' ? '/mo (billed annually)' : '/month') : '';

            return (
              <AnimatedStaggerItem
                key={plan.id}
                className={cn(
                  'rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative',
                  plan.popular
                    ? 'bg-white dark:bg-slate-900 border-2 border-[#0c1e4e] dark:border-blue-500 shadow-2xl shadow-[#0c1e4e]/15 lg:-translate-y-2'
                    : 'bg-white/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0c1e4e] text-white text-xs font-bold tracking-wider uppercase shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{period}</span>
                  </div>

                  <div className="mt-8 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features:</span>
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/download"
                    className={cn(
                      'w-full py-3 rounded-xl font-bold text-sm text-center block transition-all shadow-xs',
                      plan.popular
                        ? 'bg-[#0c1e4e] hover:bg-[#152e72] text-white shadow-md shadow-[#0c1e4e]/25'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimatedStaggerItem>
            );
          })}
        </AnimatedStaggerContainer>
      </section>

      {/* Feature Comparison Matrix */}
      <AnimatedSection direction="up" distance={25} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight text-center mb-10">
          Compare Plan Capabilities
        </h2>

        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-center">Starter</th>
                  <th className="p-4 sm:p-5 font-bold text-[#0c1e4e] dark:text-blue-400 text-center">Professional</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-center">Academy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {PRICING_FEATURES_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200">
                      <div>{row.feature}</div>
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-600 dark:text-slate-400">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center font-semibold text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-950/20">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-600 dark:text-slate-400">
                      {typeof row.academy === 'boolean' ? (
                        row.academy ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                        )
                      ) : (
                        row.academy
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing FAQs Accordion */}
      <AnimatedSection direction="up" distance={25} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {pricingFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200',
                    expandedFaq === idx && 'rotate-180 text-blue-600'
                  )}
                />
              </button>

              {expandedFaq === idx && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* App Download CTA */}
      <AnimatedSection direction="up" distance={30}>
        <AppDownloadCTA />
      </AnimatedSection>
    </div>
  );
};

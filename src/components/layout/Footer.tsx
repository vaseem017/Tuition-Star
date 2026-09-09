import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Shield,
  Heart,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b1a] text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.86),rgba(2,6,23,0.96),rgba(8,15,30,0.94))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
        <div className="mb-10 rounded-[30px] border border-white/10 bg-gradient-to-r from-[#111f46] via-[#0e1d45] to-[#09162d] p-5 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.45)] sm:p-7 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Join 2,000+ Educators
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
                Make tuition management simpler today.
              </h3>
              <p className="mt-2 max-w-xl text-sm text-slate-300/80">
                Free setup in under 60 seconds. No credit card required. iOS, Android, and web ready.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                to="/download"
                id="footer-cta-download"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-18px_rgba(59,130,246,0.9)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Download App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                id="footer-cta-pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.85)] backdrop-blur-sm xl:col-span-4">
            <Logo size="md" inverted={true} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300/80">
              TuitionStar is the premier education management and tutor discovery platform uniting private educators, students, and parents into a single connected, accountable ecosystem.
            </p>

            <div className="mt-6">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300/70">
                Education Insights & Tutor Growth
              </span>

              {subscribed ? (
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Thank you! You have been subscribed to our weekly newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                  <button
                    type="submit"
                    id="newsletter-subscribe-btn"
                    className="inline-flex items-center gap-1 rounded-2xl bg-blue-600 px-3.5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-500"
                  >
                    <span>Join</span>
                    <Send className="h-3 w-3" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[{ icon: Twitter, label: 'Twitter', href: SITE_CONFIG.socials.twitter }, { icon: Linkedin, label: 'LinkedIn', href: SITE_CONFIG.socials.linkedin }, { icon: Facebook, label: 'Facebook', href: SITE_CONFIG.socials.facebook }, { icon: Instagram, label: 'Instagram', href: SITE_CONFIG.socials.instagram }, { icon: Youtube, label: 'YouTube', href: SITE_CONFIG.socials.youtube }].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Product', items: SITE_CONFIG.footerLinks.product },
            { title: 'For Users', items: SITE_CONFIG.footerLinks.forUsers },
            { title: 'Company', items: SITE_CONFIG.footerLinks.company },
            { title: 'Legal', items: SITE_CONFIG.footerLinks.legal },
          ].map(({ title, items }) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-slate-900/35 p-5 shadow-[0_16px_40px_-30px_rgba(17,24,39,0.9)] backdrop-blur-sm xl:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-200/80">{title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {title === 'Legal' && (
                <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-[11px] text-slate-200">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    <span>GDPR & COPPA Compliant Data Encryption</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.company.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms</Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-white">Cookies</Link>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-rose-400" />
              Built with precision for global education
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

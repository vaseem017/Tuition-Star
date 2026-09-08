import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Download,
  ArrowRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Search,
  CheckCircle2,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  FileSpreadsheet,
  Info,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'platform' | 'solutions' | 'resources' | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuKey: 'platform' | 'solutions' | 'resources') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const toggleMobileSection = (sec: string) => {
    setMobileSection((prev) => (prev === sec ? null : sec));
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      {/* Floating Pill Container - Matching Reference Image */}
      <div
        className={cn(
          'pointer-events-auto max-w-7xl xl:max-w-[1360px] mx-auto rounded-2xl md:rounded-3xl border transition-all duration-300',
          'bg-white/95 dark:bg-[#080E18]/95 backdrop-blur-xl',
          isScrolled
            ? 'shadow-xl shadow-slate-900/10 dark:shadow-black/60 border-slate-300/80 dark:border-slate-700/80 py-2.5 px-4 sm:px-6'
            : 'shadow-lg shadow-slate-900/5 dark:shadow-black/40 border-slate-200/90 dark:border-slate-800 py-3 px-4 sm:px-6'
        )}
      >
        <div className="flex items-center justify-between gap-4 flex-nowrap">
          {/* 1. Left: Brand Logo */}
          <div className="flex items-center shrink-0 whitespace-nowrap">
            <Logo size="md" />
          </div>

          {/* 2. Center: Navigation Items (Strictly Single Line, Clean Spacing) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
            {/* Platform / Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('platform')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                  activeDropdown === 'platform' || location.pathname === '/features'
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-200'
                )}
              >
                <span>Features</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    activeDropdown === 'platform' && 'rotate-180 text-blue-600'
                  )}
                />
              </button>

              {/* Platform Mega Menu Popover */}
              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[680px]"
                  >
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#080E18]/98 backdrop-blur-2xl shadow-2xl shadow-slate-900/15 dark:shadow-black/70 p-6 overflow-hidden">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Core Features Column */}
                        <div className="col-span-7 space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Core Management Suite
                            </span>
                            <Link
                              to="/features"
                              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                            >
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="space-y-1.5">
                            <Link
                              to="/features"
                              className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center gap-1.5">
                                  <span>Smart Attendance & Check-in</span>
                                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                                    Instant Alert
                                  </span>
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                                  One-tap attendance with automated parent notifications.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/features"
                              className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <Calendar className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                                  Timetable & Batch Scheduling
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                                  Organize 1-on-1 slots, group classes, and sync calendars.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/features"
                              className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <DollarSign className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                                  Automated Invoicing & Fee Receipts
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                                  Automated reminders without uncomfortable phone calls.
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Marketplace & Discovery Column */}
                        <div className="col-span-5 space-y-3 border-l border-slate-100 dark:border-slate-800 pl-6 flex flex-col justify-between">
                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block pb-2 border-b border-slate-100 dark:border-slate-800">
                              Discovery Marketplace
                            </span>

                            <Link
                              to="/find-a-tutor"
                              className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                                <Search className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                                  Find a Vetted Tutor
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  IB, AP, IGCSE & SAT specialists
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/find-students"
                              className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                                  Find Students
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  Verified student learning requests
                                </div>
                              </div>
                            </Link>
                          </div>

                          {/* Quick Mobile App Promo */}
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
                            <div className="flex items-center gap-2 text-xs font-bold mb-1">
                              <Smartphone className="w-3.5 h-3.5" /> Mobile Apps Ready
                            </div>
                            <p className="text-xs text-blue-100 leading-tight mb-2.5">
                              iOS & Android apps for tutors, learners and parents.
                            </p>
                            <Link
                              to="/download"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-900 text-xs font-bold hover:bg-blue-50 transition-colors shadow-xs"
                            >
                              Download Hub <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                  activeDropdown === 'solutions' ||
                    ['/for-tutors', '/for-students', '/for-parents'].includes(location.pathname)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-200'
                )}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    activeDropdown === 'solutions' && 'rotate-180 text-blue-600'
                  )}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[520px]"
                  >
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#080E18]/98 backdrop-blur-2xl shadow-2xl shadow-slate-900/15 dark:shadow-black/70 p-5 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 block">
                        Tailored Experiences
                      </span>

                      <Link
                        to="/for-tutors"
                        className="p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            For Private Tutors & Academies
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                            Batch management, automated attendance, PDF report cards, and fee collection.
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/for-students"
                        className="p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            For Students & Learners
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                            Timetable calendar sync, homework submission vaults, and topic mastery curves.
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/for-parents"
                        className="p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            For Parents & Guardians
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                            Instant class check-in alerts, same-day test marks, and transparent digital receipts.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* How It Works Link */}
            <Link
              to="/how-it-works"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                location.pathname === '/how-it-works'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200'
              )}
            >
              How It Works
            </Link>

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                location.pathname === '/pricing'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200'
              )}
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className={cn(
                  'inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                  activeDropdown === 'resources' ||
                    ['/resources', '/blog', '/about'].includes(location.pathname)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-200'
                )}
              >
                <span>Resources</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    activeDropdown === 'resources' && 'rotate-180 text-blue-600'
                  )}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[380px]"
                  >
                    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#080E18]/98 backdrop-blur-2xl shadow-2xl shadow-slate-900/15 dark:shadow-black/70 p-4 space-y-1">
                      <Link
                        to="/resources"
                        className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            Blog & Playbooks
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Educator advice and study strategies
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/resources"
                        className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <FileSpreadsheet className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            Downloadable Templates
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Checklists and fee reminder scripts
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/about"
                        className="p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                          <Info className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600">
                            About TuitionStar
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Our educational mission & story
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ Link */}
            <Link
              to="/faq"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 py-1 whitespace-nowrap',
                location.pathname === '/faq'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200'
              )}
            >
              FAQ
            </Link>
          </nav>

          {/* 3. Right: Theme Toggle & Solid Action Button (Matching Reference Image) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-desktop"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Login Link */}
            <Link
              to="/download"
              id="nav-login-btn"
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-1 transition-colors whitespace-nowrap"
            >
              Log in
            </Link>

            {/* Modern Action Button - Like "Start a Project" in Reference Image */}
            <Link
              to="/download"
              id="nav-cta-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] active:scale-95 text-white text-sm font-bold tracking-wide transition-all shadow-md shadow-[#0c1e4e]/25 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls: Theme + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0 whitespace-nowrap">
            <button
              onClick={toggleTheme}
              id="theme-toggle-mobile"
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Open mobile menu"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel inside the floating pill */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3 overflow-y-auto max-h-[70vh]"
            >
              {/* Mobile Discovery Cards */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/find-a-tutor"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold whitespace-nowrap"
                >
                  <Search className="w-3.5 h-3.5 shrink-0" />
                  <span>Find a Tutor</span>
                </Link>
                <Link
                  to="/find-students"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-bold whitespace-nowrap"
                >
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span>Find Students</span>
                </Link>
              </div>

              {/* Accordion: Features */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('features')}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
                >
                  <span>Features</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-slate-400 transition-transform',
                      mobileSection === 'features' && 'rotate-180 text-blue-600'
                    )}
                  />
                </button>
                {mobileSection === 'features' && (
                  <div className="pl-2 space-y-1.5 pt-1">
                    <Link to="/features" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      All Capabilities
                    </Link>
                    <Link to="/features" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      Smart Attendance
                    </Link>
                    <Link to="/features" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      Fee Reminders
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion: Solutions */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('solutions')}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 dark:text-slate-200"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-slate-400 transition-transform',
                      mobileSection === 'solutions' && 'rotate-180 text-blue-600'
                    )}
                  />
                </button>
                {mobileSection === 'solutions' && (
                  <div className="pl-2 space-y-1.5 pt-1">
                    <Link to="/for-tutors" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      For Tutors & Academies
                    </Link>
                    <Link to="/for-students" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      For Students & Learners
                    </Link>
                    <Link to="/for-parents" className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                      For Parents & Guardians
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct links */}
              <div className="space-y-1 pt-1">
                <Link to="/how-it-works" className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  How It Works
                </Link>
                <Link to="/pricing" className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Pricing
                </Link>
                <Link to="/resources" className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Resources & Playbooks
                </Link>
                <Link to="/faq" className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  FAQ
                </Link>
                <Link to="/contact" className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Contact
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  to="/download"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white font-bold text-sm shadow-md shadow-[#0c1e4e]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Started / Download</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

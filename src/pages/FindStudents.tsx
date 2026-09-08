import React, { useState } from 'react';
import {
  Users,
  Search,
  MapPin,
  DollarSign,
  Calendar,
  Send,
  CheckCircle2,
  X,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { STUDENT_REQUESTS_DATA, StudentRequest } from '../data/studentsData';
import { cn } from '../lib/utils';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const FindStudents: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [proposalRequest, setProposalRequest] = useState<StudentRequest | null>(null);
  const [proposalSent, setProposalSent] = useState(false);

  const subjects = ['All', 'Pure Mathematics', 'AP Physics C', 'IB Biology HL', 'SAT Prep', 'English Literature', 'Chemistry'];

  const filteredRequests = STUDENT_REQUESTS_DATA.filter((req) => {
    const matchSubject = selectedSubject === 'All' || req.subject === selectedSubject;
    const matchMode = selectedMode === 'All' || req.mode === selectedMode;
    return matchSubject && matchMode;
  });

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/50 dark:bg-slate-950/30">
      <SEO
        title="Find Students & Tuition Requests | TuitionStar"
        description="Browse active student and parent tuition requests. Expand your teaching practice, send proposals directly, and fill empty class slots."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Open Tuition Requests & Job Board
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            Grow Your Teaching Practice.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Connect directly with verified families looking for dedicated tutoring support across top curricula.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection direction="up" delay={0.15} distance={15} className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Subject:</span>
            {subjects.slice(0, 5).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSubject(s)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-medium transition-colors',
                  selectedSubject === s
                    ? 'bg-[#0c1e4e] text-white font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Mode:</span>
            {['All', 'Online', 'In-Person', 'Hybrid'].map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMode(m)}
                className={cn(
                  'px-2.5 py-1 rounded-lg transition-colors',
                  selectedMode === m
                    ? 'bg-[#0c1e4e] text-white font-bold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Requests List */}
        <AnimatedStaggerContainer key={`${selectedSubject}-${selectedMode}`} className="space-y-4">
          {filteredRequests.map((req) => (
            <AnimatedStaggerItem
              key={req.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 hover:-translate-y-0.5"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300">
                    {req.subject}
                  </span>
                  <span className="text-xs text-slate-500">• {req.gradeLevel}</span>
                  <span className="text-xs text-slate-500">• Posted {req.postedDate}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {req.curriculum} — {req.studentName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {req.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="font-bold text-[#0c1e4e] dark:text-white flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                    {req.currency}{req.budgetHourly}/hr
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {req.frequency}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {req.location}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => setProposalRequest(req)}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white text-xs font-bold transition-all shadow-md shadow-[#0c1e4e]/20 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Send Proposal
                </button>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>
      </div>

      {/* Proposal Modal */}
      {proposalRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => {
                setProposalRequest(null);
                setProposalSent(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Send Proposal for {proposalRequest.subject}
            </h3>
            <p className="text-xs text-slate-500">
              To: {proposalRequest.studentName} ({proposalRequest.gradeLevel}) • Budget: {proposalRequest.currency}{proposalRequest.budgetHourly}/hr
            </p>

            {proposalSent ? (
              <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Your proposal was sent directly to the family! Check your tutor notifications.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setProposalSent(true);
                }}
                className="space-y-4 pt-2"
              >
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Proposed Hourly Rate ($)</label>
                  <input
                    type="number"
                    defaultValue={45}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Earliest Availability</label>
                  <input
                    type="text"
                    defaultValue="Tuesdays & Thursdays, 4:30 PM"
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message to Parent / Student</label>
                  <textarea
                    rows={3}
                    required
                    defaultValue="Hello! I have over 6 years of experience preparing students for this exact curriculum with an average grade increase of 1.5 bands. I would love to schedule a free 20-minute diagnostic session."
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white text-xs font-bold shadow-md shadow-[#0c1e4e]/20 transition-all"
                >
                  Submit Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

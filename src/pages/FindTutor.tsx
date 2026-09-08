import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  X,
  Send,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { TUTORS_DATA, Tutor } from '../data/tutorsData';
import { cn } from '../lib/utils';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const FindTutor: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTutorId = searchParams.get('id');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(
    initialTutorId ? TUTORS_DATA.find((t) => t.id === initialTutorId) || null : null
  );
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const subjectsList = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Computer Science', 'Economics'];
  const modesList = ['All', 'Online', 'In-person', 'Hybrid'];

  const filteredTutors = useMemo(() => {
    return TUTORS_DATA.filter((tutor) => {
      const matchesQuery =
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        tutor.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubject =
        selectedSubject === 'All' || tutor.subjects.includes(selectedSubject);

      const matchesMode =
        selectedMode === 'All' || tutor.teachingMode === selectedMode || tutor.teachingMode === 'Hybrid';

      const matchesPrice = tutor.hourlyRate <= maxPrice;

      return matchesQuery && matchesSubject && matchesMode && matchesPrice;
    });
  }, [searchQuery, selectedSubject, selectedMode, maxPrice]);

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/50 dark:bg-slate-950/30">
      <SEO
        title="Find a Tutor | TuitionStar Discovery Directory"
        description="Search vetted private tutors across Mathematics, Sciences, Humanities, and Coding. Filter by hourly rate, curriculum, online or in-person mode."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Verified Tutor Discovery Network
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            Find the Perfect Private Tutor.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Browse qualified subject specialists with transparent ratings, background checks, and flexible schedules.
          </p>
        </AnimatedSection>

        {/* Filter Bar */}
        <AnimatedSection direction="up" delay={0.15} distance={15} className="rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tutor name, subject, or syllabus (e.g., IB, AP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {subjectsList.map((s) => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Subjects' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {modesList.map((m) => (
                  <option key={m} value={m}>
                    {m === 'All' ? 'All Modes' : m}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="md:col-span-2 flex items-center gap-2">
              <div className="text-xs text-slate-500 whitespace-nowrap">Up to:</div>
              <div className="w-full">
                <div className="text-xs font-bold text-slate-900 dark:text-white">${maxPrice}/hr</div>
                <input
                  type="range"
                  min={30}
                  max={120}
                  step={5}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Quick pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-400 font-medium">Popular:</span>
            {['Mathematics', 'Physics', 'Chemistry', 'English Literature'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={cn(
                  'px-2.5 py-1 rounded-lg transition-colors',
                  selectedSubject === sub
                    ? 'bg-[#0c1e4e] text-white font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {sub}
              </button>
            ))}
            {(selectedSubject !== 'All' || selectedMode !== 'All' || searchQuery || maxPrice < 100) && (
              <button
                onClick={() => {
                  setSelectedSubject('All');
                  setSelectedMode('All');
                  setSearchQuery('');
                  setMaxPrice(100);
                }}
                className="ml-auto text-[#0c1e4e] dark:text-blue-400 hover:underline font-semibold flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset Filters
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Results Counter */}
        <div className="mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {filteredTutors.length} vetted educator{filteredTutors.length === 1 ? '' : 's'}
        </div>

        {/* Tutor Cards Grid */}
        <AnimatedStaggerContainer key={`${selectedSubject}-${selectedMode}-${maxPrice}-${searchQuery}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <AnimatedStaggerItem
              key={tutor.id}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
                    />
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-1">
                        {tutor.name}
                        {tutor.verified && (
                          <ShieldCheck className="w-4 h-4 text-blue-500 fill-blue-50 dark:fill-blue-950" />
                        )}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {tutor.experience} Experience • {tutor.education}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-y border-slate-100 dark:border-slate-800 text-xs mb-3">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{tutor.rating}</span>
                    <span className="text-slate-400 font-normal">({tutor.reviewsCount} reviews)</span>
                  </div>
                  <div className="font-bold text-[#0c1e4e] dark:text-white text-sm">
                    ${tutor.hourlyRate}<span className="text-xs text-slate-400 font-normal">/hr</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {tutor.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {tutor.curriculum.map((c, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {tutor.bio}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {tutor.location} ({tutor.mode})
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {tutor.availability}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedTutor(tutor)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors text-center"
                >
                  View Profile
                </button>
                <button
                  onClick={() => {
                    setSelectedTutor(tutor);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white text-sm font-bold transition-all shadow-xs text-center"
                >
                  Contact Tutor
                </button>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStaggerContainer>

        {filteredTutors.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No tutors matched your filters</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your maximum hourly rate or subject selection to view more educators.
            </p>
          </div>
        )}
      </div>

      {/* Tutor Profile Modal */}
      {selectedTutor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => {
                setSelectedTutor(null);
                setContactSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={selectedTutor.avatar}
                alt={selectedTutor.name}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                  {selectedTutor.name}
                  {selectedTutor.verified && (
                    <ShieldCheck className="w-5 h-5 text-blue-500 fill-blue-50 dark:fill-blue-950" />
                  )}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{selectedTutor.education}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{selectedTutor.rating}</span>
                    <span className="text-slate-400 font-normal">({selectedTutor.reviewsCount} reviews)</span>
                  </div>
                  <span>•</span>
                  <span className="font-bold text-slate-900 dark:text-white">${selectedTutor.hourlyRate}/hour</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">{selectedTutor.availability}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">About Educator</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{selectedTutor.bio}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Subjects & Curriculums</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedTutor.subjects.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                    {s}
                  </span>
                ))}
                {selectedTutor.curriculum.map((c) => (
                  <span key={c} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Send Inquiry to {selectedTutor.name}
              </h4>
              {contactSubmitted ? (
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Inquiry sent! {selectedTutor.name} usually responds within 2 hours.</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Your Name"
                      className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email or Phone"
                      className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder={`Hi ${selectedTutor.name}, I am looking for tuition assistance for...`}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#0c1e4e] hover:bg-[#152e72] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#0c1e4e]/20 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

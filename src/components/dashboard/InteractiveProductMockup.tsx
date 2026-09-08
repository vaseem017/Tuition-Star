import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
  DollarSign,
  Bell,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  UserCheck,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type DashboardRole = 'tutor' | 'student' | 'parent';

export const InteractiveProductMockup: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeRole, setActiveRole] = useState<DashboardRole>('tutor');
  const [markedAttendance, setMarkedAttendance] = useState<Record<string, 'present' | 'late' | 'absent'>>({
    s1: 'present',
    s2: 'present',
    s3: 'late',
    s4: 'present',
  });

  const toggleStudentStatus = (id: string) => {
    setMarkedAttendance((prev) => {
      const nextStatus = prev[id] === 'present' ? 'late' : prev[id] === 'late' ? 'present' : 'present';
      return { ...prev, [id]: nextStatus };
    });
  };

  return (
    <div className={cn('relative w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden', className)}>
      {/* Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            TuitionStar Workspace v2.6 • Live Sync
          </span>
        </div>

        {/* Role Persona Switcher Tabs */}
        <div className="flex items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/80 text-xs font-medium">
          {(['tutor', 'student', 'parent'] as DashboardRole[]).map((role) => (
            <button
              key={role}
              id={`mockup-tab-${role}`}
              onClick={() => setActiveRole(role)}
              className={cn(
                'px-3 py-1 rounded-md transition-all capitalize flex items-center gap-1.5',
                activeRole === role
                  ? 'bg-[#0c1e4e] text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              )}
            >
              {role === 'tutor' && <Users className="w-3 h-3" />}
              {role === 'student' && <BookOpen className="w-3 h-3" />}
              {role === 'parent' && <ShieldCheck className="w-3 h-3" />}
              {role} View
            </button>
          ))}
        </div>
      </div>

      {/* Main Mockup Viewport */}
      <div className="p-4 sm:p-6 min-h-[460px]">
        <AnimatePresence mode="wait">
          {activeRole === 'tutor' && (
            <motion.div
              key="tutor-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Header stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                    <span>Enrolled Students</span>
                    <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white">32 Active</div>
                  <div className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +4 new this month
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                    <span>Today's Classes</span>
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white">3 Batches</div>
                  <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">Next: 4:30 PM IGCSE Math</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                    <span>Attendance Rate</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white">96.8%</div>
                  <div className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">High consistency</div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                    <span>Monthly Fees</span>
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white">$3,840</div>
                  <div className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">94% collected</div>
                </div>
              </div>

              {/* Two Column Layout: Live Attendance + Test Marks */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Live Class Attendance (Interactive) */}
                <div className="md:col-span-7 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Current Batch: Grade 10 Pure Math (Batch A)
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Tap status to toggle attendance in real-time</p>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium">
                      Parents Auto-Notified
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: 's1', name: 'Liam Harrison', status: markedAttendance['s1'], time: '4:28 PM', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80' },
                      { id: 's2', name: 'Maya Kapoor', status: markedAttendance['s2'], time: '4:29 PM', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
                      { id: 's3', name: 'Oliver Bennett', status: markedAttendance['s3'], time: '4:37 PM', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
                      { id: 's4', name: 'Sophia Chen', status: markedAttendance['s4'], time: '4:30 PM', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80' },
                    ].map((student) => (
                      <div
                        key={student.id}
                        onClick={() => toggleStudentStatus(student.id)}
                        className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={student.avatar} alt={student.name} className="w-7 h-7 rounded-full object-cover" />
                          <div>
                            <div className="text-xs font-semibold text-slate-900 dark:text-white">{student.name}</div>
                            <div className="text-[10px] text-slate-400">Checked in at {student.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              'text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide capitalize select-none',
                              student.status === 'present'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                            )}
                          >
                            {student.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Recent Marks & Fee Summary */}
                <div className="md:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Diagnostic Quiz: Calculus
                      </h4>
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">Batch Avg: 88.5%</span>
                    </div>

                    <div className="space-y-2 mt-2">
                      {[
                        { label: 'Liam H.', score: 94, max: 100, color: 'bg-emerald-500' },
                        { label: 'Maya K.', score: 91, max: 100, color: 'bg-blue-500' },
                        { label: 'Sophia C.', score: 85, max: 100, color: 'bg-indigo-500' },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[11px] font-medium text-slate-700 dark:text-slate-300">
                            <span>{item.label}</span>
                            <span className="font-bold">{item.score}/{item.max} ({item.score}%)</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <div className={cn('h-full rounded-full transition-all duration-500', item.color)} style={{ width: `${item.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fee Notification Pill */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-[11px]">
                        <strong>3 parents</strong> received automated fee receipts today
                      </span>
                    </div>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline">
                      View Logs
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeRole === 'student' && (
            <motion.div
              key="student-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Student Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Student Portal</span>
                  <h3 className="text-lg font-bold">Welcome back, Liam! 🚀</h3>
                  <p className="text-xs text-blue-100">Next class: IB Physics with Dr. Jenkins in 42 minutes</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md text-xs font-medium border border-white/20">
                    Attendance: <strong>98%</strong>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-900 text-xs font-bold shadow-xs">
                    Average: <strong>A (91%)</strong>
                  </div>
                </div>
              </div>

              {/* Student Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Pending Homework</span>
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="mt-2 font-bold text-sm text-slate-900 dark:text-white">Mechanics Problem Set 4</div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 font-medium">Due Tomorrow at 5:00 PM</div>
                  <button className="mt-3 w-full py-1 text-center rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-100 transition-colors">
                    Upload Solution PDF
                  </button>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Recent Test Score</span>
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="mt-2 font-bold text-sm text-slate-900 dark:text-white">Calculus Derivatives</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">94%</span>
                    <span className="text-[10px] text-slate-400 font-medium">+12% vs last test</span>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 italic">
                    "Terrific grasp of chain rule!" – Dr. Jenkins
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Study Materials</span>
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                  <div className="mt-2 font-bold text-sm text-slate-900 dark:text-white">Formula Sheet & Cheatsheet</div>
                  <div className="text-[11px] text-slate-500 mt-1">Updated 2 days ago by tutor</div>
                  <button className="mt-3 w-full py-1 text-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
                    Download Resource
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeRole === 'parent' && (
            <motion.div
              key="parent-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Parent Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      Child: Liam Harrison (Grade 10)
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 font-medium">
                        Present in Class
                      </span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Tutor checked Liam in at 4:28 PM today • Attendance this term: 28/29 classes
                    </p>
                  </div>
                </div>

                <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shrink-0 transition-colors shadow-xs">
                  Download Term Report Card
                </button>
              </div>

              {/* Parent Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                    <span>Tutor Feedback & Observations</span>
                    <span className="text-[10px] text-slate-400">Oct 24</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                    "Liam has made exceptional progress in vector mechanics this month. He has moved from relying on formula sheets to deriving solutions intuitively. Keep encouraging his daily practice!"
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">— Dr. Sarah Jenkins (Senior Tutor)</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline flex items-center gap-0.5">
                      Message Tutor <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                    <span>Tuition Fees & Invoicing</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      Paid for October
                    </span>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      <span>October Math & Physics (8 Sessions)</span>
                      <span className="font-semibold text-slate-900 dark:text-white">$360.00</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 text-slate-600 dark:text-slate-400">
                      <span>Upcoming November Due Date:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">Nov 1, 2025</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5" /> View Itemized Receipts & Statements
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mockup Footer Bar */}
      <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>Real-time cross-platform sync across Web, iOS & Android apps</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
            Interactive preview
          </span>
        </div>
      </div>
    </div>
  );
};

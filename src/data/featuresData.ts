export interface FeatureGroup {
  id: string;
  category: 'Tutors' | 'Students' | 'Parents' | 'Discovery' | 'Analytics' | 'Communication';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: {
    title: string;
    description: string;
    tag?: string;
  }[];
}

export const FEATURES_DATA: FeatureGroup[] = [
  {
    id: 'tutor-management',
    category: 'Tutors',
    title: 'Comprehensive Tutor Operations Suite',
    subtitle: 'Teach better, manage effortlessly',
    description:
      'Everything private tutors and tuition academies need to organize students, schedule batches, track attendance, calculate marks, and automate fee collection in one unified interface.',
    iconName: 'GraduationCap',
    features: [
      {
        title: 'Student & Batch Profiles',
        description: 'Organize 1-on-1 students or multi-student batches with contact cards, grade levels, and emergency details.',
        tag: 'Core',
      },
      {
        title: 'Lightning Attendance Tracking',
        description: 'Mark class attendance in 3 taps with instant parent push notifications for present, late, or excused absences.',
        tag: 'Automated',
      },
      {
        title: 'Test Marks & Gradebook',
        description: 'Record test marks, weighted quizzes, and exam results with instant cohort statistics and benchmark percentiles.',
      },
      {
        title: 'Homework & Assignment Hub',
        description: 'Assign homework with due dates and attachments; track submissions and provide structured feedback.',
      },
      {
        title: 'Smart Class Timetable',
        description: 'Conflict-free scheduling with Google Calendar/Apple Calendar 2-way sync and automatic timezone detection.',
      },
      {
        title: 'Automated Fee Tracking & Invoicing',
        description: 'Generate itemized monthly invoices, track payment status, and send polite automated payment reminders.',
        tag: 'High Impact',
      },
      {
        title: 'Teacher Remarks & Progress Notes',
        description: 'Maintain private internal teaching notes or share positive milestones directly with parents and students.',
      },
      {
        title: 'Broadcast Announcements',
        description: 'Send immediate push announcements to an entire batch regarding schedule shifts, test materials, or holidays.',
      },
    ],
  },
  {
    id: 'student-experience',
    category: 'Students',
    title: 'Empowering Student Learning Hub',
    subtitle: 'Find mentors, track goals, excel in exams',
    description:
      'Designed to give students clarity and autonomy over their learning schedule, upcoming exams, homework submissions, and historical growth.',
    iconName: 'BookOpen',
    features: [
      {
        title: 'Verified Tutor Discovery',
        description: 'Search hundreds of vetted private educators by subject, syllabus (IB, AP, Cambridge, SAT), location, and budget.',
        tag: 'Marketplace',
      },
      {
        title: 'Unified Class Schedule',
        description: 'View all your upcoming tuition sessions across different subjects in one centralized, color-coded calendar.',
      },
      {
        title: 'Personal Progress Analytics',
        description: 'Watch your mastery climb across individual topics and see how consistent attendance correlates with higher test marks.',
        tag: 'Motivation',
      },
      {
        title: 'Assignment Submissions & Deadlines',
        description: 'Submit solved homework, access tutor answer keys, and review marked corrections anytime from your phone.',
      },
      {
        title: 'Tutor Q&A & Messaging',
        description: 'Ask clarifying doubts between lessons in a structured, safe educational messaging thread.',
      },
      {
        title: 'Learning History & Resource Vault',
        description: 'Revisit past session notes, study cheat sheets, and formula guides uploaded by your tutors.',
      },
    ],
  },
  {
    id: 'parent-visibility',
    category: 'Parents',
    title: 'Complete Parent Transparency Portal',
    subtitle: 'Stay genuinely connected to your child’s education',
    description:
      'No more guessing or waiting for end-of-term reports. TuitionStar gives parents peaceful clarity with instant attendance updates, mark trends, and payment tracking.',
    iconName: 'ShieldCheck',
    features: [
      {
        title: 'Instant Attendance Notifications',
        description: 'Receive an immediate push alert the moment your child enters or checks into their tuition session.',
        tag: 'Safety & Trust',
      },
      {
        title: 'Continuous Marks & Performance',
        description: 'Inspect quiz results, test percentiles, and tutor comments as soon as they are graded—no surprises.',
      },
      {
        title: 'Multi-Child Family Dashboard',
        description: 'Switch between siblings seamlessly and view all their tutors, subjects, and schedules under one login.',
      },
      {
        title: 'Clear Fee Status & Digital Receipts',
        description: 'See exact fees due, previous receipts, and pay effortlessly without handling cash envelopes.',
      },
      {
        title: 'Direct Tutor Communication',
        description: 'Message educators directly regarding upcoming family vacations, schedule adjustments, or learning concerns.',
      },
      {
        title: 'Comprehensive PDF Report Cards',
        description: 'Download executive summary report cards showcasing monthly attendance, test averages, and tutor commendations.',
      },
    ],
  },
  {
    id: 'discovery-network',
    category: 'Discovery',
    title: 'Two-Way Tutor & Student Matching Network',
    subtitle: 'Connecting passionate educators with eager minds',
    description:
      'A trusted educational marketplace where tutors find eager students in their neighborhood or worldwide, and families find the ideal mentor.',
    iconName: 'Compass',
    features: [
      {
        title: 'Granular Subject & Syllabus Filtering',
        description: 'Filter tutors by exact academic requirements: Cambridge IGCSE, Edexcel A-Level, AP Physics, IB HL Math, and more.',
      },
      {
        title: 'Verified Badges & Background Checks',
        description: 'Tutors with verified degrees, criminal background checks, and authenticated parent reviews receive verified badges.',
        tag: 'Vetted',
      },
      {
        title: 'Flexible Teaching Modes',
        description: 'Filter easily between online 1-on-1 sessions, in-person home tutoring, or local center batches.',
      },
      {
        title: 'Tutors Can Browse Student Requests',
        description: 'Tutors can proactively search student tutoring requests in their subject domain and pitch lesson proposals.',
      },
    ],
  },
  {
    id: 'analytics-reporting',
    category: 'Analytics',
    title: 'Insightful Learning & Business Analytics',
    subtitle: 'Data-informed pedagogy and operations',
    description:
      'Transform raw marks and attendance numbers into actionable insights for tutors, parents, and center managers.',
    iconName: 'BarChart3',
    features: [
      {
        title: 'Topic-Level Knowledge Heatmaps',
        description: 'Identify exactly which curriculum topics (e.g. Organic Chemistry vs Stoichiometry) need remedial revision.',
      },
      {
        title: 'Attendance Correlation Graphs',
        description: 'Visually demonstrate the statistical correlation between consistent lesson attendance and rising exam scores.',
      },
      {
        title: 'Tutor Revenue & Cashflow Insights',
        description: 'Track monthly recurring revenue, projected tuition earnings, and overdue balances at a glance.',
      },
      {
        title: 'Batch Comparison Benchmarks',
        description: 'Compare test score averages between morning and evening batches to optimize curriculum pacing.',
      },
    ],
  },
];

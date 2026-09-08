export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is TuitionStar?',
    answer:
      'TuitionStar is an all-in-one modern education management and tutor discovery platform. It unites private educators, students, and parents into a single connected ecosystem with dedicated tools for scheduling, real-time attendance, test marks, homework, fee tracking, and marketplace discovery.',
  },
  {
    category: 'General',
    question: 'Who can use TuitionStar?',
    answer:
      'TuitionStar is built for three primary groups: 1) Independent tutors and tuition academies looking to streamline their operations; 2) Students seeking expert mentors and a structured way to track their coursework; and 3) Parents who want transparent, real-time visibility into their child’s academic progress, attendance, and fees.',
  },
  {
    category: 'For Tutors',
    question: 'How does tutor discovery work on TuitionStar?',
    answer:
      'Tutors can create a verified public profile highlighting their degrees, teaching curriculum (IB, AP, IGCSE, A-Levels, SAT), hourly rates, location, and student testimonials. Students and parents can filter by subject, distance, pricing, and availability, and submit lesson inquiries directly to the tutor.',
  },
  {
    category: 'For Tutors',
    question: 'Can tutors manage attendance, tests, and batches?',
    answer:
      'Yes, absolutely. Tutors can organize students into individual 1-on-1 slots or group batches. Attendance can be taken in seconds with automatic parent push notifications, and tutors can log quiz scores, homework submissions, and teacher feedback with automated progress curves.',
  },
  {
    category: 'For Students & Parents',
    question: 'How do parents monitor student attendance and marks?',
    answer:
      'Parents receive secure access to the TuitionStar Parent Portal on iOS, Android, or web. When a tutor marks attendance, the parent receives an instant notification. Parents can also view historical test marks, homework status, teacher remarks, and scheduled upcoming classes anytime.',
  },
  {
    category: 'For Students & Parents',
    question: 'Can students discover tutors and track their assignments?',
    answer:
      'Yes. Students can search through our verified tutor directory, book trials, view their upcoming class calendar, download lesson materials, submit completed homework assignments, and track their test scores over time.',
  },
  {
    category: 'Pricing',
    question: 'Is there a free plan for tutors?',
    answer:
      'Yes! Our Free Starter plan allows solo tutors to manage up to 5 active students at no charge forever, with calendar scheduling, attendance logging, basic marks, and directory listing included. Upgraded plans are available as your student roster grows.',
  },
  {
    category: 'Pricing',
    question: 'How do fee tracking and payment reminders work?',
    answer:
      'Tutors can configure monthly, hourly, or term-based fee structures. TuitionStar automatically generates itemized invoices and sends courteous push/email payment reminders to parents on due dates, reducing unpaid or disputed balances.',
  },
  {
    category: 'Pricing',
    question: 'Can I cancel or upgrade my plan at any time?',
    answer:
      'Yes. There are no long-term contracts. You can switch between monthly and annual plans or upgrade/downgrade from within your account billing settings anytime.',
  },
  {
    category: 'Security',
    question: 'How is student data protected and secured?',
    answer:
      'We treat educational data with the utmost confidentiality. TuitionStar adheres to strict student data privacy regulations (including GDPR and COPPA compliance). All communications, grades, and records are encrypted in transit with TLS 1.3 and at rest with AES-256 encryption. We never sell student data or display external third-party advertisements.',
  },
  {
    category: 'For Tutors',
    question: 'Can tuition centers and academies with multiple tutors use TuitionStar?',
    answer:
      'Yes. The Tuition Academy tier includes multi-teacher management, classroom assignment, branch analytics, and shared student directories with role-based access control for administrative staff.',
  },
  {
    category: 'General',
    question: 'How quickly can I get started?',
    answer:
      'You can sign up in under 60 seconds. Tutors can set their weekly timetable, add students, and invite parents with a private invite link or QR code.',
  },
];

export const FAQ_DATA = FAQ_ITEMS;

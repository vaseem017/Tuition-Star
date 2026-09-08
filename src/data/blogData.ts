export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  coverImage: string;
  content: string[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export interface ResourceTemplate {
  id: string;
  title: string;
  format: string;
  downloads: string;
  description: string;
}

export const RESOURCE_TEMPLATES: ResourceTemplate[] = [
  {
    id: 'tmpl-1',
    title: 'Private Tutor Student Onboarding Diagnostic Checklist',
    format: 'PDF & Sheet',
    downloads: '2.4K',
    description: 'A 10-point intake checklist covering syllabus assessment, prerequisite gaps, target grade goals, and parent notification preferences.',
  },
  {
    id: 'tmpl-2',
    title: 'Diplomatic Fee Reminder Scripts & Invoicing Templates',
    format: 'Word & Text',
    downloads: '3.8K',
    description: 'Professional, courteous message scripts for upfront retainer billing, friendly 3-day reminders, and grace period notifications.',
  },
  {
    id: 'tmpl-3',
    title: 'Weekly Topic Mastery & Homework Tracking Rubric',
    format: 'Excel & Sheets',
    downloads: '1.9K',
    description: 'A structured evaluation matrix to score homework submissions by foundational recall, problem modeling, and exam answering technique.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: '7-admin-tasks-private-tutors-can-automate',
    title: '7 Repetitive Admin Tasks Every Private Tutor Can Automate Today',
    excerpt: 'From manual attendance sheets to chasing monthly tuition fees via awkward texts, discover how top-earning private educators win back 8+ hours every week.',
    category: 'Tutor Guides',
    date: 'October 14, 2025',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Head of Mathematics & Private Tutor Mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Digital attendance logs instantly notify parents, reducing disputed hours.',
      'Automated invoice generation prevents awkward fee reminder conversations.',
      'Centralized test mark tracking allows one-click progress report generation.',
      'Batch scheduling avoids scheduling conflicts across multiple time zones.',
    ],
    content: [
      'If you got into private tutoring because you love inspiring breakthrough "aha!" moments in students, you probably did not anticipate spending one-third of your working hours formatting spreadsheets, sending individual reminder texts, and manually calculating attendance percentages.',
      'Administrative overhead is the number one cause of private tutor burnout. When teaching is combined with billing, parent liaison, and scheduling, educators frequently find their student capacity capped at 15 to 20 students—not because they lack teaching energy, but because administrative friction consumes their weekends.',
      'By adopting dedicated education management software like TuitionStar, tutors replace fragmented WhatsApp messages and paper notebooks with structured student profiles, real-time attendance check-ins, and one-click report cards.',
    ],
    relatedSlugs: [
      'eliminating-late-payments-tactful-guide',
      'from-solo-tutor-to-micro-academy',
      'why-real-time-attendance-transparency-builds-trust',
    ],
  },
  {
    id: 'post-2',
    slug: 'why-real-time-attendance-transparency-builds-trust',
    title: 'Why Real-Time Attendance & Mark Transparency Builds Unshakeable Parent Trust',
    excerpt: 'Parents do not just invest in tuition for test scores; they invest in clarity and accountability. Here is how continuous data sharing transforms client retention.',
    category: 'Parent Advice',
    date: 'November 2, 2025',
    author: {
      name: 'Elena Rostova',
      role: 'Biochemistry Specialist & EdTech Consultant',
      avatar: 'https://images.unsplash.com/photo-1580894732488-b223049ce459?auto=format&fit=crop&w=200&q=80',
    },
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Real-time transparency eliminates the "end-of-term surprise" when report cards arrive.',
      'Parents feel included in their child’s academic journey without micro-managing tutor sessions.',
      'Students stay more accountable when they know both tutor and parent share the same progress view.',
    ],
    content: [
      'The traditional tuition dynamic is prone to information asymmetry. A parent drops their teenage child off at a tutoring center or closes the door to an online zoom room. Months pass with little feedback beyond "yes, everything is fine." Then mock exam results arrive, and frustration erupts.',
      'When tutors provide a dedicated Parent Portal via TuitionStar, parents receive instant notifications when their child checks into class, along with uploaded homework ratings and weekly topic mastery meters.',
    ],
    relatedSlugs: [
      'what-to-look-for-when-hiring-private-tutor',
      'science-of-spaced-repetition-tutoring',
      '7-admin-tasks-private-tutors-can-automate',
    ],
  },
  {
    id: 'post-3',
    slug: 'science-of-spaced-repetition-tutoring',
    title: 'The Science of Spaced Repetition in 1-on-1 Tutoring & Small Batches',
    excerpt: 'How to structure homework assignments and diagnostic revision tests so knowledge sticks permanently before final board examinations.',
    category: 'Study Tips',
    date: 'November 18, 2025',
    author: {
      name: 'Marcus Vance, M.Sc.',
      role: 'STEM Educator & Physics Specialist',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    },
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'The Ebbinghaus Forgetting Curve causes 70% retention loss within 48 hours without active recall.',
      'Spacing weekly mini-tests across previous 3-week topics triples long-term retrieval.',
      'Centralized mark recording in TuitionStar pinpoints topic degradation before major exams.',
    ],
    content: [
      'Every tutor has experienced the heartbreak of watching a student master a challenging quadratic formula on a Tuesday, only to look completely bewildered when presented with the identical concept three weeks later.',
      'To counter this, high-impact tutors implement structured 10-minute spiral quizzes at the beginning of each session, pulling questions not just from the immediate previous lesson, but from topics taught 2, 4, and 8 weeks ago.',
    ],
    relatedSlugs: [
      '7-admin-tasks-private-tutors-can-automate',
      'why-real-time-attendance-transparency-builds-trust',
    ],
  },
];

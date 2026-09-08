export interface Testimonial {
  id: string;
  name: string;
  role: 'Tutor' | 'Parent' | 'Student';
  title: string;
  avatar: string;
  quote: string;
  rating: number;
  subjectOrGrade: string;
  metric?: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rebecca Sterling',
    role: 'Tutor',
    title: 'Senior IGCSE & A-Level Math Tutor',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote:
      'TuitionStar eliminated nearly 10 hours of weekly spreadsheet chaos. Marking attendance takes 10 seconds, parents receive automated updates, and I have had zero awkward fee reminder conversations this semester.',
    rating: 5,
    subjectOrGrade: 'Mathematics (London, UK)',
    metric: 'Saved 10 hrs/week admin',
  },
  {
    id: 'test-2',
    name: 'Michael Thornton',
    role: 'Parent',
    title: 'Parent of Grade 9 & 11 Students',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Before TuitionStar, I had no clue what was happening in my son’s tuition classes until his school report card came. Now I see test scores the same evening and can congratulate him on specific improvements immediately.',
    rating: 5,
    subjectOrGrade: 'Father of 2 High Schoolers',
    metric: 'Real-time visibility',
  },
  {
    id: 'test-3',
    name: 'Alisha Verma',
    role: 'Student',
    title: 'IB Diploma Candidate (Grade 12)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote:
      'Finding my physics tutor through TuitionStar was seamless. Dr. Jenkins breaks down past paper questions so clearly, and having my class timetable, notes, and test scores in one clean app keeps me on track.',
    rating: 5,
    subjectOrGrade: 'IB Physics & Chemistry',
    metric: 'Score improved from 4 to 7',
  },
  {
    id: 'test-4',
    name: 'Dr. Tariq Al-Mansoor',
    role: 'Tutor',
    title: 'Founder of Al-Mansoor Science Hub',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'We run 6 batches across Biology and Chemistry. TuitionStar gave our micro-academy the professional infrastructure of a major institution at a fraction of the cost. Parents love the branded report cards.',
    rating: 5,
    subjectOrGrade: 'Science Academy (Dubai)',
    metric: '95+ active students',
  },
  {
    id: 'test-5',
    name: 'Grace Holloway',
    role: 'Parent',
    title: 'Parent of 8th Grade Student',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote:
      'The automated attendance notification gives me complete peace of mind when my daughter attends her after-school tuition. The app is clean, fast, and does exactly what parents need without clutter.',
    rating: 5,
    subjectOrGrade: 'Middle School Math & Science',
    metric: 'Peace of mind guaranteed',
  },
  {
    id: 'test-6',
    name: 'Devon Park',
    role: 'Student',
    title: 'AP Scholar & Pre-Med Aspirant',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    quote:
      'I love that homework assignments and test feedback are organized by topic. Seeing the progress curve climb before my AP Biology exam gave me huge confidence going into test day.',
    rating: 5,
    subjectOrGrade: 'AP Biology & Calculus',
    metric: '5/5 on AP Exam',
  },
];

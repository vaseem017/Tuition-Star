export interface StudentOpportunity {
  id: string;
  studentName: string;
  postedBy: 'Parent' | 'Student';
  gradeLevel: string;
  curriculum: string;
  subject: string;
  topicsNeeded: string[];
  location: string;
  mode: 'Online' | 'In-Person' | 'Flexible' | 'Hybrid';
  budgetHourly: number;
  currency: string;
  frequency: string;
  preferredDays: string;
  postedDate: string;
  description: string;
  status: 'Open' | 'Interviewing';
}

export type StudentRequest = StudentOpportunity;

export const STUDENT_OPPORTUNITIES: StudentOpportunity[] = [
  {
    id: 'req-101',
    studentName: 'Liam (15 yrs)',
    postedBy: 'Parent',
    gradeLevel: 'Grade 10 / Year 11',
    curriculum: 'Cambridge IGCSE',
    subject: 'Additional Mathematics & Physics',
    topicsNeeded: ['Trigonometry', 'Kinematics', 'Quadratic Modeling', 'Vectors'],
    location: 'North London (NW3) or Online',
    mode: 'Flexible',
    budgetHourly: 55,
    currency: '$',
    frequency: '2 sessions / week (1.5 hrs each)',
    preferredDays: 'Tuesdays & Thursdays after 5:00 PM',
    postedDate: '2 hours ago',
    description: 'Liam has upcoming mock exams in November. He grasps textbook theory well but struggles with multi-step exam paper problem solving.',
    status: 'Open',
  },
  {
    id: 'req-102',
    studentName: 'Maya K.',
    postedBy: 'Student',
    gradeLevel: 'Grade 12 / Year 13',
    curriculum: 'IB Diploma Programme (HL)',
    subject: 'IB Chemistry Higher Level',
    topicsNeeded: ['Organic Reaction Mechanisms', 'Energetics', 'Spectroscopy', 'Internal Assessment (IA) Review'],
    location: 'Singapore / Online',
    mode: 'Online',
    budgetHourly: 60,
    currency: '$',
    frequency: '1 session / week (2 hrs)',
    preferredDays: 'Sundays 10:00 AM - 12:00 PM SGT',
    postedDate: '5 hours ago',
    description: 'Looking for a dedicated IB Chemistry tutor who scored a 7 or is an examiner. Need intensive drill on Section B questions and IA guidance.',
    status: 'Open',
  },
  {
    id: 'req-103',
    studentName: 'Ethan & Oliver (Twins, 13 yrs)',
    postedBy: 'Parent',
    gradeLevel: 'Grade 8 / Junior High',
    curriculum: 'US Common Core',
    subject: 'Algebra 1 & Geometry Foundations',
    topicsNeeded: ['Linear Equations', 'Slope-Intercept', 'Polynomials', 'Word Problems'],
    location: 'Austin, TX / Online',
    mode: 'Online',
    budgetHourly: 70,
    currency: '$',
    frequency: '2 sessions / week (1 hr each, together)',
    preferredDays: 'Mondays & Wednesdays 4:30 PM CST',
    postedDate: '1 day ago',
    description: 'Looking for an upbeat, patient tutor who can keep two energetic 8th graders engaged and confident in pre-algebraic problem solving.',
    status: 'Open',
  },
  {
    id: 'req-104',
    studentName: 'Sophia R.',
    postedBy: 'Parent',
    gradeLevel: 'Grade 11 / Year 12',
    curriculum: 'Edexcel A-Level',
    subject: 'A-Level Biology',
    topicsNeeded: ['Cell Biology', 'Enzyme Kinetics', 'Genetics & Punnett Squares', 'Statistical T-Tests'],
    location: 'Dubai Hills / Online',
    mode: 'Hybrid',
    budgetHourly: 50,
    currency: '$',
    frequency: '1-2 sessions / week',
    preferredDays: 'Fridays or Saturdays',
    postedDate: '1 day ago',
    description: 'Targeting top tier UK veterinary programs. Needs high precision exam answering technique and clear mark scheme familiarity.',
    status: 'Open',
  },
  {
    id: 'req-105',
    studentName: 'Julian C.',
    postedBy: 'Student',
    gradeLevel: 'University Sophomore',
    curriculum: 'Undergraduate STEM',
    subject: 'Python & Data Structures',
    topicsNeeded: ['Object-Oriented Programming', 'Binary Trees', 'Big-O Analysis', 'Graph BFS/DFS'],
    location: 'Online Only',
    mode: 'Online',
    budgetHourly: 65,
    currency: '$',
    frequency: 'Weekly or as-needed before midterms',
    preferredDays: 'Weekday Evenings PST',
    postedDate: '2 days ago',
    description: 'CS major preparing for technical internship interviews and university data structures course. Need practical coding walk-throughs.',
    status: 'Interviewing',
  },
  {
    id: 'req-106',
    studentName: 'Aria (8 yrs)',
    postedBy: 'Parent',
    gradeLevel: 'Grade 3 / Primary 3',
    curriculum: 'Singapore Math',
    subject: 'Primary Mathematics & Reading Comprehension',
    topicsNeeded: ['Model Drawing Method', 'Word Problems', 'Vocabulary & Inference'],
    location: 'Sydney Eastern Suburbs',
    mode: 'In-Person',
    budgetHourly: 45,
    currency: '$',
    frequency: '1 session / week (1.5 hrs)',
    preferredDays: 'Saturday mornings',
    postedDate: '3 days ago',
    description: 'Aria is a bright student who needs encouragement with the bar model drawing technique and confidence speaking up.',
    status: 'Open',
  },
];

export const STUDENT_REQUESTS_DATA = STUDENT_OPPORTUNITIES;

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number; // monthly rate when billed annually
  yearlyPriceMonthly: number;
  period?: string;
  targetAudience: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaText: string;
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-starter',
    name: 'Free Starter',
    tagline: 'Ideal for independent tutors starting out with their first few students.',
    description: 'Up to 5 students, basic attendance, basic marks, parent alerts.',
    monthlyPrice: 0,
    annualPrice: 0,
    yearlyPriceMonthly: 0,
    period: 'forever',
    targetAudience: 'Solo tutors with up to 5 students',
    features: [
      'Up to 5 active students',
      'Class schedule & calendar sync',
      'Manual attendance marking',
      'Basic test marks recording',
      'Parent check-in push alerts',
      'Tutor profile on Discovery Directory',
      'Mobile App access (iOS & Android)',
    ],
    notIncluded: [
      'Automated batch fee tracking & invoicing',
      'Custom report cards & academic exports',
      'Multi-tutor administration',
    ],
    cta: 'Get Started Free',
    ctaText: 'Get Started Free',
    popular: false,
  },
  {
    id: 'plan-pro',
    name: 'Pro Tutor',
    badge: 'Most Popular',
    tagline: 'Complete automation for dedicated private tutors managing growing student batches.',
    description: 'Unlimited students, unlimited batches, automated fee tracking, performance analytics, customized report cards.',
    monthlyPrice: 24,
    annualPrice: 19,
    yearlyPriceMonthly: 19,
    period: '/month',
    targetAudience: 'Professional tutors with growing batches',
    features: [
      'Unlimited students & batches',
      'Automated attendance with notes & alerts',
      'Comprehensive marks, quizzes & homework tracker',
      'Parent Portal with live student progress dashboard',
      'Automated fee receipts & payment reminders',
      'Customized PDF report cards',
      'Super Tutor verification badge on Discovery',
      'Priority customer support (24/7)',
    ],
    notIncluded: [
      'Multi-tutor center staff permissions',
      'Custom center white-labeling',
    ],
    cta: 'Start 14-Day Free Trial',
    ctaText: 'Start 14-Day Free Trial',
    popular: true,
  },
  {
    id: 'plan-growth',
    name: 'Tuition Academy',
    badge: 'For Centers',
    tagline: 'Powering learning centers, micro-academies, and tuition centers.',
    description: 'Multiple tutors, center admin, staff permissions, advanced reporting, priority support, custom branding.',
    monthlyPrice: 59,
    annualPrice: 49,
    yearlyPriceMonthly: 49,
    period: '/month',
    targetAudience: 'Tuition centers with multiple teachers and growing classes',
    features: [
      'Multiple tutors & center admin dashboard',
      'Staff permissions & role-based access',
      'Advanced attendance & revenue analytics',
      'Automated fee collection with gateway integration',
      'Custom branded student report cards (PDF)',
      'Multi-branch / classroom scheduling',
      'Featured top-listing on Tutor Discovery',
      'Dedicated onboarding manager & priority support',
    ],
    cta: 'Start Academy Trial',
    ctaText: 'Start Academy Trial',
    popular: false,
  },
];

export interface FeatureRow {
  feature: string;
  starter: string | boolean;
  pro: string | boolean;
  academy: string | boolean;
}

export const PRICING_FEATURES_MATRIX: FeatureRow[] = [
  { feature: 'Active Students Limit', starter: '5 students', pro: 'Unlimited', academy: 'Unlimited' },
  { feature: 'Batch & Class Grouping', starter: '1 Batch', pro: 'Unlimited Batches', academy: 'Multi-Branch Batches' },
  { feature: 'Attendance Tracking', starter: 'Manual tap', pro: 'Automated + Alerts', academy: 'QR / Barcode / Center' },
  { feature: 'Test & Homework Tracker', starter: 'Basic marks', pro: 'Full + Attachments', academy: 'Custom Rubrics & Cohorts' },
  { feature: 'Parent Push Alerts', starter: true, pro: true, academy: true },
  { feature: 'Custom PDF Report Cards', starter: false, pro: true, academy: 'Branded with Logo' },
  { feature: 'Automated Fee Reminders', starter: false, pro: true, academy: 'Multi-step Escrow' },
  { feature: 'Multiple Tutor Accounts', starter: false, pro: false, academy: 'Up to 10 Tutors' },
  { feature: 'Staff Roles & Permissions', starter: false, pro: false, academy: true },
  { feature: 'Marketplace Top Placement', starter: false, pro: 'Super Tutor Badge', academy: 'Featured Academy' },
  { feature: 'Dedicated Support', starter: 'Standard', pro: '24/7 Priority', academy: 'Account Manager' },
];

export const COMPARISON_FEATURES = [
  {
    category: 'Core Management',
    items: [
      { name: 'Active Students', starter: '5 students', pro: 'Unlimited', academy: 'Unlimited' },
      { name: 'Batch & Class Grouping', starter: '1 Batch', pro: 'Unlimited', academy: 'Multi-Branch' },
      { name: 'Attendance Tracking', starter: 'Manual', pro: 'Automated + Notes', academy: 'QR / Center Admin' },
    ],
  },
];

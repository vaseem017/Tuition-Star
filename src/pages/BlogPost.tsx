import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  Share2,
  ChevronLeft,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS } from '../data/blogData';
import { AnimatedSection } from '../components/common/AnimatedSection';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-20 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title={`${post.title} | TuitionStar Education Blog`}
        description={post.excerpt}
        type="article"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb back link */}
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0c1e4e] dark:hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Resources & Articles
        </Link>

        {/* Article Header */}
        <AnimatedSection direction="up" distance={20} className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#0c1e4e]/40 text-[#0c1e4e] dark:text-blue-300 text-xs font-semibold">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <div className="font-bold text-slate-900 dark:text-white">{post.author.name}</div>
                <div className="text-[11px] text-slate-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy share link"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-10 shadow-lg aspect-video max-h-[420px] w-full">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-base sm:text-lg">
          <p className="font-medium text-slate-900 dark:text-slate-100 text-lg sm:text-xl leading-relaxed">
            {post.excerpt}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">
            1. Why Old Methods Break Down as Batches Grow
          </h2>
          <p>
            When a private educator manages 5 students, memory and a notebook are enough. But once class sizes reach 20, 30, or 50 learners, manual record-keeping turns into a full-time unpaid clerical job. Tutors spend upwards of 8 hours every weekend answering "Did my child arrive on time?" and reconciling scattered bank transfers.
          </p>

          {/* Callout box */}
          <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 not-prose">
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-blue-600" /> Key Takeaway
            </h4>
            <p className="text-xs sm:text-sm text-blue-800/90 dark:text-blue-300 leading-relaxed">
              Automating attendance push notifications immediately reduces parent anxiety and eliminates 85% of redundant WhatsApp text exchanges.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">
            2. Structured Gradebooks and Visible Progress Curves
          </h2>
          <p>
            Parents don't just pay for tuition; they invest in academic confidence. When parents can log into a clean portal and view continuous improvements in their child's diagnostic test scores, retention rates skyrocket and referrals become effortless.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Record scores immediately after grading homework or quizzes.</li>
            <li>Highlight specific topic tags (e.g. "Integration by Parts") so students know what to revise.</li>
            <li>Provide constructive remarks that celebrate positive work habits as well as raw test percentage.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">
            3. Diplomatic and Frictionless Fee Collections
          </h2>
          <p>
            Chasing families for monthly tuition dues is the single most unpleasant aspect of private tutoring. By automating digital invoices and receipts through a neutral platform, the educator maintains an inspiring mentor relationship with the student while payments are handled punctually in the background.
          </p>
        </div>

        {/* In-Article App CTA */}
        <div className="my-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to streamline your tuition classes?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-md">
              Start free today for up to 5 students. Available on iOS, Android, and Web.
            </p>
          </div>
          <Link
            to="/download"
            className="px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-md"
          >
            Get TuitionStar Free
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Related Guides & Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.id}
                to={`/blog/${r.slug}`}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-md transition-all group block"
              >
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">{r.category}</span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition-colors">
                  {r.title}
                </h4>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileSpreadsheet,
  Download,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS, RESOURCE_TEMPLATES } from '../data/blogData';
import { cn } from '../lib/utils';
import {
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedStaggerItem,
} from '../components/common/AnimatedSection';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Tutor Guides', 'Study Tips', 'Parent Advice', 'Product Updates'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/40 dark:bg-slate-950/20">
      <SEO
        title="Resources & Education Insights | TuitionStar"
        description="Comprehensive guides, lesson plan templates, fee reminder scripts, and study tips for private educators, students, and parents."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0c1e4e] dark:text-blue-400">
            Education Hub & Resource Library
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0c1e4e] dark:text-white tracking-tight mt-1">
            Guides, Templates & Best Practices.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Field-tested tools and articles designed to help tutors run better classes, students ace exams, and parents stay informed.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs font-semibold transition-all',
                  selectedCategory === c
                    ? 'bg-[#0c1e4e] text-white shadow-md shadow-[#0c1e4e]/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Downloadable Checklists & Templates Grid */}
        <div className="mb-16">
          <AnimatedSection direction="up" distance={15}>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-[#0c1e4e] dark:text-blue-400" />
              Free Downloadable Checklists & Templates
            </h2>
          </AnimatedSection>

          <AnimatedStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCE_TEMPLATES.map((tmpl) => (
              <AnimatedStaggerItem
                key={tmpl.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-bold text-[#0c1e4e] dark:text-blue-400">{tmpl.format}</span>
                    <span>{tmpl.downloads} downloads</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{tmpl.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{tmpl.description}</p>
                </div>

                <a
                  href="#download-template"
                  onClick={(e) => {
                    e.preventDefault();
                    // trigger polite simulated download feedback
                    const link = document.createElement('a');
                    link.href = '#';
                    alert(`Downloading ${tmpl.title} (${tmpl.format}) template.`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0c1e4e] hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download Free Template
                </a>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>

        {/* Articles Section */}
        <div>
          <AnimatedSection direction="up" distance={15}>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0c1e4e] dark:text-blue-400" />
              Educational Articles & Playbooks
            </h2>
          </AnimatedSection>

          <AnimatedStaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <AnimatedStaggerItem
                key={post.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0c1e4e]/90 backdrop-blur-md text-white text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#0c1e4e] dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-sm">
                    <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{post.author.name}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-bold text-[#0c1e4e] dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </div>
    </div>
  );
};

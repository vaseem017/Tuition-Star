import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, GraduationCap, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <SEO
        title="Page Not Found (404) | TuitionStar"
        description="The requested page could not be located. Browse our tutor directory or return to the TuitionStar homepage."
      />

      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-sm">
          <GraduationCap className="w-10 h-10" />
        </div>

        <div>
          <div className="text-6xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">404</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">Classroom Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            The link you followed may have moved or no longer exists. Let’s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
          <Link
            to="/find-a-tutor"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Search className="w-4 h-4" /> Find a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

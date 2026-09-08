import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { InitialLoader } from './components/common/InitialLoader';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { ForTutors } from './pages/ForTutors';
import { ForStudents } from './pages/ForStudents';
import { ForParents } from './pages/ForParents';
import { FindTutor } from './pages/FindTutor';
import { FindStudents } from './pages/FindStudents';
import { Pricing } from './pages/Pricing';
import { HowItWorks } from './pages/HowItWorks';
import { DownloadPage } from './pages/Download';
import { Resources } from './pages/Resources';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CookiePolicy } from './pages/CookiePolicy';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <InitialLoader />
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#060B13] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/for-tutors" element={<ForTutors />} />
              <Route path="/for-students" element={<ForStudents />} />
              <Route path="/for-parents" element={<ForParents />} />
              <Route path="/find-a-tutor" element={<FindTutor />} />
              <Route path="/find-students" element={<FindStudents />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LogoMark } from './Logo';

export const InitialLoader: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();

  // Initial site load sequence - ultra snappy and non-blocking
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  // Top gradient progress bar on route navigation - subtle and fast
  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Sleek Top Edge Brand Navy Gradient Progress Bar on Page Navigation */}
      <AnimatePresence>
        {routeLoading && !initialLoading && (
          <motion.div
            key="route-progress-bar"
            initial={{ scaleX: 0, opacity: 0.85 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-[#0c1e4e] via-blue-600 to-sky-400 shadow-sm shadow-[#0c1e4e]/40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Initial App Load Fullscreen Gradient Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            key="initial-gradient-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050a16] overflow-hidden select-none"
          >
            {/* Ambient Background Gradient Glows */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#0c1e4e]/15 via-blue-600/10 to-sky-400/10 blur-3xl pointer-events-none animate-pulse" />

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative flex flex-col items-center gap-5 z-10"
            >
              {/* Rotating Gradient Ring around Brand Icon */}
              <div className="relative flex items-center justify-center w-24 h-24">
                {/* Spinning Gradient Ring with #0c1e4e to Blue */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                  className="absolute inset-0 rounded-full p-[2.5px] bg-gradient-to-tr from-[#0c1e4e] via-blue-600 to-sky-400 opacity-95 shadow-lg shadow-[#0c1e4e]/25"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-[#050a16]" />
                </motion.div>

                {/* Pulsing inner glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#0c1e4e]/10 to-blue-500/15 blur-sm pointer-events-none" />

                {/* Logo Mark */}
                <div className="relative z-10">
                  <LogoMark size={44} />
                </div>
              </div>

              {/* Brand Wordmark */}
              <div className="flex items-baseline tracking-tight">
                <span className="text-2xl font-bold text-[#0c1e4e] dark:text-white">Tuition</span>
                <span className="text-2xl font-extrabold tracking-wider text-[#0c1e4e] dark:text-blue-400 ml-0.5">
                  STAR
                </span>
              </div>

              {/* Sleek Gradient Loading Indicator Line */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-36 h-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.9,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full bg-gradient-to-r from-[#0c1e4e] via-blue-600 to-sky-400 rounded-full shadow-sm shadow-[#0c1e4e]/30"
                  />
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                  Loading Workspace...
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

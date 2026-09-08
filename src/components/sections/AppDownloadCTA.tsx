import React from 'react';
import { Apple, Smartphone, QrCode, Download, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const AppDownloadCTA: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-[#081528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1e4e] via-[#102a6b] to-[#06112c] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-blue-900/50 overflow-hidden">
          {/* Subtle background ambient circles */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & Action Links */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
                <Smartphone className="w-3.5 h-3.5" />
                iOS & Android Native Apps
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                TuitionStar, Wherever <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                  Learning Happens.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Take your tuition business and study schedule everywhere. Mark attendance with one tap, review test marks on the train, and get instant push notifications the moment class starts.
              </p>

              {/* Benefit Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant push attendance alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Offline gradebook & attendance sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>One-click fee receipts via Apple Pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero lag, battery optimized</span>
                </div>
              </div>

              {/* Download Buttons & QR Code */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                {/* Apple App Store */}
                <a
                  href={SITE_CONFIG.downloads.iosAppStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="app-store-download-btn"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl group"
                >
                  <Apple className="w-7 h-7 text-slate-900 fill-current" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider leading-none">
                      Download on the
                    </div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href={SITE_CONFIG.downloads.googlePlayStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-play-download-btn"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
                >
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.428V3.242c0-.547.221-1.043.609-1.428zM15.207 13.414l2.586 2.586-13.084 7.554 10.498-10.14zM18.793 11.207l2.828 1.633a1.5 1.5 0 010 2.32l-2.828 1.633-2.586-2.586 2.586-3zM4.709.446l13.084 7.554-2.586 2.586L4.709.446z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">
                      Get it on
                    </div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                {/* QR Code Quick Scan Block */}
                <div className="hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  {/* Clean SVG QR Code Graphic */}
                  <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-slate-900 fill-current">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h2v2h-2v-2zm2-4h2v2h-2v-2zm-4-4h2v2h-2v-2zm6 6h2v2h-2v-2zm0-6h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div className="text-left text-xs">
                    <div className="font-semibold text-white">Scan to install</div>
                    <div className="text-slate-400 text-xs">Direct mobile link</div>
                  </div>
                </div>
              </div>

              {/* Rating reassurance */}
              <div className="flex items-center gap-2 pt-2 text-sm text-slate-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.9 / 5 across 1,200+ App Store & Google Play reviews</span>
              </div>
            </div>

            {/* Mobile Phone Mockup Device Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-68 sm:w-76 rounded-[38px] p-3 bg-slate-900 shadow-2xl border-4 border-slate-700/80">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30" />

                {/* Inner Screen */}
                <div className="rounded-[30px] overflow-hidden bg-slate-950 text-white p-4 pt-8 text-xs relative space-y-3">
                  {/* Status header */}
                  <div className="flex justify-between items-center px-1 text-xs text-slate-400">
                    <span>9:41</span>
                    <span className="flex gap-1">5G • 100%</span>
                  </div>

                  {/* App Header Inside Phone */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="text-xs text-blue-400 font-semibold">TuitionStar Mobile</div>
                      <div className="font-bold text-base text-white">Today's Batches</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs">
                      TS
                    </div>
                  </div>

                  {/* Class 1 Card */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-semibold">
                        In Progress
                      </span>
                      <span className="text-slate-400">4:30 - 6:00 PM</span>
                    </div>
                    <div className="font-bold text-white text-sm">A-Level Pure Math (Batch 2)</div>
                    <div className="text-xs text-slate-400">12 / 12 Students Checked In</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-full" />
                    </div>
                  </div>

                  {/* Notification popup bubble */}
                  <div className="p-2.5 rounded-xl bg-blue-900/60 border border-blue-700/60 text-xs flex items-center gap-2 shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">Parent Alert Sent:</span> Liam Harrison checked in at 4:28 PM.
                    </div>
                  </div>

                  {/* Class 2 Card */}
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                    <div className="flex justify-between text-slate-400 text-xs">
                      <span>Upcoming</span>
                      <span>6:15 PM</span>
                    </div>
                    <div className="font-semibold text-white mt-1 text-sm">IB Physics HL (1-on-1)</div>
                    <div className="text-xs text-slate-400">Maya Kapoor • Room 3 / Online</div>
                  </div>

                  {/* Quick Bottom Bar */}
                  <div className="pt-2 flex justify-around text-slate-400 text-xs border-t border-slate-800">
                    <span className="text-blue-400 font-semibold">Classes</span>
                    <span>Students</span>
                    <span>Attendance</span>
                    <span>Marks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

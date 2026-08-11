import { Users, Briefcase, Star, Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onFindTalentClick: () => void;
  onFindWorkClick: () => void;
  totalTalents: number;
  totalJobs: number;
}

export default function Hero({
  onFindTalentClick,
  onFindWorkClick,
  totalTalents,
  totalJobs
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Orbs & Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/40 rounded-full glow-orb" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-200/40 rounded-full glow-orb" />
      
      {/* Dotted decorative background dots */}
      <div className="absolute top-20 left-12 w-28 h-28 dot-pattern opacity-40 hidden xl:block" />
      <div className="absolute bottom-20 right-12 w-32 h-32 dot-pattern opacity-40 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 text-left space-y-7">
            
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <span>🚀</span>
              <span>The best place to find talent or work</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-[1.1]"
            >
              Find the perfect talent or your next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600">
                opportunity
              </span>
            </motion.h1>

            {/* Subparagraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              SkillHub connects skilled professionals with amazing opportunities. Find talent. Get work done.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onFindTalentClick}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                Find Talent
              </button>
              <button
                onClick={onFindWorkClick}
                className="px-8 py-4 border-2 border-indigo-100 hover:border-indigo-200 text-indigo-600 hover:text-indigo-700 font-bold rounded-xl bg-transparent hover:bg-indigo-50/20 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                Find Work
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-slate-100"
            >
              {/* Stat 1 */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg sm:text-2xl text-slate-900 leading-none">
                    50K+
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-1.5 font-medium leading-tight">
                    Talented Professionals
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg sm:text-2xl text-slate-900 leading-none">
                    10K+
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-1.5 font-medium leading-tight">
                    Jobs Posted
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-rose-50" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg sm:text-2xl text-slate-900 leading-none">
                    98%
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-1.5 font-medium leading-tight">
                    Satisfaction Rate
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Hero Visual elements */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Ambient Background Dotted Grid for image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 dot-pattern opacity-60 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 dot-pattern opacity-60 hidden md:block" />

            <div className="relative w-full max-w-lg md:max-w-xl xl:max-w-2xl px-4">
              
              {/* Real-time purple blurry backdrop light */}
              <div className="absolute inset-4 -m-4 bg-gradient-to-tr from-indigo-500/20 to-purple-600/10 rounded-3xl blur-2xl -z-10" />

              {/* Main Laptop developer image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/80 bg-white"
              >
                <img
                  src="/src/assets/images/hero_developer_1781881018196.jpg"
                  alt="Talent professional typing on a laptop"
                  className="w-full h-auto aspect-4/3 object-cover hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* OVERLAY CARD 1: TOP LEFT (Project Completed) */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-6 left-0 sm:-left-6 md:-left-8 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 p-4 shadow-xl max-w-[210px] sm:max-w-[230px] text-left hover:translate-y-[-2px] transition-transform"
              >
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Project Completed
                </div>
                <h4 className="font-display font-extrabold text-[14px] sm:text-[15px] text-slate-800 mt-1 line-clamp-1">
                  Website Development
                </h4>
                <div className="flex items-end justify-between mt-2.5">
                  <span className="font-display font-black text-lg sm:text-xl text-emerald-500">
                    $1,250
                  </span>
                  
                  {/* Miniature beautiful green sparkline */}
                  <div className="w-16 h-7 text-emerald-500">
                    <svg viewBox="0 0 40 16" className="w-full h-full" fill="none">
                      <path
                        d="M0,14 Q8,12 12,6 T24,8 T32,2 T40,4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* OVERLAY CARD 2: BOTTOM RIGHT (Sarah Johnson profile) */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-6 right-0 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 p-3.5 shadow-2xl max-w-[240px] sm:max-w-[260px] text-left hover:translate-y-[-2px] transition-transform"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src="/src/assets/images/sarah_avatar_1781881033039.jpg"
                    alt="Sarah Johnson UI UX designer lead"
                    className="w-10 h-10 rounded-full object-cover border border-indigo-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-display font-extrabold text-sm text-slate-800 leading-tight">
                      Sarah Johnson
                    </h5>
                    
                    {/* Stars rating */}
                    <div className="flex items-center gap-0.5 mt-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Quotation bio snippet */}
                <p className="text-xs text-slate-500 italic mt-2.5 line-clamp-2 leading-relaxed border-t border-slate-50 pt-2">
                  "Amazing work! Highly recommended."
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { UserPlus, Search, Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Account",
      subtitle: "Sign up and create your profile in minutes",
      icon: UserPlus,
      color: "bg-indigo-600"
    },
    {
      number: "2",
      title: "Find or Search",
      subtitle: "Find talent or browse jobs that match your needs",
      icon: Search,
      color: "bg-indigo-600"
    },
    {
      number: "3",
      title: "Connect & Succeed",
      subtitle: "Connect, collaborate, and get things done",
      icon: Check,
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="how-it-works-section" className="py-20 bg-white relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-100 to-transparent -translate-y-1/2 hidden lg:block -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[11px] sm:text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50/60 px-3 py-1 rounded-full inline-block">
            How It Works
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
            Simple Steps to Get Started
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Whether you're hiring or looking for work, we make it easy
          </p>
        </div>

        {/* Steps Loop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div key={idx} className="flex flex-col items-center text-center group relative">
                
                {/* Image / Circle container */}
                <div className="relative mb-6">
                  
                  {/* Outer circle layout */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-18 h-18 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/25 relative group-hover:bg-indigo-700 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 font-light" />

                    {/* Step number badge */}
                    <div className="absolute -top-1.5 -right-1.5 w-6.5 h-6.5 rounded-full bg-violet-500 border-2 border-white text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Flow arrow inside desktop view in between steps */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-1/2 translate-x-[25%] -translate-y-1/2 text-slate-300 w-12 h-6 pointer-events-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300/60 animate-ping" />
                        <span className="text-slate-200 tracking-tighter overflow-hidden select-none">
                          - - - - &gt;
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Step contents */}
                <h3 className="font-display font-extrabold text-lg text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-400 mt-2.5 max-w-[240px] leading-relaxed">
                  {step.subtitle}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

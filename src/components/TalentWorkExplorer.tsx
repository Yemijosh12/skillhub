import { useState } from "react";
import { Search, Star, Briefcase, MapPin, DollarSign, Clock, ArrowRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { Talent, Job, Category } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface TalentWorkExplorerProps {
  talents: Talent[];
  jobs: Job[];
  categories: Category[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  onViewTalent: (talent: Talent) => void;
  activeTab: "talents" | "jobs";
  setActiveTab: (tab: "talents" | "jobs") => void;
}

export default function TalentWorkExplorer({
  talents,
  jobs,
  categories,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  onSelectCategory,
  onViewTalent,
  activeTab,
  setActiveTab
}: TalentWorkExplorerProps) {
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});
  const [applyingJobId, setApplyingJobId] = useState<string | null>(null);

  // Filters State
  const selectedCatObj = categories.find((c) => c.id === selectedCategory);

  // Apply to a job action
  const handleApplyJob = (jobId: string) => {
    setApplyingJobId(jobId);
    setTimeout(() => {
      setAppliedJobs((prev) => ({ ...prev, [jobId]: true }));
      setApplyingJobId(null);
    }, 800);
  };

  // Filtering Logic
  const filteredTalents = talents.filter((t) => {
    const matchesSearch = 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredJobs = jobs.filter((j) => {
    const matchesSearch = 
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.tags.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      j.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || j.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="explorer-directory" className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle navigation bar & search summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-5 gap-6 mb-10">
          <div>
            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">
              Explore Opportunities
            </h2>
            <p className="text-sm text-slate-400 mt-1.5 font-medium">
              {searchQuery ? `Search results for "${searchQuery}"` : "Find certified top talented professionals and active freelance milestones"}
              {selectedCatObj ? ` inside ${selectedCatObj.name}` : ""}
            </p>
          </div>

          {/* Switch tabs layout */}
          <div className="flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/50 self-start">
            <button
              onClick={() => setActiveTab("talents")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                activeTab === "talents"
                  ? "bg-white text-indigo-600 shadow-md shadow-indigo-600/5"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Verified Experts ({filteredTalents.length})
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                activeTab === "jobs"
                  ? "bg-white text-indigo-600 shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Contract Gigs ({filteredJobs.length})
            </button>
          </div>
        </div>

        {/* Categories filters for speedy adjustments */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              !selectedCategory 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10 border-indigo-600"
                  : "bg-white text-slate-600 border-slate-100 hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
          
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50/70 border border-indigo-100 px-3 py-2 rounded-xl ml-auto"
            >
              Reset Search Filter
            </button>
          )}
        </div>

        {/* Tab content wrapper */}
        <div className="relative">
          
          {/* TALENTS TAB VIEW */}
          {activeTab === "talents" && (
            <div>
              {filteredTalents.length === 0 ? (
                <div className="text-center py-20 bg-slate-50/50 rounded-3xl border border-slate-100">
                  <p className="text-slate-400 font-medium font-display text-lg">No talent matches your current filters.</p>
                  <button 
                    onClick={() => { onSelectCategory(null); setSearchQuery(""); }} 
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs"
                  >
                    Clear Filter Requirements
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredTalents.map((talent) => (
                    <motion.div
                      key={talent.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl border border-slate-150 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-600/5 transition-all duration-300"
                    >
                      <div>
                        {/* Profile Head */}
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={talent.avatar}
                            alt={talent.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-slate-50"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {talent.name}
                            </h3>
                            <p className="text-xs font-semibold text-slate-400">
                              {talent.title}
                            </p>
                          </div>
                        </div>

                        {/* Stats mini */}
                        <div className="flex items-center justify-between text-xs font-semibold border-b border-slate-50 pb-3.5 mb-3.5">
                          <div className="flex items-center gap-1 text-amber-500 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>{talent.rating.toFixed(1)}</span>
                          </div>
                          
                          <div className="text-slate-800 font-display font-black">
                            ${talent.hourlyRate}/hr
                          </div>

                          <span className="text-slate-400 text-[11px]">
                            {talent.completedProjects} Jobs
                          </span>
                        </div>

                        {/* Bio preview */}
                        <p className="text-xs leading-relaxed text-slate-500 line-clamp-3 mb-5">
                          {talent.bio}
                        </p>

                        {/* Skills tag pill */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {talent.skills.slice(0, 3).map((skill, index) => (
                            <span 
                              key={index} 
                              className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                          {talent.skills.length > 3 && (
                            <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50/30 border border-indigo-100/30 px-2 py-1 rounded">
                              +{talent.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View details button action */}
                      <button
                        onClick={() => onViewTalent(talent)}
                        className="w-full py-3 border border-indigo-100 hover:border-indigo-200 text-indigo-600 bg-white hover:bg-indigo-50/30 font-bold rounded-xl text-xs sm:text-sm tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                      >
                        View Full Profile
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* JOBS TAB VIEW */}
          {activeTab === "jobs" && (
            <div>
              {filteredJobs.length === 0 ? (
                <div className="text-center py-20 bg-slate-50/50 rounded-3xl border border-slate-100">
                  <p className="text-slate-400 font-medium font-display text-lg">No active contract gigs match your parameters.</p>
                  <button 
                    onClick={() => { onSelectCategory(null); setSearchQuery(""); }} 
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs animate-pulse"
                  >
                    Clear Filter Requirements
                  </button>
                </div>
              ) : (
                <div className="space-y-4 max-w-4xl mx-auto">
                  {filteredJobs.map((job) => {
                    const isApplied = appliedJobs[job.id];
                    const isApplying = applyingJobId === job.id;

                    return (
                      <motion.div
                        key={job.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group bg-white rounded-2xl border border-slate-150 p-5 sm:p-6 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl transition-all"
                      >
                        <div className="space-y-2.5 flex-1 max-w-2xl">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                              {job.company}
                            </span>
                            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                              {job.type}
                            </span>
                            <span className="text-[10px] text-slate-350 ml-auto md:ml-1 font-mono">
                              Posted {job.postedTime}
                            </span>
                          </div>

                          <h3 className="font-display font-black text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {job.title}
                          </h3>

                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {job.tags.map((tg, i) => (
                              <span key={i} className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100/75 px-1.5 py-0.5 rounded">
                                #{tg}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Apply trigger area */}
                        <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-50 gap-4">
                          <div className="text-left md:text-right">
                            <span className="text-[10px] font-semibold block text-slate-400 uppercase tracking-wider">
                              Project Budget
                            </span>
                            <span className="font-display font-black text-xl text-emerald-500">
                              ${job.budget.toLocaleString()}
                            </span>
                          </div>

                          {isApplied ? (
                            <span className="px-5 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-sm border border-emerald-100 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" /> Applied
                            </span>
                          ) : (
                            <button
                              onClick={() => handleApplyJob(job.id)}
                              disabled={isApplying}
                              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm tracking-tight transition-all cursor-pointer flex items-center justify-center gap-1.5 min-w-[120px]"
                            >
                              {isApplying ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin block" />
                              ) : (
                                "Apply Gigs"
                              )}
                            </button>
                          )}
                        </div>

                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

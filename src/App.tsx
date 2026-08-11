import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrowseCategories from "./components/BrowseCategories";
import HowItWorks from "./components/HowItWorks";
import TrustedCompanies from "./components/TrustedCompanies";
import TalentWorkExplorer from "./components/TalentWorkExplorer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import PostJobModal from "./components/PostJobModal";
import TalentDetailsModal from "./components/TalentDetailsModal";
import { categories, talentList, initialJobs } from "./data";
import { Talent, Job } from "./types";
import { CheckCircle2, AlertCircle, X, ExternalLink } from "lucide-react";

export default function App() {
  // Database States
  const [talents, setTalents] = useState<Talent[]>(talentList);
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [explorerTab, setExplorerTab] = useState<"talents" | "jobs">("talents");

  // Authentication states (simulate real storage)
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);

  // Modal view states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);

  // Notifications systems
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const triggerToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Login handler
  const handleLoginSuccess = (user: { email: string; name: string }) => {
    setCurrentUser(user);
    triggerToast(`Welcome back, ${user.name}! You are successfully logged in.`);
  };

  // Signup handler
  const handleSignupSuccess = (user: { email: string; name: string }) => {
    setCurrentUser(user);
    triggerToast(`Account created! Welcome to SkillHub, ${user.name}.`);
  };

  // Add Job handler
  const handleAddJob = (newJobData: Omit<Job, "id" | "postedTime">) => {
    const freshJob: Job = {
      ...newJobData,
      id: `job-${Date.now()}`,
      postedTime: "Just now"
    };

    setJobs((prev) => [freshJob, ...prev]);
    // Switch explorer tab immediately to Jobs so client can see their published card!
    setExplorerTab("jobs");
    triggerToast(`Successfully posted gig "${newJobData.title}"! Applications are now active.`, "success");
    
    // Smoothly scroll down to directory so they can see it instantly
    setTimeout(() => {
      const element = document.getElementById("explorer-directory");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  // Custom Category Click handler
  const handleSelectCategory = (id: string | null) => {
    setSelectedCategory(id);
    // Smoothly scroll down to directory
    setTimeout(() => {
      const element = document.getElementById("explorer-directory");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handleHeroFindTalent = () => {
    setExplorerTab("talents");
    setTimeout(() => {
      const element = document.getElementById("browse-categories-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleHeroFindWork = () => {
    setExplorerTab("jobs");
    setTimeout(() => {
      const element = document.getElementById("explorer-directory");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50/20 font-sans selection:bg-indigo-100 selection:text-indigo-900 leading-normal text-slate-600 antialiased">
      
      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300 max-w-sm w-full bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 shadow-2xl flex items-start gap-3">
          <div className="p-1 rounded-full bg-indigo-500/10 text-indigo-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left text-xs leading-normal">
            <p className="font-bold text-white text-sm">Action Confirmed</p>
            <p className="text-slate-400 mt-0.5">{toast.message}</p>
          </div>
          <button 
            onClick={() => setToast(null)}
            className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header section */}
      <Header
        onSearch={setSearchQuery}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSignup={() => setIsSignupOpen(true)}
        onOpenPostJob={() => setIsPostJobOpen(true)}
        onViewCategory={handleSelectCategory}
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          triggerToast("Logged out successfully.", "info");
        }}
      />

      {/* Hero section */}
      <Hero
        onFindTalentClick={handleHeroFindTalent}
        onFindWorkClick={handleHeroFindWork}
        totalTalents={talents.length}
        totalJobs={jobs.length}
      />

      {/* Browse categories grid */}
      <BrowseCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* How it works pipeline diagram */}
      <HowItWorks />

      {/* Exploration Directory search engine */}
      <TalentWorkExplorer
        talents={talents}
        jobs={jobs}
        categories={categories}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} // directly update, no scroll needed
        onViewTalent={setSelectedTalent}
        activeTab={explorerTab}
        setActiveTab={setExplorerTab}
      />

      {/* Partner Companies row */}
      <TrustedCompanies />

      {/* Footer layout */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            
            {/* Column 1 info brand */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-extrabold text-lg">
                  S
                </div>
                <span className="font-display font-black text-xl text-white tracking-tight">
                  SkillHub
                </span>
              </div>
              <p className="text-xs leading-relaxed max-w-xs text-slate-400">
                A modern platform to fast-track hiring or gig discoverability with absolute standard compliance. Trusted by thousands of creatives and agencies globally.
              </p>
            </div>

            {/* Column 2 quick links */}
            <div>
              <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-450 font-semibold">
                <li><a onClick={handleHeroFindTalent} className="hover:text-indigo-400 cursor-pointer transition-colors block">Certified Agencies</a></li>
                <li><a onClick={handleHeroFindWork} className="hover:text-indigo-400 cursor-pointer transition-colors block">Enterprise Gigs</a></li>
                <li><a href="#" className="hover:text-indigo-400 cursor-copy transition-colors block flex items-center gap-1">Secure Payments <LinkIndicator /></a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors block">Developer APIs</a></li>
              </ul>
            </div>

            {/* Column 3 company */}
            <div>
              <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-450 font-semibold">
                <li><a href="#" className="hover:text-indigo-400 transition-colors block">Customer Stories</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors block">Freelance Insights</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors block">Code & Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors block">Contact Support</a></li>
              </ul>
            </div>

            {/* Column 4 newsletters */}
            <div className="space-y-4">
              <h4 className="font-semibold text-xs text-white uppercase tracking-wider mb-1">
                Newsletter
              </h4>
              <p className="text-xs text-slate-400 leading-normal">
                Sign up for fresh project leads and developer market trends.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-slate-800 border border-slate-700/60 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 flex-1 min-w-0"
                />
                <button
                  onClick={() => triggerToast("Successfully subscribed to SkillHub Newsletter!")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition-colors shrink-0"
                >
                  Join
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} SkillHub Inc. All rights reserved. Made exactly as the UI displays.
            </p>
            <div className="flex gap-6 text-[11px] font-semibold text-slate-500">
              <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-350 transition-colors">Compliance Rules</a>
            </div>
          </div>
        </div>
      </footer>

      {/* OVERLAY MODALS */}

      {/* Login Overlay */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Sign Up Overlay */}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSignupSuccess={handleSignupSuccess}
      />

      {/* Post job Opportunity */}
      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
        onAddJob={handleAddJob}
        categories={categories}
      />

      {/* Talent detailed sheet overlay */}
      <TalentDetailsModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
      />

    </div>
  );
}

// Inline utility component
function LinkIndicator() {
  return (
    <span className="inline-block relative top-[-1px] opacity-60">
      <ExternalLink className="w-2.5 h-2.5 inline" />
    </span>
  );
}

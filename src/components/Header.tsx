import React, { useState } from "react";
import { Search, ChevronDown, LogIn, UserPlus, PlusCircle, User, LogOut } from "lucide-react";

interface HeaderProps {
  onSearch: (query: string) => void;
  onOpenLogin: () => void;
  onOpenSignup: () => void;
  onOpenPostJob: () => void;
  onViewCategory: (catId: string | null) => void;
  currentUser: { email: string; name: string } | null;
  onLogout: () => void;
}

export default function Header({
  onSearch,
  onOpenLogin,
  onOpenSignup,
  onOpenPostJob,
  onViewCategory,
  currentUser,
  onLogout
}: HeaderProps) {
  const [searchVal, setSearchVal] = useState("");
  const [showTalentDropdown, setShowTalentDropdown] = useState(false);
  const [showWorkDropdown, setShowWorkDropdown] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchVal);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    onSearch(val);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div 
              onClick={() => {
                onViewCategory(null);
                setSearchVal("");
                onSearch("");
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
              id="header-logo"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-indigo-600/25 group-hover:bg-indigo-700 transition-all duration-300 transform group-hover:scale-105">
                S
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                SkillHub
              </span>
            </div>

            {/* Navigation links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Find Talent Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowTalentDropdown(true)}
                onMouseLeave={() => setShowTalentDropdown(false)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all">
                  Find Talent <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showTalentDropdown ? "rotate-180" : ""}`} />
                </button>
                {showTalentDropdown && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => { onViewCategory("dev"); setShowTalentDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      Web & Software Developers
                    </button>
                    <button 
                      onClick={() => { onViewCategory("design"); setShowTalentDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      Designers & Creative Directors
                    </button>
                    <button 
                      onClick={() => { onViewCategory("business"); setShowTalentDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      Fractional Consultants
                    </button>
                  </div>
                )}
              </div>

              {/* Find Work Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowWorkDropdown(true)}
                onMouseLeave={() => setShowWorkDropdown(false)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all">
                  Find Work <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showWorkDropdown ? "rotate-180" : ""}`} />
                </button>
                {showWorkDropdown && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => { onViewCategory(null); setShowWorkDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      Browse All Open Jobs
                    </button>
                    <button 
                      onClick={() => { onOpenPostJob(); setShowWorkDropdown(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center justify-between"
                    >
                      Post an Opportunity <PlusCircle className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Categories */}
              <button 
                onClick={() => {
                  const element = document.getElementById("browse-categories-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all"
              >
                Categories
              </button>

              {/* How It Works */}
              <button 
                onClick={() => {
                  const element = document.getElementById("how-it-works-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-all"
              >
                How It Works
              </button>
            </nav>
          </div>

          {/* Search bar inside header */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search skills, services..."
                value={searchVal}
                onChange={handleSearchChange}
                className="w-full h-11 pl-11 pr-4 bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white rounded-lg text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </form>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">
                  {currentUser.name[0].toUpperCase()}
                </div>
                <div className="hidden sm:block text-left text-xs">
                  <p className="font-semibold text-slate-800 leading-3">{currentUser.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{currentUser.email}</p>
                </div>
                <button 
                  onClick={onLogout} 
                  title="Logout"
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-all ml-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={onOpenLogin}
                  className="flex items-center gap-2 px-4 py-2 text-[15px] font-semibold text-slate-700 hover:text-indigo-600 transition-all"
                  id="btn-login"
                >
                  <LogIn className="w-4.5 h-4.5" />
                  Login
                </button>
                <button 
                  onClick={onOpenSignup}
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-[15px] font-semibold text-white shadow-lg shadow-indigo-600/15 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  id="btn-signup"
                >
                  <UserPlus className="w-4.5 h-4.5" />
                  Sign Up
                </button>
              </>
            )}
            
            <button 
              onClick={onOpenPostJob}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 border border-indigo-200 text-[14px] font-semibold text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all"
            >
              Post a Job
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

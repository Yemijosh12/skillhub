import React, { useState } from "react";
import { X, UserPlus, Mail, Lock, User, Briefcase } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignupSuccess: (user: { email: string; name: string }) => void;
}

export default function SignupModal({ isOpen, onClose, onSignupSuccess }: SignupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "freelancer">("client");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please write your full name.");
      return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSignupSuccess({ email, name });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">
            Create an Account
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Connect with industry-tested professionals and gigs
          </p>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-xs sm:text-sm mb-4 font-medium">
            {error}
          </div>
        )}

        {/* Role Toggle */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`py-3 px-4 rounded-xl border font-bold text-xs flex flex-col items-center gap-1.5 transition-all ${
              role === "client" 
                ? "border-indigo-500 bg-indigo-50/40 text-indigo-700" 
                : "border-slate-200 text-slate-500 hover:border-slate-300 bg-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            I Want to Hire
          </button>
          <button
            type="button"
            onClick={() => setRole("freelancer")}
            className={`py-3 px-4 rounded-xl border font-bold text-xs flex flex-col items-center gap-1.5 transition-all ${
              role === "freelancer" 
                ? "border-indigo-500 bg-indigo-50/40 text-indigo-700" 
                : "border-slate-200 text-slate-500 hover:border-slate-300 bg-white"
            }`}
          >
            <User className="w-4 h-4" />
            I Want to Work
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jean Doe"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Make it secure"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 active:scale-[0.98] transition-all text-sm mt-3 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-[11px] text-slate-400 text-center mt-4">
          By signing up, you agree to our terms of service and privacy rules.
        </p>

      </div>
    </div>
  );
}

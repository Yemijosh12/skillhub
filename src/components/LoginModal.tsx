import React, { useState } from "react";
import { X, LogIn, Mail, Lock } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { email: string; name: string }) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please write an email address.");
      return;
    }
    if (!password || password.length < 5) {
      setError("Password must be at least 5 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const computedName = name.trim() || email.split("@")[0];
      onLoginSuccess({
        email,
        name: computedName.charAt(0).toUpperCase() + computedName.slice(1)
      });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Access your matches and premium dashboards
          </p>
        </div>

        {/* Feedback Message */}
        {error && (
          <div className="p-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-xs sm:text-sm mb-4 font-medium">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Custom Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jean Doe"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
            />
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
                placeholder="you@example.com"
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
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 active:scale-[0.98] transition-all text-sm mt-2 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
          <span className="relative bg-white px-3 text-xs text-slate-400 font-medium">Or continue with demo</span>
        </div>

        <button
          onClick={() => {
            onLoginSuccess({ email: "demo@skillhub.com", name: "Guest User" });
            onClose();
          }}
          className="w-full py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-indigo-600 bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/20 rounded-xl transition-all"
        >
          Quick Demo Guest Login
        </button>
      </div>
    </div>
  );
}

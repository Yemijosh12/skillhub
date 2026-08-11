import React, { useState } from "react";
import { X, Star, DollarSign, Briefcase, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { Talent } from "../types";

interface TalentDetailsModalProps {
  talent: Talent | null;
  onClose: () => void;
}

export default function TalentDetailsModal({ talent, onClose }: TalentDetailsModalProps) {
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  if (!talent) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setMsg("");
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[85vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all cursor-pointer border border-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Alert Banner */}
        {success && (
          <div className="p-4 mb-5 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-4 duration-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-emerald-800 text-sm">Message Sent Successfully!</p>
              <p className="text-xs text-emerald-600 mt-1">
                {talent.name} has been notified and will reply shortly via your dashboard inbox.
              </p>
            </div>
          </div>
        )}

        {/* Candidate head profile */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left pb-6 border-b border-slate-100">
          <img
            src={talent.avatar}
            alt={talent.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-indigo-50"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50/70 border border-indigo-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Certified Professional
              </span>
              {talent.featured && (
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-amber-400 text-amber-400" /> Top Rated
                </span>
              )}
            </div>
            
            <h3 className="font-display font-black text-2xl text-slate-950 tracking-tight leading-none">
              {talent.name}
            </h3>
            
            <p className="text-sm font-semibold text-slate-500">
              {talent.title}
            </p>

            <div className="flex items-center gap-1 justify-center sm:justify-start text-amber-400 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{talent.rating.toFixed(1)}</span>
              <span className="text-slate-300 font-normal mx-1 font-mono">|</span>
              <span className="text-slate-500 font-medium">{talent.completedProjects} Jobs Done</span>
            </div>
          </div>
        </div>

        {/* Stats segment */}
        <div className="grid grid-cols-2 gap-4 py-5 border-b border-slate-50">
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">
              Hourly Rate
            </span>
            <span className="font-display font-black text-xl text-slate-900">
              ${talent.hourlyRate} <span className="text-xs font-medium text-slate-500">/ hr</span>
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">
              Response Time
            </span>
            <span className="font-display font-black text-xl text-slate-900">
              &lt; 2 hours
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="py-5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            Professional Bio
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            {talent.bio}
          </p>
        </div>

        {/* Skills Taglist */}
        <div className="pb-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            Skills Profile
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {talent.skills.map((skill, i) => (
              <span 
                key={i} 
                className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-lg hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Active Messaging Box */}
        <form onSubmit={handleSendMessage} className="space-y-2.5 pt-4 border-t border-slate-100">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
            Inquire or Send a Message
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={msg}
              disabled={sending}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={`Ask ${talent.name.split(" ")[0]} about availability, experience, or quote...`}
              className="w-full px-4 py-3 border border-slate-200 focus:border-indigo-500 outline-none text-slate-800 text-sm rounded-xl transition-all pr-12 bg-slate-50/30"
            />
            <button
              type="submit"
              disabled={sending || !msg.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white transition-all cursor-pointer"
            >
              {sending ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin block" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

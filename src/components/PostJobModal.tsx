import React, { useState } from "react";
import { X, ClipboardList, Briefcase, DollarSign, Tag, MessageSquare } from "lucide-react";
import { Job } from "../types";

interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddJob: (job: Omit<Job, "id" | "postedTime">) => void;
  categories: { id: string; name: string }[];
}

export default function PostJobModal({ isOpen, onClose, onAddJob, categories }: PostJobModalProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("dev");
  const [type, setType] = useState("Contract");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !company.trim() || !budget || !description.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    const budgetNum = parseFloat(budget);
    if (isNaN(budgetNum) || budgetNum <= 0) {
      setError("Please write a valid budget amount.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const computedTags = tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      onAddJob({
        title,
        company,
        budget: budgetNum,
        category,
        type,
        description,
        tags: computedTags.length > 0 ? computedTags : [category === "dev" ? "Web" : "Design"]
      });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]"
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
        <div className="text-left mb-6">
          <div className="w-11 h-11 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3">
            <ClipboardList className="w-5 h-5" />
          </div>
          <h2 className="font-display font-black text-2xl text-slate-900 tracking-tight">
            Post an Opportunity
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Specify budgets and requirements to match instantly
          </p>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-xs sm:text-sm mb-4 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Redesign Landing Page with Figma"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Company / Name *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Studio"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                Budget USD ($) *
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. 1500"
                  className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                />
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Category selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-700 text-sm bg-slate-50/50"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Commitment Type */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Commitment *
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-700 text-sm bg-slate-50/50"
              >
                <option value="Contract">Fixed Freelance Contract</option>
                <option value="Part-time">Part-time Recruits</option>
                <option value="Full-time">Full-time Gigs</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Custom Skills / Tags (comma separated)
            </label>
            <div className="relative">
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Figma, React, UI Design, Strategy"
                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
              />
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Brief Description *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What must be built? List goals, technologies, deliverables..."
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-slate-800 text-sm transition-all bg-slate-50/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 active:scale-[0.98] transition-all text-sm mt-3 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Publish Gigs Immediately"
            )}
          </button>
        </form>

      </div>
    </div>
  );
}

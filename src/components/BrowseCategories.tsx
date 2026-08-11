import { Code, Paintbrush, PenTool, Megaphone, Headphones, PieChart } from "lucide-react";
import { Category } from "../types";
import { motion } from "motion/react";

interface BrowseCategoriesProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

const iconMap: Record<string, any> = {
  Code: Code,
  Paintbrush: Paintbrush,
  PenTool: PenTool,
  Megaphone: Megaphone,
  Headphones: Headphones,
  PieChart: PieChart
};

const bgColors: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  amber: "bg-amber-50 text-amber-500 border-amber-100",
  rose: "bg-rose-50 text-rose-500 border-rose-100",
  sky: "bg-sky-50 text-sky-600 border-sky-100",
  violet: "bg-violet-50 text-violet-600 border-violet-100"
};

export default function BrowseCategories({
  categories,
  selectedCategory,
  onSelectCategory
}: BrowseCategoriesProps) {
  return (
    <section id="browse-categories-section" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[11px] sm:text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50/60 px-3 py-1 rounded-full inline-block">
            Browse Categories
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
            Popular Categories
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Find the right talent in the most in-demand categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.iconName] || Code;
            const isSelected = selectedCategory === cat.id;
            const colorClass = bgColors[cat.themeColor] || "bg-indigo-50 text-indigo-500 border-indigo-100";

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => onSelectCategory(isSelected ? null : cat.id)}
                className={`group cursor-pointer rounded-2xl border bg-white p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 ${
                  isSelected 
                    ? "border-indigo-500 shadow-xl shadow-indigo-600/10 scale-[1.03]" 
                    : "border-slate-100 hover:border-indigo-150 hover:shadow-xl hover:shadow-indigo-600/5 hover:-translate-y-1"
                }`}
              >
                
                {/* Colored Icon Frame */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${colorClass} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6.5 h-6.5 stroke-[2]" />
                </div>

                {/* Name */}
                <h3 className="font-display font-extrabold text-lg text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>

                {/* Sub-label description for interactive richness */}
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {cat.professionalsLabel}
                </p>

                {/* Count Pill */}
                <span className="text-[12px] font-bold text-slate-500 bg-slate-50 group-hover:bg-indigo-50 group-hover:text-indigo-600 px-3.5 py-1.5 rounded-full mt-4 border border-slate-100 group-hover:border-indigo-100 transition-all duration-300">
                  {cat.count}
                </span>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

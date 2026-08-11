export default function TrustedCompanies() {
  const brands = [
    { name: "Google", style: "font-sans tracking-tight font-semibold text-slate-400 text-lg sm:text-xl" },
    { name: "Microsoft", style: "font-sans font-semibold tracking-tighter text-slate-400 text-lg sm:text-xl" },
    { name: "airbnb", style: "font-display font-black tracking-tight text-slate-400 text-xl sm:text-2xl lowercase" },
    { name: "amazon", style: "font-sans italic font-extrabold tracking-tight text-slate-400 text-lg sm:text-xl" },
    { name: "facebook", style: "font-display font-medium tracking-tighter text-slate-400 text-xl sm:text-2xl lowercase" },
    { name: "Spotify", style: "font-display font-black tracking-tight text-slate-400 text-lg sm:text-xl" }
  ];

  return (
    <div className="bg-slate-50/50 py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-widest uppercase mb-7">
          Trusted by Thousands of Companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="opacity-55 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105 cursor-default select-none flex items-center gap-1.5"
            >
              <span className={brand.style}>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

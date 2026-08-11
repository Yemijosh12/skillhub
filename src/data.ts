import { Category, Talent, Job } from "./types";

export const categories: Category[] = [
  {
    id: "dev",
    name: "Development",
    count: "12,540 professionals",
    countNumber: 12540,
    iconName: "Code",
    themeColor: "indigo",
    professionalsLabel: "Web & Mobile Developers, Software Engineers"
  },
  {
    id: "design",
    name: "Design & Creative",
    count: "8,420 professionals",
    countNumber: 8420,
    iconName: "Paintbrush",
    themeColor: "emerald",
    professionalsLabel: "UI/UX Designers, Brand Artists, Illustrators"
  },
  {
    id: "writing",
    name: "Writing & Translation",
    count: "6,230 professionals",
    countNumber: 6230,
    iconName: "PenTool",
    themeColor: "amber",
    professionalsLabel: "Technical Writers, Editors, Translators"
  },
  {
    id: "marketing",
    name: "Marketing",
    count: "5,120 professionals",
    countNumber: 5120,
    iconName: "Megaphone",
    themeColor: "rose",
    professionalsLabel: "SEO Specialists, Social Media Managers, Growth Hackers"
  },
  {
    id: "audio",
    name: "Audio & Music",
    count: "2,980 professionals",
    countNumber: 2980,
    iconName: "Headphones",
    themeColor: "sky",
    professionalsLabel: "Sound Designers, Voiceover Artists, Music Producers"
  },
  {
    id: "business",
    name: "Business",
    count: "4,750 professionals",
    countNumber: 4750,
    iconName: "PieChart",
    themeColor: "violet",
    professionalsLabel: "Business Analysts, Financial Consultants, Recruits"
  }
];

export const talentList: Talent[] = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    title: "Senior UI/UX Designer & Project lead",
    avatar: "/src/assets/images/sarah_avatar_1781881033039.jpg",
    rating: 5.0,
    hourlyRate: 85,
    completedProjects: 142,
    skills: ["Figma", "UI/UX", "Product Strategy", "Framer", "Prototyping"],
    bio: "Passionate designer specializing in digital product design and layout polish. Over 8 years of creating award-winning mobile apps and high-fidelity web experiences.",
    category: "design",
    featured: true
  },
  {
    id: "alex",
    name: "Alex Rivera",
    title: "Full Stack Engineer (React / Node)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 4.9,
    hourlyRate: 95,
    completedProjects: 89,
    skills: ["TypeScript", "Next.js", "Express", "Tailwind CSS", "PostgreSQL"],
    bio: "Ex-Stripe software engineer building production-ready high-availability web services and clean components.",
    category: "dev",
    featured: true
  },
  {
    id: "marcus",
    name: "Marcus Aurelius",
    title: "Technical Writer & Content Strategist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 4.8,
    hourlyRate: 65,
    completedProjects: 54,
    skills: ["Technical Writing", "Developer Portals", "API Documentation", "SEO"],
    bio: "Helping SaaS companies clarify complex architectures and APIs. I draft developer docs, tutorials, and whitepapers.",
    category: "writing",
    featured: false
  },
  {
    id: "elena",
    name: "Elena Rostova",
    title: "SaaS SEO & Growth Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5.0,
    hourlyRate: 75,
    completedProjects: 76,
    skills: ["Google Analytics", "SEM / SEO", "B2B Marketing", "Copywriting"],
    bio: "Drove 300% inorganic traffic growth for major cloud providers. Expert in organic funnel auditing and targeted search campaigns.",
    category: "marketing",
    featured: true
  },
  {
    id: "david",
    name: "David Kim",
    title: "Sound Designer & Audio Producer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    rating: 4.9,
    hourlyRate: 60,
    completedProjects: 43,
    skills: ["Pro Tools", "Audio Editing", "Voiceover Editing", "Sound Synthesis"],
    bio: "Crafting immersive audio narratives, foley soundscapes, and theme jingles for mobile games, podcasts, and corporate adverts.",
    category: "audio",
    featured: false
  },
  {
    id: "sophia",
    name: "Sophia Martinez",
    title: "Financial Modeling & Fractional CFO",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5.0,
    hourlyRate: 120,
    completedProjects: 31,
    skills: ["Financial Analysis", "Stripe Data", "Pitch Decks", "Excel Gurus"],
    bio: "Helping seed and series-A startups build solid cash flow projections, unit economic spreadsheets, and pitch strategies.",
    category: "business",
    featured: true
  }
];

export const initialJobs: Job[] = [
  {
    id: "job1",
    title: "React Web Dashboard Redesign",
    company: "DevStream Inc.",
    budget: 1500,
    type: "Contract",
    description: "We are seeking a senior designer to modernize our developer dashboard layout. Deep understanding of Tailwind, light/dark themes, and micro-interactions is required.",
    tags: ["React", "Tailwind CSS", "UI/UX", "Vite"],
    category: "design",
    postedTime: "2 hours ago"
  },
  {
    id: "job2",
    title: "Build custom Express Proxy API with @google/genai",
    company: "Aether AI",
    budget: 2500,
    type: "Contract",
    description: "Need a durable, secure full-stack backend route in Express to proxy AI requests with absolute standard token security. High quality TypeScript typing expected.",
    tags: ["Express", "Node.js", "Gemini API", "TypeScript"],
    category: "dev",
    postedTime: "1 day ago"
  },
  {
    id: "job3",
    title: "SEO Copywriting for E-commerce Platform",
    company: "CartHub",
    budget: 800,
    type: "Contract",
    description: "Looking for an expert writer to compose 12 search-optimized category landing pages. SEO competitive parsing skills required.",
    tags: ["SEO", "Content Strategy", "Writing"],
    category: "writing",
    postedTime: "3 days ago"
  },
  {
    id: "job4",
    title: "Configure Stripe Billing and Invoice Webhooks",
    company: "BillingLabs",
    budget: 1200,
    type: "Contract",
    description: "Integrate stripe billing webhooks with Express to manage user subscriptions, upgrade tier webhooks, and retry emails.",
    tags: ["Stripe", "Express", "Webhook", "Node.js"],
    category: "dev",
    postedTime: "4 days ago"
  }
];

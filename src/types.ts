export interface Category {
  id: string;
  name: string;
  count: string;
  countNumber: number;
  iconName: string;
  themeColor: string; // Tailwind color name e.g. "indigo", "emerald", "amber"
  professionalsLabel: string;
}

export interface Talent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  hourlyRate: number;
  completedProjects: number;
  skills: string[];
  bio: string;
  category: string;
  featured?: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  budget: number;
  type: string; // e.g. "Full-time", "Contract"
  description: string;
  tags: string[];
  category: string;
  postedTime: string;
}

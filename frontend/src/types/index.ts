export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'AI & Digital Solutions' | 'Construction & AI Solutions' | 'Physical' | 'Digital' | 'Design';
  features: string[];
  image?: string;
  gallery?: string[];
  benefits?: string[];
  deliverables?: string[];
  process?: { step: string; title: string; desc: string }[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string;
  projectUrl?: string;
  client: string;
  completedDate: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Process';
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  status?: 'DRAFT' | 'PUBLISHED';
  createdAt: string;
}

export interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements?: string;
  benefits?: string;
  active: boolean;
}

export interface JobApplication {
  id?: number;
  candidateName: string;
  candidateEmail: string;
  candidatePhone?: string;
  resumeUrl?: string;
  coverLetter?: string;
  jobPosting?: JobPosting;
  createdAt?: string;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  read?: boolean;
  createdAt?: string;
}

export interface Booking {
  id?: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: string;
  notes?: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  createdAt?: string;
}

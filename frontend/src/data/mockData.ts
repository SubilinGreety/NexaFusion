import { ServiceItem, PortfolioItem, TestimonialItem, TeamMember, FAQItem, BlogPost } from '@/types';

export const COMPANY_INFO = {
  name: "NexaFusion",
  tagline: "Building Intelligent Futures",
  description: "NexaFusion is a dynamic multi-service startup combining high-precision physical infrastructure (Construction, Waterproofing, Interior & Exterior Design) with cutting-edge digital agency solutions (Web & App Development, UI/UX, Content Creation, Branding, Digital Marketing).",
  experience: "1 Month of Industry Experience",
  stats: {
    experienceMonths: 1,
    completedProjects: 6,
    happyClients: 6,
    constructionProjects: 2,
    waterproofingProjects: 2,
    contentProjects: 2,
  },
  contact: {
    phone: "+91 8825657848",
    additionalPhone: "+91 7904711030",
    whatsapp: "918825657848",
    email: "nexafusion.grp@gmail.com",
    address: "53, Sivan Koil St, Ganga Nagar, Kodambakkam, Chennai, Tamil Nadu 600024, India",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6277983637174!2d80.2215!3d13.0521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f8d0705a1d%3A0x6b09cfd54e4c2747!2sKodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600024!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    socials: {
      linkedin: "https://linkedin.com/company/nexafusion",
      twitter: "https://twitter.com/nexafusion",
      instagram: "https://instagram.com/nexafusion",
      github: "https://github.com/nexafusion",
    }
  }
};

export const SERVICES: ServiceItem[] = [
  // ── Domain 1: AI & Digital Solutions ──
  {
    id: "website-development",
    title: "Website Development",
    slug: "website-development",
    shortDesc: "High-performance Next.js & React web applications optimized for speed, SEO, and conversions.",
    fullDesc: "We engineer lightning-fast, responsive web applications using React, Next.js, and modern CSS. Built with accessibility, security, and search engine visibility at the core.",
    iconName: "Code",
    category: "AI & Digital Solutions",
    features: [
      "Next.js App Router & React Architecture",
      "Custom E-Commerce & Web Platforms",
      "Static Site Generation & Server-Side Rendering",
      "SEO Optimization & Core Web Vitals Audit"
    ]
  },
  {
    id: "mobile-app-development",
    title: "App Development",
    slug: "mobile-app-development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android built with React Native & Flutter.",
    fullDesc: "Deliver frictionless mobile experiences. We craft cross-platform iOS & Android mobile applications featuring real-time synchronization, push notifications, and offline caching.",
    iconName: "Smartphone",
    category: "AI & Digital Solutions",
    features: [
      "Cross-Platform iOS & Android Development",
      "React Native & Flutter Mobile Apps",
      "REST & GraphQL API Synchronization",
      "App Store & Google Play Publishing"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDesc: "Data-driven SEO, Google Ads, meta campaign management, and conversion funnel optimization.",
    fullDesc: "Amplify your reach and generate verified business leads. We execute targeted PPC campaigns, localized SEO strategies, social media marketing, and conversion rate optimization.",
    iconName: "TrendingUp",
    category: "AI & Digital Solutions",
    features: [
      "Search Engine Optimization (SEO & Local Pack)",
      "Pay-Per-Click (Google Ads & Meta Ads)",
      "Social Media Campaign Management",
      "Conversion Rate Optimization & Analytics"
    ]
  },
  {
    id: "branding",
    title: "Branding",
    slug: "branding",
    shortDesc: "Comprehensive brand identity packages including visual guidelines, typography, and brand messaging.",
    fullDesc: "Establish a distinct brand identity that commands attention. We craft brand positioning, color palettes, visual guidelines, stationary, and brand story books for modern businesses.",
    iconName: "Sparkles",
    category: "AI & Digital Solutions",
    features: [
      "Brand Strategy & Market Positioning",
      "Visual Style Guides & Color Palettes",
      "Corporate Stationery & Packaging Design",
      "Brand Storytelling & Voice Guidelines"
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    slug: "content-creation",
    shortDesc: "Professional video production, high-impact social reels, blog articles, and copywriting.",
    fullDesc: "Engage your target audience with compelling stories. We produce cinematic product videos, high-performing Instagram reels, corporate photography, and SEO-optimized blog copy.",
    iconName: "Video",
    category: "AI & Digital Solutions",
    features: [
      "Cinematic Video Production & Editing",
      "Social Reels & Short-Form Content Creation",
      "Corporate Photography & Visual Assets",
      "SEO Copywriting & Blog Strategy"
    ]
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    slug: "ai-automations",
    shortDesc: "Custom AI agents, intelligent workflow automation, chatbots, and enterprise process optimization.",
    fullDesc: "Leverage cutting-edge artificial intelligence to automate repetitive business processes, deploy autonomous AI agents, integrate LLM workflows, and optimize customer interactions.",
    iconName: "Bot",
    category: "AI & Digital Solutions",
    features: [
      "Custom AI Chatbots & Customer Assistants",
      "Business Process & Workflow Automation",
      "LLM Integration & Fine-Tuned AI Models",
      "Automated Data Extraction & Analytics"
    ]
  },

  // ── Domain 2: Construction & AI Solutions ──
  {
    id: "construction",
    title: "Construction",
    slug: "construction",
    shortDesc: "Turnkey residential & commercial building construction with RCC structural excellence and modern finishing.",
    fullDesc: "From structural foundations to turnkey residential villas and commercial units, NexaFusion delivers high-durability RCC framing, safety-tested concrete pouring, and architectural precision for physical infrastructure.",
    iconName: "HardHat",
    category: "Construction & AI Solutions",
    features: [
      "Residential Villa & Multi-Storey Construction",
      "RCC Framed Structures & Foundation Engineering",
      "Turnkey Project Management & On-Site Quality Audits",
      "Eco-Friendly Drainage & Structural Framing"
    ]
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    slug: "waterproofing",
    shortDesc: "Advanced terrace, basement, and bathroom membrane waterproofing solutions to eliminate leaks.",
    fullDesc: "Protect your buildings against moisture, seepage, and structural deterioration. We apply crystalline coatings, elastomeric polyurethane terrace membranes, and negative-side basement treatments.",
    iconName: "Droplets",
    category: "Construction & AI Solutions",
    features: [
      "Polyurethane Terrace & Roof Waterproofing",
      "Negative-Side Basement Leak Remediation",
      "Bathroom & Sunken Slab Moisture Barrier",
      "Epoxy Pressure Injection & Structural Crack Sealing"
    ]
  },
  {
    id: "interior-design",
    title: "Interior Design",
    slug: "interior-design",
    shortDesc: "Bespoke residential & office interior space planning, modular furniture, and custom lighting.",
    fullDesc: "Transform raw interiors into functional, aesthetic sanctuaries. We craft modular kitchens, custom acoustic wall paneling, ergonomic office workspaces, and mood-setting LED lighting systems.",
    iconName: "Palette",
    category: "Construction & AI Solutions",
    features: [
      "3D Spatial Planning & Photorealistic Rendering",
      "Modular Kitchens & Storage Solutions",
      "Corporate Office Workspace Interiors",
      "Custom Ceiling & Mood Lighting Design"
    ]
  },
  {
    id: "exterior-design",
    title: "Exterior Design",
    slug: "exterior-design",
    shortDesc: "Modern building facade elevation, landscaping, and exterior architectural cladding.",
    fullDesc: "Elevate your building's curb appeal with weather-resistant ACP cladding, vertical gardens, glass curtain walls, and contemporary exterior lighting design.",
    iconName: "Building2",
    category: "Construction & AI Solutions",
    features: [
      "Architectural Elevation & 3D Façade Modeling",
      "ACP & HPL Cladding Installations",
      "Landscape & Outdoor Terrace Layouts",
      "Glass Curtain Walls & Weatherproof Lighting"
    ]
  },
  {
    id: "smart-home-installation",
    title: "Smart Home Installation",
    slug: "smart-home-installation",
    shortDesc: "AI-driven home automation, smart IoT lighting, climate control, and integrated security systems.",
    fullDesc: "Transform residences and commercial spaces into intelligent environments. We integrate central smart automation hubs, voice-controlled lighting, smart locks, climate sensors, and AI security.",
    iconName: "Cpu",
    category: "Construction & AI Solutions",
    features: [
      "AI-Powered Smart Automation Hubs",
      "Intelligent Lighting & Climate Control",
      "Biometric & Smart Security Integration",
      "Energy Efficiency & Automated Monitoring"
    ]
  }
];

export const COMPLETED_PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    title: "Greenfield Villa Complex",
    description: "End-to-end turnkey construction of a 4-unit residential villa complex featuring reinforced concrete frames, modern façade finishes, and eco-friendly drainage systems.",
    category: "Construction",
    technologies: "RCC Framework, Eco Drainage, Modern Façade, Electrical & Plumbing",
    projectUrl: "#",
    client: "BuildCraft Solutions",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "CommercePlex Office Structure",
    description: "Ground-up structural construction of a 3-storey commercial office building with structural steel framework, fire-rated masonry walls, and HVAC integration.",
    category: "Construction",
    technologies: "Steel Framework, Fire-rated Walls, Energy Glazing, HVAC Integration",
    projectUrl: "#",
    client: "SwiftBuild Infra",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Horizon Terrace Waterproofing",
    description: "High-performance polyurethane membrane waterproofing system across 2,800 sqft of terrace and parapet walls for a premier residential apartment block.",
    category: "Waterproofing",
    technologies: "Polyurethane Membrane, Parapet Sealing, Crack Filling, UV Coating",
    projectUrl: "#",
    client: "AquaShield Realty",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Industrial Unit Basement Moisture Barrier",
    description: "Comprehensive negative-side waterproofing for an industrial basement covering foundation walls and floor slabs using crystalline coating technology.",
    category: "Waterproofing",
    technologies: "Crystalline Coating, Negative Waterproofing, Foundation Sealing, Epoxy Injection",
    projectUrl: "#",
    client: "TerraForm Homes",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "BrandPulse Launch Video & Content Campaign",
    description: "Created a full suite of branded content — product videos, reels, static creatives, and blog articles — for a consumer lifestyle brand's 30-day social media launch.",
    category: "Content Creation",
    technologies: "Video Production, Instagram Reels, Photography, Copywriting, SEO Blogs",
    projectUrl: "#",
    client: "PixelNova Agency",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "SwiftFood Promo Series & Photography",
    description: "Produced a 5-part promotional video series and professional photography for a local food delivery startup, showcasing menu highlights and behind-the-scenes culture.",
    category: "Content Creation",
    technologies: "Video Editing, Food Photography, Motion Graphics, Social Assets",
    projectUrl: "#",
    client: "VisualPeak Studios",
    completedDate: "Jul 2026",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Project Manager",
    company: "BuildCraft Solutions",
    content: "NexaFusion completed our 4-unit residential villa construction on schedule. Their RCC framework and structural execution were top notch. Outstanding dedication for a 1-month-old startup!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Construction"
  },
  {
    id: 2,
    name: "Priya Sundaram",
    role: "Estate Manager",
    company: "AquaShield Realty",
    content: "We had persistent terrace seepage issues in our residential block. NexaFusion applied their polyurethane membrane system flawlessly. Zero leaks after heavy rain tests!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Waterproofing"
  },
  {
    id: 3,
    name: "Rajesh Kannan",
    role: "Founder & CEO",
    company: "PixelNova Agency",
    content: "The content creation team at NexaFusion produced stunning product videos and reels for our product launch. Professional editing, fast turnarounds, and creative direction.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Content Creation"
  },
  {
    id: 4,
    name: "Kavitha Ramesh",
    role: "Operations Lead",
    company: "SwiftBuild Infra",
    content: "Executing commercial office structural builds requires precision. NexaFusion delivered exceptional steel framework quality with zero compromise on safety.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Construction"
  },
  {
    id: 5,
    name: "Deepak Verma",
    role: "Facility Director",
    company: "TerraForm Industrial",
    content: "Their basement crystalline coating completely solved our ground moisture intrusion. NexaFusion's waterproofing specialists know their materials thoroughly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Waterproofing"
  },
  {
    id: 6,
    name: "Siddharth Menon",
    role: "Marketing Head",
    company: "VisualPeak Studios",
    content: "From motion graphics to food photography, NexaFusion's content creation team exceeded our expectations. Highly recommended for any brand looking to level up their visuals.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Content Creation"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Viknesh VR",
    role: "Co-Founder & Head of Physical Infrastructure",
    bio: "Civil engineering visionary specializing in RCC construction management, structural audits, and site execution.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    skills: ["Civil Engineering", "RCC Structures", "Waterproofing", "Site Management"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    id: 2,
    name: "Hari Prasath",
    role: "Co-Founder & Head of Digital & Creative Services",
    bio: "Digital strategist leading full-stack web development, brand identity design, and digital marketing initiatives.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    skills: ["Full-Stack Dev", "UI/UX Architecture", "Content Creation", "Digital Marketing"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    id: 3,
    name: "Tamil",
    role: "Lead Project Coordinator",
    bio: "Expert project manager overseeing client relations, vendor management, and cross-functional quality assurance.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    skills: ["Project Management", "Vendor Coordination", "QA Auditing", "Client Success"],
    linkedin: "https://linkedin.com"
  },
  {
    id: 4,
    name: "Nexa Engineering Team",
    role: "Freshers & On-Site Specialists (4 Members)",
    bio: "Energetic team of junior engineers and digital creators dedicated to rapid execution and high standards across all projects.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    skills: ["AutoCAD", "React/Next.js", "Video Production", "Façade Rendering"]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What range of services does NexaFusion offer?",
    answer: "NexaFusion operates dual verticals: Physical Infrastructure (Construction, Waterproofing, Interior Design, Exterior Design) and Digital Agency Solutions (Website Development, Mobile App Development, UI/UX Design, Digital Marketing, Branding, Content Creation).",
    category: "Services"
  },
  {
    id: 2,
    question: "How can a 1-month-old startup deliver complex construction & digital projects?",
    answer: "While NexaFusion as an entity launched 1 month ago, our co-founders Viknesh VR, Hari Prasath, and Tamil bring deep individual experience in civil engineering and digital systems. We have already successfully completed 6 projects across construction, waterproofing, and content creation.",
    category: "General"
  },
  {
    id: 3,
    question: "What waterproofing technology do you use for roofs and basements?",
    answer: "We utilize liquid-applied elastomeric polyurethane membranes for exposed terraces and crystalline capillary waterproofing with high-pressure epoxy injection for underground basements.",
    category: "Services"
  },
  {
    id: 4,
    question: "How do you handle website and mobile app projects?",
    answer: "We use modern technology stacks including React, Next.js, React Native, and Tailwind CSS to build fast, SEO-optimized, highly responsive web and mobile applications with custom UI/UX design.",
    category: "Services"
  },
  {
    id: 5,
    question: "How do I request a quote or project timeline estimate?",
    answer: "You can reach us directly via our Contact Page, call us at +91 98765 43210, or send a direct message on WhatsApp (+91 9876543210). We respond with an initial project estimate within 24 hours.",
    category: "Process"
  },
  {
    id: 6,
    question: "Do you offer turnkey project management for civil construction?",
    answer: "Yes! We manage everything from site soil testing, structural planning, AutoCAD drafting, material procurement, concrete pouring, through to final interior/exterior finishing.",
    category: "Services"
  }
];

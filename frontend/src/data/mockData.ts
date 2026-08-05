import { ServiceItem, PortfolioItem, TestimonialItem, FAQItem, BlogPost } from '@/types';

export const COMPANY_INFO = {
  name: "NexaFusion Groups",
  tagline: "Building Intelligent Futures",
  description: "NexaFusion is a dynamic multi-service startup combining high-precision physical infrastructure (Construction, Waterproofing, Interior & Exterior Design) with cutting-edge digital agency solutions (Web & App Development, UI/UX, Content Creation, Branding, Digital Marketing).",
  experience: "1 Year of Industry Experience",
  stats: {
    experienceMonths: 12,
    completedProjects: 50,
    happyClients: 50,
    constructionProjects: 15,
    waterproofingProjects: 15,
    contentProjects: 20,
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
    fullDesc: "We engineer lightning-fast, responsive web applications using React, Next.js, and modern CSS. Built with accessibility, security, and search engine visibility at the core, our custom web platforms convert visitors into loyal clients.",
    iconName: "Code",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Next.js App Router & React Architecture",
      "Custom E-Commerce & Web Platforms",
      "Static Site Generation & Server-Side Rendering",
      "SEO Optimization & Core Web Vitals Audit"
    ],
    benefits: [
      "99+ Lighthouse speed score performance",
      "Responsive design tailored for desktop & mobile",
      "Enterprise-grade security and SSL integration",
      "Seamless API and analytics integration"
    ],
    deliverables: [
      "Production-ready Web Source Code",
      "Custom Admin CMS Dashboard",
      "SEO Meta Tag & Analytics Setup",
      "1-Month Post-Launch Free Bug-Fix Support"
    ],
    process: [
      { step: "01", title: "Discovery & Wireframing", desc: "Understanding client goals, target audience, user flow, and architecture layout." },
      { step: "02", title: "UI/UX Design", desc: "Crafting interactive prototypes with sleek typography, smooth animations, and accessibility." },
      { step: "03", title: "Frontend & Backend Dev", desc: "Developing clean, performant React/Next.js components and integrating API backends." },
      { step: "04", title: "Testing & Deployment", desc: "Rigorous cross-browser testing, SEO audit, and deployment to high-speed Vercel/AWS servers." }
    ]
  },
  {
    id: "mobile-app-development",
    title: "App Development",
    slug: "mobile-app-development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android built with React Native & Flutter.",
    fullDesc: "Deliver frictionless mobile experiences. We craft cross-platform iOS & Android mobile applications featuring real-time synchronization, push notifications, offline caching, and high-FPS UI rendering.",
    iconName: "Smartphone",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Cross-Platform iOS & Android Development",
      "React Native & Flutter Mobile Apps",
      "REST & GraphQL API Synchronization",
      "App Store & Google Play Publishing"
    ],
    benefits: [
      "Single codebase for simultaneous iOS & Android deployment",
      "Sub-second offline data syncing and push notifications",
      "Biometric security and encrypted local storage",
      "Seamless integration with cloud databases"
    ],
    deliverables: [
      "iOS App Store (.ipa) & Google Play (.apk) Builds",
      "Complete Source Code Repository",
      "Push Notification & Backend API Setup",
      "App Store Listing & Guidelines Approval"
    ],
    process: [
      { step: "01", title: "App Architecture & Flow", desc: "Mapping user navigation, offline storage strategy, and API endpoints." },
      { step: "02", title: "Mobile UI Design", desc: "Building thumb-friendly interfaces with dark/light themes and native feel." },
      { step: "03", title: "App Development", desc: "Coding in React Native / Flutter with state management and API bindings." },
      { step: "04", title: "Store Submission", desc: "Submitting binary builds to Apple App Store and Google Play Store for approval." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDesc: "Data-driven SEO, Google Ads, meta campaign management, and conversion funnel optimization.",
    fullDesc: "Amplify your reach and generate verified business leads. We execute targeted PPC campaigns, localized SEO strategies, social media marketing, and conversion rate optimization to maximize return on ad spend (ROAS).",
    iconName: "TrendingUp",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Search Engine Optimization (SEO & Local Pack)",
      "Pay-Per-Click (Google Ads & Meta Ads)",
      "Social Media Campaign Management",
      "Conversion Rate Optimization & Analytics"
    ],
    benefits: [
      "Targeted lead acquisition with high buyer intent",
      "Transparent weekly performance dashboards",
      "A/B split testing for ad creatives & landing pages",
      "Higher local search visibility on Google Maps"
    ],
    deliverables: [
      "Google & Meta Ad Campaign Setup",
      "SEO Keyword Strategy & Technical Audit",
      "High-Converting Ad Copy & Visual Creatives",
      "Monthly Growth Analytics & ROI Reports"
    ],
    process: [
      { step: "01", title: "Audit & Audience Research", desc: "Analyzing competitors, target demographics, and search intent keywords." },
      { step: "02", title: "Campaign Strategy", desc: "Structuring search ads, social retargeting, and lead capture funnels." },
      { step: "03", title: "Ad Execution", desc: "Designing ad creatives, writing copy, and launching targeted campaigns." },
      { step: "04", title: "Optimization", desc: "Refining negative keywords, adjusting bid strategies, and scaling winning ads." }
    ]
  },
  {
    id: "branding",
    title: "Branding",
    slug: "branding",
    shortDesc: "Comprehensive brand identity packages including visual guidelines, typography, and brand messaging.",
    fullDesc: "Establish a distinct brand identity that commands attention. We craft brand positioning, color palettes, logo designs, typography, stationery, and brand story books for modern businesses.",
    iconName: "Sparkles",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542744094-3a31727202b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Brand Strategy & Market Positioning",
      "Visual Style Guides & Color Palettes",
      "Corporate Stationery & Packaging Design",
      "Brand Storytelling & Voice Guidelines"
    ],
    benefits: [
      "Cohesive brand image across print and digital media",
      "Memorable logo assets in vector formats (SVG, EPS)",
      "Clear brand voice and messaging framework",
      "Higher brand recognition and customer trust"
    ],
    deliverables: [
      "Master Logo Suite (Primary, Secondary, Monogram)",
      "Comprehensive Brand Style Guideline PDF",
      "Business Cards & Letterhead Templates",
      "Social Media Kit (Profile & Banner Templates)"
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "Uncovering company values, mission, target market, and visual preferences." },
      { step: "02", title: "Concept Exploration", desc: "Designing multiple logo concepts, typography pairings, and color palettes." },
      { step: "03", title: "Refinement", desc: "Polishing selected design direction based on client feedback." },
      { step: "04", title: "Brand Delivery", desc: "Packaging all vector files, brand guidelines, and print templates." }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    slug: "content-creation",
    shortDesc: "Professional video production, high-impact social reels, blog articles, and copywriting.",
    fullDesc: "Engage your target audience with compelling visual stories. We produce cinematic product videos, high-performing Instagram reels, corporate photography, and SEO-optimized blog copy.",
    iconName: "Video",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Cinematic Video Production & Editing",
      "Social Reels & Short-Form Content Creation",
      "Corporate Photography & Visual Assets",
      "SEO Copywriting & Blog Strategy"
    ],
    benefits: [
      "High-engagement video content built for viral reach",
      "Studio-grade lighting and 4K camera gear",
      "Consistent content pipeline for monthly social growth",
      "SEO-driven copy that ranks on search engines"
    ],
    deliverables: [
      "Edited 4K Promo Videos & Vertical Reels",
      "High-Res Corporate & Product Photos",
      "SEO Blog Articles & Website Copy",
      "Social Media Content Calendar"
    ],
    process: [
      { step: "01", title: "Scripting & Storyboarding", desc: "Planning video concepts, hook scripts, and visual shot lists." },
      { step: "02", title: "On-Site Shoot", desc: "Filming with professional cinema cameras, drones, audio gear, and studio lighting." },
      { step: "03", title: "Post-Production", desc: "Color grading, motion graphics editing, sound design, and captioning." },
      { step: "04", title: "Content Delivery", desc: "Exporting optimized video formats ready for Instagram, YouTube, and website embed." }
    ]
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    slug: "ai-automations",
    shortDesc: "Custom AI agents, intelligent workflow automation, chatbots, and enterprise process optimization.",
    fullDesc: "Leverage cutting-edge artificial intelligence to automate repetitive business processes, deploy autonomous AI agents, integrate LLM workflows, and optimize customer interactions with round-the-clock efficiency.",
    iconName: "Bot",
    category: "AI & Digital Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Custom AI Chatbots & Customer Assistants",
      "Business Process & Workflow Automation",
      "LLM Integration & Fine-Tuned AI Models",
      "Automated Data Extraction & Analytics"
    ],
    benefits: [
      "24/7 instant customer support with custom trained AI",
      "Reduced manual operational overhead by up to 80%",
      "Seamless API connection with WhatsApp, CRM, and email",
      "Intelligent data parsing and lead qualification"
    ],
    deliverables: [
      "Custom Trained AI Agent / Chatbot",
      "Automated Zapier / Make / Python Workflows",
      "WhatsApp & Web Chat Widget Embed",
      "Admin Analytics Dashboard & Fine-Tuning"
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "Mapping manual tasks, customer inquiry bottlenecks, and data flows." },
      { step: "02", title: "AI Model Fine-Tuning", desc: "Training AI agents on company documentation, FAQs, and product catalogs." },
      { step: "03", title: "Integration", desc: "Connecting AI agents into WhatsApp, website chat widgets, CRMs, and email." },
      { step: "04", title: "Deployment & Monitoring", desc: "Launching automated workflows with safety guardrails and continuous accuracy tuning." }
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
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Residential Villa & Multi-Storey Construction",
      "RCC Framed Structures & Foundation Engineering",
      "Turnkey Project Management & On-Site Quality Audits",
      "Eco-Friendly Drainage & Structural Framing"
    ],
    benefits: [
      "On-time delivery with zero compromise on concrete grade",
      "Complete transparency with milestone progress tracking",
      "Safety-certified structural engineers and site supervisors",
      "Comprehensive structural warranty"
    ],
    deliverables: [
      "Approved Architectural & Structural 2D/3D Drawings",
      "Turnkey RCC Structure & Masonry Construction",
      "Electrical, Plumbing & Drainage Infrastructure",
      "Structural Safety & Occupancy Quality Certificate"
    ],
    process: [
      { step: "01", title: "Soil Testing & Planning", desc: "Conducting soil load testing, architectural blueprinting, and government approvals." },
      { step: "02", title: "Foundation & Framing", desc: "Excavation, footings, RCC column casting, and structural beam reinforcement." },
      { step: "03", title: "Masonry & Utilities", desc: "Bricklaying, MEP (Mechanical, Electrical, Plumbing) conduit installation, and plastering." },
      { step: "04", title: "Finishing & Handover", desc: "Flooring, painting, fixture installation, site cleanup, and key handover." }
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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Polyurethane Terrace & Roof Waterproofing",
      "Negative-Side Basement Leak Remediation",
      "Bathroom & Sunken Slab Moisture Barrier",
      "Epoxy Pressure Injection & Structural Crack Sealing"
    ],
    benefits: [
      "Eliminates active water leakage and damp wall stains",
      "UV-resistant elastomeric coatings that expand with temperature",
      "Extends building structural lifespan significantly",
      "Multi-year written waterproofing performance warranty"
    ],
    deliverables: [
      "Comprehensive Thermal & Seepage Site Inspection",
      "Polyurethane / Crystalline Waterproofing Application",
      "Post-Application Ponding Leak Test Certificate",
      "Written Warranty Coverage Documentation"
    ],
    process: [
      { step: "01", title: "Moisture & Leak Inspection", desc: "Identifying seepage root causes using thermal cameras and moisture meters." },
      { step: "02", title: "Surface Preparation", desc: "High-pressure jet washing, crack v-grooving, and priming substrate." },
      { step: "03", title: "Membrane Application", desc: "Applying multi-coat elastomeric PU membrane or crystalline barrier." },
      { step: "04", title: "Water Ponding Test", desc: "Filling terrace/sunken areas with water for 48 hours to certify zero leaks." }
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
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "3D Spatial Planning & Photorealistic Rendering",
      "Modular Kitchens & Storage Solutions",
      "Corporate Office Workspace Interiors",
      "Custom Ceiling & Mood Lighting Design"
    ],
    benefits: [
      "Photorealistic 3D visualization before site execution begins",
      "Custom space-saving modular woodwork and storage",
      "Ergonomic workspace designs for maximum productivity",
      "High-grade termite-resistant and moisture-proof materials"
    ],
    deliverables: [
      "3D Renderings & Floor Layout Plans",
      "Factory-Made Modular Kitchen & Wardrobe Units",
      "Custom False Ceiling & LED Mood Lighting",
      "Material Specification & Finish Warranty"
    ],
    process: [
      { step: "01", title: "Space Audit & Client Brief", desc: "Understanding lifestyle, theme preferences, budget, and measurements." },
      { step: "02", title: "3D Visualization", desc: "Generating photorealistic 3D renders of living rooms, bedrooms, and offices." },
      { step: "03", title: "Factory Production", desc: "Precision CNC cutting of modular cabinetry and acoustic wall paneling." },
      { step: "04", title: "On-Site Installation", desc: "Fitting woodwork, ceiling lights, wallpaper, and final styling." }
    ]
  },
  {
    id: "exterior-design",
    title: "Exterior Design",
    slug: "exterior-design",
    shortDesc: "Modern building facade elevation, landscaping, and exterior architectural cladding.",
    fullDesc: "Elevate your building's curb appeal with weather-resistant ACP cladding, vertical gardens, glass curtain walls, and contemporary exterior lighting design that withstands harsh weather.",
    iconName: "Building2",
    category: "Construction & AI Solutions",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Architectural Elevation & 3D Façade Modeling",
      "ACP & HPL Cladding Installations",
      "Landscape & Outdoor Terrace Layouts",
      "Glass Curtain Walls & Weatherproof Lighting"
    ],
    benefits: [
      "Dramatically increases commercial or residential property value",
      "Weatherproof ACP & HPL panels with heat insulation",
      "Energy-efficient glass facades and LED exterior lighting",
      "Stunning 3D elevation renderings prior to execution"
    ],
    deliverables: [
      "3D Exterior Façade Design Renderings",
      "ACP / HPL Cladding & Structural Frame Installation",
      "Architectural Glass & Weatherproof Lighting",
      "Landscape & Compound Wall Finishing"
    ],
    process: [
      { step: "01", title: "Elevation Surveying", desc: "Scanning building structure and studying sun path & weather exposure." },
      { step: "02", title: "3D Facade Modeling", desc: "Creating modern exterior concepts with material textures and lighting." },
      { step: "03", title: "Scaffolding & Frame Setup", desc: "Erecting heavy-duty aluminum framing for ACP/HPL cladding." },
      { step: "04", title: "Panel Fitting & Lighting", desc: "Mounting panels, sealants, glass curtain walls, and outdoor lighting fixtures." }
    ]
  },
  {
    id: "smart-home-installation",
    title: "Smart Home Installation",
    slug: "smart-home-installation",
    shortDesc: "AI-driven home automation, smart IoT lighting, climate control, and integrated security systems.",
    fullDesc: "Transform residences and commercial spaces into intelligent environments. We integrate central smart automation hubs, voice-controlled lighting, smart locks, climate sensors, and AI surveillance.",
    iconName: "Cpu",
    category: "Construction & AI Solutions",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "AI-Powered Smart Automation Hubs",
      "Intelligent Lighting & Climate Control",
      "Biometric & Smart Security Integration",
      "Energy Efficiency & Automated Monitoring"
    ],
    benefits: [
      "Control lighting, AC, & security from your smartphone or voice",
      "Up to 30% reduction in electricity bills via smart climate scheduling",
      "Real-time mobile intrusion alerts & biometric door access",
      "Seamless integration with Alexa, Google Home, & Apple HomeKit"
    ],
    deliverables: [
      "Centralized Smart Automation Controller",
      "Smart Switches, Dimmers & RGB Strip Lights",
      "Biometric Smart Door Lock & Video Doorbell",
      "Mobile App Setup & Voice Assistant Configuration"
    ],
    process: [
      { step: "01", title: "Smart Home Audit", desc: "Evaluating wiring, neutral line access, Wi-Fi coverage, and device needs." },
      { step: "02", title: "System Configuration", desc: "Programming central hubs, touch panels, scenes, and automation rules." },
      { step: "03", title: "Hardware Installation", desc: "Replacing traditional switches with touch smart switches, locks, and sensors." },
      { step: "04", title: "App Sync & Demonstration", desc: "Pairing smartphones, configuring voice control, and client walkthrough." }
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
    content: "NexaFusion completed our 4-unit residential villa construction on schedule. Their RCC framework and structural execution were top notch. Outstanding dedication for a 1-year-old company!",
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


export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What range of services does NexaFusion offer?",
    answer: "NexaFusion operates dual verticals: Physical Infrastructure (Construction, Waterproofing, Interior Design, Exterior Design) and Digital Agency Solutions (Website Development, Mobile App Development, UI/UX Design, Digital Marketing, Branding, Content Creation).",
    category: "Services"
  },
  {
    id: 2,
    question: "How can a 1-year-old company deliver complex construction & digital projects?",
    answer: "While NexaFusion as an entity launched 1 year ago, our co-founders Vickey, Hari Prasath, and Bharath bring deep individual experience in civil engineering, AI, and digital systems. We have already successfully completed 50+ projects across construction, waterproofing, web development, and content creation.",
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

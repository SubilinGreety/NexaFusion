import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Megaphone,
  Sparkles,
  Video,
  Bot,
  HardHat,
  Droplets,
  LayoutDashboard,
  Home,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// ── Domain 1: AI & Digital Solutions (6 Services) ──
const aiDigitalServices = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance Next.js & React web applications optimized for speed, SEO, and conversions.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
    href: "/services/website-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform iOS & Android mobile apps engineered with React Native and Flutter.",
    color: "text-sky-600 bg-sky-50 border-sky-200",
    href: "/services/mobile-app-development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven SEO, Google Ads, Meta campaign management, and sales funnel growth strategies.",
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    href: "/services/digital-marketing",
  },
  {
    icon: Sparkles,
    title: "Branding",
    desc: "Comprehensive brand identity packages — visual guidelines, logos, typography, and messaging.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    href: "/services/branding",
  },
  {
    icon: Video,
    title: "Content Creation",
    desc: "Cinematic product video production, social reels, photography, and high-converting copywriting.",
    color: "text-purple-600 bg-purple-50 border-purple-200",
    href: "/services/content-creation",
  },
  {
    icon: Bot,
    title: "AI Automations",
    desc: "Custom AI agents, intelligent workflow automation, chatbots, and enterprise process optimization.",
    color: "text-violet-600 bg-violet-50 border-violet-200",
    href: "/services/ai-automations",
  },
];

// ── Domain 2: Construction & AI Solutions (5 Services) ──
const constructionAiServices = [
  {
    icon: HardHat,
    title: "Construction",
    desc: "Turnkey civil & structural building construction — residential, commercial, & RCC framing.",
    color: "text-amber-600 bg-amber-50 border-amber-200",
    href: "/services/construction",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    desc: "Advanced polyurethane terrace membranes & basement crystalline leak-proofing treatments.",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    href: "/services/waterproofing",
  },
  {
    icon: LayoutDashboard,
    title: "Interior Design",
    desc: "Bespoke residential & office space planning, modular furniture, and custom acoustic interiors.",
    color: "text-rose-600 bg-rose-50 border-rose-200",
    href: "/services/interior-design",
  },
  {
    icon: Home,
    title: "Exterior Design",
    desc: "Modern facade elevation, weather-resistant ACP cladding, vertical gardens, & landscaping.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    href: "/services/exterior-design",
  },
  {
    icon: Cpu,
    title: "Smart Home Installation",
    desc: "AI-driven home automation hubs, IoT smart lighting, climate controls, & integrated security.",
    color: "text-teal-600 bg-teal-50 border-teal-200",
    href: "/services/smart-home-installation",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle multi-color top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-500" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Dual Vertical Platform</span>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Services Across{" "}
            <span className="text-gradient">Two Core Domains</span>
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-base sm:text-lg">
            NexaFusion Groups bridges digital innovation with physical infrastructure — delivering 11 specialized services organized into two distinct domain columns.
          </p>
        </div>

        {/* ── Two Domain Columns Side-by-Side ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          {/* COLUMN 1: AI & DIGITAL SOLUTIONS */}
          <div className="flex flex-col gap-6 bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100/90 shadow-md relative group/col">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-6 border-b border-blue-200/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                    Domain 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    AI & Digital Solutions
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-blue-600 text-white rounded-full shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 6 Services
              </span>
            </div>

            {/* Service Cards Stacked in Column 1 */}
            <div className="flex flex-col gap-4 mt-2">
              {aiDigitalServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="glass-card p-5 rounded-2xl group flex items-center justify-between gap-4 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${svc.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                          {svc.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: CONSTRUCTION & AI SOLUTIONS */}
          <div className="flex flex-col gap-6 bg-gradient-to-b from-emerald-50/70 via-slate-50/40 to-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-100/90 shadow-md relative group/col">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-6 border-b border-emerald-200/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 shrink-0">
                  <HardHat className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    Domain 02
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Construction & AI Solutions
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-emerald-600 text-white rounded-full shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 5 Services
              </span>
            </div>

            {/* Service Cards Stacked in Column 2 */}
            <div className="flex flex-col gap-4 mt-2">
              {constructionAiServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="glass-card p-5 rounded-2xl group flex items-center justify-between gap-4 border border-slate-200/80 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${svc.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-base sm:text-lg group-hover:text-emerald-600 transition-colors">
                          {svc.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
            Explore All 11 Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

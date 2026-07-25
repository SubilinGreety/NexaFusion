import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  tag: string;
  tagColor: string;
};

const projects: Project[] = [
  {
    title: "Greenfield Villa Complex",
    category: "Construction",
    description:
      "End-to-end construction of a 4-unit residential villa complex featuring reinforced concrete frames, modern façade finishes, and eco-friendly drainage systems — completed on schedule.",
    tag: "Construction",
    tagColor: "text-amber-400 bg-amber-400/10",
  },
  {
    title: "CommercePlex Office Build",
    category: "Construction",
    description:
      "Ground-up construction of a 3-storey commercial office building with structural steel framework, fire-rated walls, and energy-efficient glazing for a corporate client.",
    tag: "Construction",
    tagColor: "text-amber-400 bg-amber-400/10",
  },
  {
    title: "Horizon Terrace Waterproofing",
    category: "Waterproofing",
    description:
      "Applied a high-performance polyurethane membrane waterproofing system across 2,800 sqft of terrace and parapet walls for a residential apartment block, eliminating recurring seepage issues.",
    tag: "Waterproofing",
    tagColor: "text-blue-400 bg-blue-400/10",
  },
  {
    title: "BasementDry Industrial Unit",
    category: "Waterproofing",
    description:
      "Comprehensive negative-side waterproofing treatment for an industrial basement covering foundation walls and floor slabs, using crystalline coating technology for permanent moisture protection.",
    tag: "Waterproofing",
    tagColor: "text-blue-400 bg-blue-400/10",
  },
  {
    title: "BrandPulse Social Campaign",
    category: "Content Creation",
    description:
      "Created a full suite of branded content — product videos, reels, static creatives, and blog articles — for a consumer lifestyle brand's 30-day social media launch campaign.",
    tag: "Content Creation",
    tagColor: "text-rose-400 bg-rose-400/10",
  },
  {
    title: "SwiftFood Promo Series",
    category: "Content Creation",
    description:
      "Produced a 5-part promotional video series and accompanying photography for a local food delivery startup, showcasing menu highlights and behind-the-scenes kitchen culture.",
    tag: "Content Creation",
    tagColor: "text-rose-400 bg-rose-400/10",
  },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio-preview" className="py-24 relative overflow-hidden">
      <div className="glow-orb-purple w-[450px] h-[350px] bottom-0 left-0 opacity-35" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Work</span>
            <h2 className="section-title mt-3">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-secondary text-sm py-2.5 px-6 w-fit"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 to-[#14b8a6]/10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />
                <span className="text-4xl font-extrabold text-white/10 tracking-widest select-none">
                  {proj.title.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${proj.tagColor}`}>
                  {proj.tag}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

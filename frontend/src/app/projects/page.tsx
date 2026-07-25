import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProjectsGrid from "@/components/Portfolio/PortfolioSection";
import CTABanner from "@/components/Common/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Projects — NexaFusion",
  description: "Explore completed construction, waterproofing, and content creation projects executed by NexaFusion.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-32 pb-12 text-center max-w-4xl mx-auto px-6 relative z-10">
        <span className="section-label">
          Proven Track Record
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
          Completed <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-slate-500 mt-4 text-base leading-relaxed">
          From turnkey RCC villa construction and terrace waterproofing to high-converting
          social content campaigns — explore our completed projects.
        </p>
      </div>

      <main>
        <ProjectsGrid />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}

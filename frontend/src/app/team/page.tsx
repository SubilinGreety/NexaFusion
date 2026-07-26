import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Team from "@/components/Team/Team";
import CTABanner from "@/components/Common/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — NexaFusion Groups",
  description: "Meet the co-founders and engineering experts behind NexaFusion Groups physical infrastructure and digital solutions.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-12 text-center max-w-4xl mx-auto px-6 relative z-10">
        <span className="section-label">
          Leadership &amp; Talent
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
          Meet The <span className="text-gradient">NexaFusion Groups Team</span>
        </h1>
        <p className="text-slate-500 mt-4 text-base leading-relaxed">
          Led by Vickey, Hari Prasath, Bharath, and Tamil, our team combines physical infrastructure expertise with modern digital agency and AI capabilities.
        </p>
      </div>

      <main>
        <Team />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}

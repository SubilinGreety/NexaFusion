import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import CTABanner from "@/components/Common/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — NexaFusion",
  description: "Find answers to common questions about NexaFusion services, construction standards, digital solutions, and pricing models.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-12 text-center max-w-4xl mx-auto px-6 relative z-10">
        <span className="section-label">
          Everything You Need To Know
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h1>
        <p className="text-slate-500 mt-4 text-base leading-relaxed">
          Got questions about our construction management, waterproofing guarantees, web development process, or pricing? We&apos;ve got answers.
        </p>
      </div>

      <main>
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}

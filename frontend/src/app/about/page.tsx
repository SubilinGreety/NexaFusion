import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AboutSection from '@/components/About/AboutSection';

import Footer from '@/components/Footer/Footer';
import CTABanner from '@/components/Common/CTABanner';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />
      <div className="py-12 pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
          <span className="section-label">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 mt-3">
            About <span className="text-gradient">NexaFusion Groups</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate startup delivering construction, waterproofing, content creation, digital marketing,
            web development, app development, UI/UX design, and branding — all under one roof.
          </p>
        </div>
        <AboutSection />

        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}

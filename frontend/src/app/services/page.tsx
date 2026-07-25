import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import ServicesSection from '@/components/Services/ServicesSection';
import Technologies from '@/components/Technologies/Technologies';
import Footer from '@/components/Footer/Footer';
import CTABanner from '@/components/Common/CTABanner';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <Navbar />
      <div className="py-12 pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
          <span className="section-label">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 mt-3">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From website development and AI automations to civil construction and smart home installation —
            NexaFusion delivers 11 specialized services across two core domains.
          </p>
        </div>
        <ServicesSection />
        <Technologies />
        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}

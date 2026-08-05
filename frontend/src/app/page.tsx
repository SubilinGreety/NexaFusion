import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/Common/TrustedBy";
import ServicesSection from "@/components/Services/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";

import FAQ from "@/components/FAQ/FAQ";
import CTABanner from "@/components/Common/CTABanner";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "NexaFusion Groups — Multi-Service Platform | Digital & Construction",
  description:
    "NexaFusion Groups delivers world-class Website Development, Mobile Apps, UI/UX, Digital Marketing, Branding, Content Creation, Interior & Exterior Design, Waterproofing, and Construction — all under one roof.",
  keywords: [
    "NexaFusion Groups",
    "website development",
    "mobile app development",
    "UI UX design",
    "digital marketing",
    "branding",
    "content creation",
    "interior design",
    "construction company",
    "waterproofing",
    "exterior design",
    "multi-service platform",
  ],
  openGraph: {
    title: "NexaFusion Groups — Multi-Service Platform",
    description: "Ten premium services. One trusted partner.",
    url: "https://www.nexafusion.com",
    type: "website",
  },
};

import Technologies from "@/components/Technologies/Technologies";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trusted By Strip */}
        <TrustedBy />

        {/* 3. Services Grid */}
        <ServicesSection />

        {/* 4. Tech Stack */}
        <Technologies />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Testimonials */}
        <Testimonials />


        {/* 7. FAQ Accordion */}
        <FAQ />

        {/* 8. CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}

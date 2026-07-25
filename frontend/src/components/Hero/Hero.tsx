"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  CheckCircle,
  HardHat,
  Droplets,
  LayoutDashboard,
  Home,
  Globe,
  Smartphone,
  Sparkles,
  Video,
  Megaphone,
  Bot,
  Cpu,
} from "lucide-react";

const stats = [
  { value: "6",      label: "Projects Completed" },
  { value: "1 mo",  label: "Experience" },
  { value: "6",     label: "Happy Clients" },
  { value: "100%",  label: "Satisfaction Rate" },
];

// Dual domain services: AI & Digital Solutions + Construction & AI Solutions
const services = [
  // Domain 1: AI & Digital Solutions
  { icon: Globe,           name: "Website Development", color: "text-blue-600" },
  { icon: Smartphone,      name: "App Development",     color: "text-sky-600" },
  { icon: Megaphone,       name: "Digital Marketing",  color: "text-cyan-600" },
  { icon: Sparkles,        name: "Branding",           color: "text-indigo-600" },
  { icon: Video,           name: "Content Creation",   color: "text-purple-600" },
  { icon: Bot,             name: "AI Automations",     color: "text-violet-600" },

  // Domain 2: Construction & AI Solutions
  { icon: HardHat,         name: "Construction",       color: "text-amber-600" },
  { icon: Droplets,        name: "Waterproofing",      color: "text-blue-700" },
  { icon: LayoutDashboard, name: "Interior Design",    color: "text-rose-600" },
  { icon: Home,            name: "Exterior Design",    color: "text-emerald-600" },
  { icon: Cpu,             name: "Smart Home",         color: "text-teal-600" },
];

const highlights = [
  "Passionate & Dedicated Team",
  "Client-First Approach",
  "On-Time Delivery Guaranteed",
  "Affordable & Transparent Pricing",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:3rem_3rem] pointer-events-none opacity-60"
      />
      {/* Soft blue glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="glow-orb-blue w-[500px] h-[300px] top-[-80px] left-[-80px]" />
      <div className="glow-orb-cyan w-[400px] h-[300px] top-[-50px] right-[-60px]" />

      <div className="section-container relative z-10 py-20 text-center">
        {/* ── Pill Badge ── */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
          Trusted Dual-Domain Startup
        </div>

        {/* ── Heading ── */}
        <h1 className="section-title mb-6 max-w-5xl mx-auto">
          One Platform.{" "}
          <span className="text-gradient">Two Core Domains.</span>
          <br />
          Zero Compromises.
        </h1>

        {/* ── Sub-heading ── */}
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From launching web apps to civil construction — NexaFusion delivers
          world-class digital, design, content, and infrastructure services with
          unmatched craftsmanship.
        </p>

        {/* ── Highlights ── */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/services" className="btn-primary w-full sm:w-auto">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Get Free Consultation
          </Link>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-20">
          {stats.map((s) => (
            <div key={s.label} className="stat-badge">
              <span className="text-2xl font-extrabold text-blue-700">{s.value}</span>
              <span className="text-xs text-slate-500 text-center">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Service Pill Scroll (Digital First) ── */}
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-6">
          Our Services
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {services.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-blue-700 hover:border-blue-300 hover:shadow-md transition-all cursor-default shadow-sm"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom fade-out to white ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}

import React from "react";
import {
  ShieldCheck,
  Clock,
  Headphones,
  TrendingUp,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    color: "text-blue-600 bg-blue-50",
    title: "Startup Energy & Agility",
    desc: "As a young startup, we move fast, adapt quickly, and bring fresh thinking to every project — no bureaucracy, just results.",
  },
  {
    icon: Clock,
    color: "text-amber-600 bg-amber-50",
    title: "On-Time Delivery",
    desc: "We set realistic timelines and stick to them. Every one of our 50+ completed projects was delivered on or before the agreed date.",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-600 bg-purple-50",
    title: "Quality You Can Trust",
    desc: "From construction materials to digital deliverables, we never compromise on quality — even as a lean, ambitious startup.",
  },
  {
    icon: Headphones,
    color: "text-cyan-600 bg-cyan-50",
    title: "Dedicated Support",
    desc: "Our small team means you get direct, responsive communication — no middlemen, just genuine care for your project.",
  },
  {
    icon: TrendingUp,
    color: "text-green-600 bg-green-50",
    title: "Growth-Focused Mindset",
    desc: "Every service we offer is designed to add real value — whether it's protecting your building or boosting your brand reach online.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Why Choose NexaFusion Groups</span>
          <h2 className="section-title mt-3">
            The NexaFusion Groups{" "}
            <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            We combine hands-on expertise, fresh startup energy, and genuine care
            for your goals to deliver results that exceed expectations every time.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="glass-card p-7 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${r.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-bold text-lg mb-2">{r.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

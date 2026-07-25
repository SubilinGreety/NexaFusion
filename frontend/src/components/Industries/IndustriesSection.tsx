import React from 'react';
import { Landmark, HeartPulse, Truck, ShoppingBag, ShieldAlert } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Fintech & Digital Banking",
      desc: "Implement audit-ready security layers, multi-tenant billing accounts, and fast dashboard systems for transaction records."
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Healthcare & Medtech",
      desc: "Develop HIPAA-compliant HL7 integrations, medical schedule builders, and secure portal structures for patient documents."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics & Supply Chain",
      desc: "Establish real-time vehicle mapping pipelines, automated delivery triggers, and optimized warehousing database tables."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce & Retail",
      desc: "Design and implement high-performance online catalog architectures capable of handling heavy search requests and cart checkouts."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">Target Sectors</span>
          <h2 className="text-3xl font-extrabold text-white mt-3">Tailored Domain Architectures</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            We adapt our backend patterns and client interfaces to align with industry compliance and speed requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex gap-6 group hover:border-accent-purple/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 text-primary-500 flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 transition-colors">
                {ind.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-extrabold text-xl group-hover:text-primary-500 transition-colors">{ind.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

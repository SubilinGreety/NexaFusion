import React from 'react';
import { ShieldCheck, Rocket, Layers, Users, Target, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              NexaFusion — Where Every Service Drives Your Vision Forward.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              NexaFusion is a dynamic, multi-service startup founded with a bold mission: to be the single trusted partner for businesses and individuals who need construction, design, content, and digital expertise — all under one roof. We bring together passionate professionals who love what they do and believe that great work begins with genuine care for our clients.
            </p>
            <p className="text-slate-500 leading-relaxed">
              In just our first month, we have delivered 6 completed projects spanning construction, waterproofing, and content creation — building a foundation of trust, quality, and excellence that we intend to grow upon for years to come. Our team combines fresh energy with strong technical know-how to consistently exceed expectations.
            </p>
            <p className="text-slate-500 leading-relaxed">
              From erecting residential structures to waterproofing commercial spaces, crafting scroll-stopping content, designing brand identities, building websites, developing apps, and running digital campaigns — NexaFusion is your end-to-end partner for growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-medium text-sm">Quality-First Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-medium text-sm">Startup Agility & Speed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-medium text-sm">Multi-Service Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-medium text-sm">Client-Centered Culture</span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Glowing bubble behind */}
            <div className="absolute inset-0 m-auto w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl -z-10"></div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">6</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Projects Completed</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all mt-6">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">6</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Happy Clients</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">10</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Services Offered</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all mt-6">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">100%</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Client Satisfaction</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

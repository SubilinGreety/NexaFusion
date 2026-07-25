import React from "react";
import { Code2, Server, Database, Cloud, Cpu, Layers } from "lucide-react";

export default function Technologies() {
  const stack = [
    {
      category: "Frontend Dev",
      description: "Modern, responsive & interactive web user interfaces",
      icon: Code2,
      badgeColor: "text-blue-600 bg-blue-50 border-blue-200",
      gradient: "from-blue-600 to-cyan-500",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      category: "Backend Dev",
      description: "Scalable, high-concurrency microservices & APIs",
      icon: Server,
      badgeColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      gradient: "from-indigo-600 to-purple-500",
      techs: ["Node.js", "Express", "Java 17+", "Spring Boot", "GraphQL", "REST APIs"],
    },
    {
      category: "Database Layer",
      description: "High-performance relational, NoSQL & in-memory stores",
      icon: Database,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      gradient: "from-emerald-600 to-teal-500",
      techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "H2 Database", "Prisma"],
    },
    {
      category: "DevOps & Cloud",
      description: "Automated deployment, containerization & cloud infra",
      icon: Cloud,
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200",
      gradient: "from-amber-600 to-orange-500",
      techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 relative overflow-hidden">
      {/* Top accent divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
            <Cpu className="w-3.5 h-3.5" />
            Core Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ecosystem of <span className="text-gradient">Modern Technologies</span>
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed text-base sm:text-lg">
            We engineer high-performance digital products and intelligent automations using stable, battle-tested, and enterprise-ready technology stacks.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.badgeColor} group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-2xs`}
                    >
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-extrabold text-lg leading-snug">
                        {item.category}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium line-clamp-1">
                        {item.description}
                      </span>
                    </div>
                  </div>

                  {/* Tech Badges List */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-xs transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

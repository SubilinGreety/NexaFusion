"use client";

import React, { useState } from 'react';
import { COMPLETED_PROJECTS } from '@/data/mockData';
import { CheckCircle } from 'lucide-react';

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "Construction", "Waterproofing", "Content Creation"];

  const filteredItems = activeCategory === "All"
    ? COMPLETED_PROJECTS
    : COMPLETED_PROJECTS.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Navigation Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-500 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group h-full hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">

              {/* Project Image Header */}
              {item.imageUrl && (
                <div className="h-52 w-full relative overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-white/90 backdrop-blur-md border border-blue-200 text-blue-700 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-slate-900 font-extrabold text-2xl group-hover:text-blue-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium shrink-0 ml-2">{item.completedDate}</span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.technologies?.split(',').map((tech, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 font-mono">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-100 p-6 bg-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-400">Client: <span className="text-slate-700 font-semibold">{item.client}</span></span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Project</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

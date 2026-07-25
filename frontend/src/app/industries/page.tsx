import React from 'react';
import IndustriesSection from '@/components/Industries/IndustriesSection';

export default function IndustriesPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Sectors & Domains</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          We construct tailored database schemas and dashboard views that comply with sector security standards.
        </p>
      </div>
      <IndustriesSection />
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CTABanner from '@/components/Common/CTABanner';
import { JobPosting } from '@/types';
import { Briefcase, MapPin, Clock, X, CheckCircle2 } from 'lucide-react';

const MOCK_JOBS: JobPosting[] = [
  {
    id: 1,
    title: "Junior Civil Engineer",
    department: "Construction",
    location: "Chennai / On-site",
    type: "Full-Time",
    description: "Assist in site supervision, material procurement, and quality checks for residential and commercial construction projects at NexaFusion.",
    requirements: "B.E. Civil Engineering, basic knowledge of AutoCAD, strong communication skills. Freshers welcome.",
    benefits: "Competitive salary, mentorship from experienced engineers, rapid career growth opportunities.",
    active: true
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Technical",
    location: "Remote / Chennai",
    type: "Full-Time",
    description: "Build beautiful, responsive web interfaces for NexaFusion's clients using React, Next.js, and Tailwind CSS. Work on exciting real-world projects.",
    requirements: "Proficiency in React and TypeScript, eye for design, experience with responsive layouts. Portfolio required.",
    benefits: "Flexible hours, remote work, paid skill development, creative freedom.",
    active: true
  }
];

export default function CareersPage() {
  const [jobs] = useState<JobPosting[]>(MOCK_JOBS);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    coverLetter: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />
      
      <div className="py-12 pt-32 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">Grow With Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">Careers at <span className="text-gradient">NexaFusion</span></h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Be part of a passionate startup delivering civil construction, waterproofing, and digital agency solutions.
          </p>
        </div>

        {/* Jobs grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {jobs.map((job) => (
            <div key={job.id} className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full hover:border-primary-500/30 transition-all">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/5 border border-white/5 text-primary-500 rounded uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-white font-extrabold text-2xl mb-4">{job.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.description}</p>
                
                {job.requirements && (
                  <div className="mb-6">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Key Requirements:</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{job.requirements}</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setSubmitted(false);
                }}
                className="w-full py-3 bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-white font-bold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-primary-500" />
                <span>Apply for Role</span>
              </button>
            </div>
          ))}
        </div>

        <CTABanner />
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50 overflow-y-auto animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto border border-white/10">
            
            {/* Modal Header */}
            <div className="border-b border-white/5 p-6 flex items-center justify-between bg-[#0b0f19]">
              <div>
                <h3 className="text-white font-extrabold text-xl">{selectedJob.title}</h3>
                <p className="text-slate-500 text-xs mt-1">{selectedJob.department} &bull; {selectedJob.location}</p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {submitted ? (
                <div className="text-center py-10 flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-primary-500" />
                  <h4 className="text-white font-bold text-xl">Application Received</h4>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you! Your details have been submitted. Our HR team will get in touch with you.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="mt-6 px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl text-sm transition-all"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Resume Link / Portfolio *</label>
                      <input
                        type="url"
                        required
                        value={formData.resumeUrl}
                        onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/... or Google Drive"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Cover Letter / Notes</label>
                    <textarea
                      rows={3}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Why do you want to join NexaFusion?..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-4 border-t border-white/5 pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-3 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl text-white text-sm font-semibold transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-gradient-to-r from-accent-purple to-primary-500 text-white font-bold rounded-xl text-sm transition-all disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Send Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

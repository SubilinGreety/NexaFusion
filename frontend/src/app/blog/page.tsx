import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CTABanner from '@/components/Common/CTABanner';
import { User, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How NexaFusion Approaches Modern Residential Construction",
    slug: "nexafusion-residential-construction-approach",
    summary: "A look at how NexaFusion ensures quality, safety, and aesthetics in every residential construction project — from foundation to finishing.",
    content: "<p>At NexaFusion, construction is about more than building walls. It is about precision engineering, structural durability, and seamless spatial design...</p>",
    category: "Construction",
    author: "Viknesh VR",
    createdAt: "2026-07-10T10:00:00Z"
  },
  {
    id: 2,
    title: "Why Content Creation is the Heart of Modern Digital Marketing",
    slug: "content-creation-digital-marketing",
    summary: "How compelling visual content and strategic storytelling can transform a brand's online presence and drive meaningful audience engagement.",
    content: "<p>Modern brands cannot survive on paid ads alone. Storytelling through video production, high-impact social reels, and targeted visual branding is essential...</p>",
    category: "Content & Marketing",
    author: "Hari Prasath",
    createdAt: "2026-07-15T14:30:00Z"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />
      <div className="py-12 pt-32 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">
            Insights & Updates
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            NexaFusion <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Articles on civil construction standards, terrace waterproofing tips, and digital growth strategies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {MOCK_POSTS.map((post) => (
            <div key={post.id} className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group hover:border-primary-500/30 transition-all">
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                  <span className="text-primary-500 font-semibold uppercase tracking-wider bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-white font-extrabold text-2xl mb-4 group-hover:text-primary-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-white/5 p-6 bg-[#070b13] flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-primary-500" />
                  <span>By {post.author}</span>
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-xs text-primary-500 font-bold hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}

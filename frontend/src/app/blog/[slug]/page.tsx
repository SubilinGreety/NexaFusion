"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BlogPost } from '@/types';
import { ArrowLeft, Calendar, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How NexaFusion Approaches Modern Residential Construction",
    slug: "nexafusion-residential-construction-approach",
    summary: "A look at how NexaFusion ensures quality, safety, and aesthetics in every residential construction project — from foundation to finishing.",
    content: `
      <p class="mb-4">At NexaFusion, construction is about more than building walls. It is about precision engineering, structural durability, and spatial harmony.</p>
      <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Quality Structural Planning</h3>
      <p class="mb-4">Before pouring concrete, soil tests and AutoCAD structural modeling guarantee load safety and longevity for residential villas.</p>
      <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Turnkey Supervision</h3>
      <p class="mb-4">Our co-founders and engineers perform daily on-site audits to verify material grades, electrical layout, and waterproofing seals.</p>
    `,
    category: "Construction",
    author: "Viknesh VR",
    createdAt: "2026-07-10T10:00:00Z"
  },
  {
    id: 2,
    title: "Why Content Creation is the Heart of Modern Digital Marketing",
    slug: "content-creation-digital-marketing",
    summary: "How compelling visual content and strategic storytelling can transform a brand's online presence and drive meaningful audience engagement.",
    content: `
      <p class="mb-4">Modern brands cannot rely solely on plain text ads. High-grade video production, social reels, and storytelling build immediate trust.</p>
      <h3 class="text-xl font-bold text-white mt-8 mb-4">1. High-Impact Visual Assets</h3>
      <p class="mb-4">Short-form videos and motion graphics grab user attention within 3 seconds, significantly boosting click-through rates.</p>
      <h3 class="text-xl font-bold text-white mt-8 mb-4">2. Unified Brand Narrative</h3>
      <p class="mb-4">Combining copywriting, photo assets, and video content establishes a cohesive identity across all channels.</p>
    `,
    category: "Content & Marketing",
    author: "Hari Prasath",
    createdAt: "2026-07-15T14:30:00Z"
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    if (!slug) return;

    const local = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0];
    setPost(local);
    setLoading(false);
  }, [params.slug]);

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-200 overflow-x-hidden">
      <Navbar />

      <main className="py-12 pt-32 max-w-3xl mx-auto px-6 relative z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4.5 h-4.5" />
          <span className="text-sm font-semibold">Back to Blog</span>
        </Link>

        {loading ? (
          <div className="py-20 text-center text-slate-400">Loading Article...</div>
        ) : !post ? (
          <div className="py-20 text-center flex flex-col items-center gap-4">
            <HelpCircle className="w-16 h-16 text-slate-600" />
            <h2 className="text-white font-extrabold text-2xl">Article Not Found</h2>
            <Link href="/blog" className="btn-secondary text-xs py-2 px-4">
              Return to Blog Feed
            </Link>
          </div>
        ) : (
          <article>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span className="text-primary-500 font-bold uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 border-y border-white/5 py-4 mb-12">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.author}</p>
                <p className="text-slate-500 text-xs mt-0.5">NexaFusion Leadership</p>
              </div>
            </div>

            <div 
              className="text-slate-300 text-base leading-relaxed flex flex-col gap-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of construction projects does NexaFusion Groups handle?",
    a: "NexaFusion Groups manages a full range of construction projects — residential homes, commercial office spaces, industrial facilities, and renovation works. Every project is executed with precision, quality materials, and a commitment to on-time delivery.",
  },
  {
    q: "How long does a typical waterproofing project take?",
    a: "Most waterproofing jobs are completed within 1–5 days depending on the area and severity of the issue. We conduct a thorough inspection first, then recommend the most effective solution — from polyurethane membrane application to crystalline coating treatment.",
  },
  {
    q: "Do you provide design mockups before starting work?",
    a: "Absolutely. For all design services (Interior, Exterior, UI/UX, Logo), we provide detailed mockups, mood boards, and prototypes for your review before any work begins. We don't move forward until you are 100% satisfied with the direction.",
  },
  {
    q: "What services does NexaFusion Groups offer for digital needs?",
    a: "NexaFusion Groups covers the full spectrum of digital services — website development, app development (iOS & Android), UI/UX design, logo design, content creation, and digital marketing including SEO, social media, and paid campaigns.",
  },
  {
    q: "How do you handle project communication and updates?",
    a: "You get direct access to our team — no middlemen. We provide regular progress updates via WhatsApp or email, and for larger projects we share milestone reports so you're always in the loop on progress.",
  },
  {
    q: "Do you offer post-project support?",
    a: "Yes. All our services include post-delivery support. For construction and waterproofing projects we offer a warranty period, and for digital services we provide a free bug-fix and support window after delivery.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title mt-3">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-500 mt-4">
            Can&apos;t find the answer you need? Reach out to our support team anytime.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen
                    ? "border-blue-400 shadow-md shadow-blue-100"
                    : "border-slate-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-blue-700" : "text-slate-800 group-hover:text-blue-600"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-blue-100 pt-4 bg-blue-50/40">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

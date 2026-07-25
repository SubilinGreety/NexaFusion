import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:3rem_3rem] opacity-10 pointer-events-none" />
      {/* Light glow orbs */}
      <div className="absolute top-[-100px] left-[-50px] w-[500px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-50px] w-[400px] h-[300px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Shimmer top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <span className="inline-block text-blue-200 font-semibold uppercase tracking-[0.15em] text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-4">
            Ready to Start?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mt-3 mb-5 max-w-3xl mx-auto">
            Let&apos;s Build Something{" "}
            <span className="text-sky-300">Extraordinary Together</span>
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you have a fully detailed brief or just an idea — our team is ready to listen, plan,
            and deliver. Get your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918825657848"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

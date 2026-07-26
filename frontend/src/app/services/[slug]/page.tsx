import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight, Phone, Zap, Package, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTABanner from "@/components/Common/CTABanner";
import { SERVICES } from "@/data/mockData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — NexaFusion Groups`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  // Find related services (same category, excluding current)
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          {/* Category Badge */}
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-blue-200 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5">
            {service.category}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {service.title}
          </h1>

          <p className="text-blue-100/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            {service.fullDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918825657848"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-20 space-y-24">

        {/* ── Image Gallery ── */}
        {service.gallery && service.gallery.length > 0 && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                  <Image
                    src={img}
                    alt={`${service.title} showcase ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Key Features ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        {service.benefits && service.benefits.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Choose This Service</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200 rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-extrabold text-sm shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Deliverables ── */}
        {service.deliverables && service.deliverables.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What You Get</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Our Process ── */}
        {service.process && service.process.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((proc, idx) => (
                <div
                  key={idx}
                  className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                >
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    {proc.step}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{proc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{proc.desc}</p>

                  {/* Connecting line for non-last items (visible on lg only) */}
                  {idx < service.process!.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2 w-6 h-0.5 bg-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Related Services ── */}
        {relatedServices.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.id}
                  href={`/services/${rs.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                >
                  {rs.image && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={rs.image}
                        alt={rs.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-slate-900 font-bold text-lg group-hover:text-blue-600 transition-colors mb-2">
                      {rs.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {rs.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-4">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <CTABanner />
      <Footer />
    </div>
  );
}

import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NexaFusion handled our villa construction from foundation to finishing. The quality exceeded our expectations, and the team was incredibly professional. Highly recommend them!",
    author: "Ramesh Kumar",
    role: "Director, BuildCraft Solutions",
    rating: 5,
    avatar: "RK",
    service: "Construction",
    avatarColor: "from-blue-600 to-blue-400",
  },
  {
    quote:
      "We had persistent water seepage in our basement for years. NexaFusion's waterproofing team identified the root cause and resolved it completely. It has been bone-dry since!",
    author: "Anitha Selvam",
    role: "Owner, AquaShield Realty",
    rating: 5,
    avatar: "AS",
    service: "Waterproofing",
    avatarColor: "from-sky-600 to-sky-400",
  },
  {
    quote:
      "The promotional video series NexaFusion created for our food app went viral on Instagram. Their creativity and attention to detail is remarkable — truly a fantastic team!",
    author: "Karthik Rajan",
    role: "Founder, SwiftFood Delivery",
    rating: 5,
    avatar: "KR",
    service: "Content Creation",
    avatarColor: "from-indigo-600 to-indigo-400",
  },
  {
    quote:
      "NexaFusion delivered our office construction project 2 days ahead of schedule without cutting any corners. The craftsmanship and communication throughout was outstanding.",
    author: "Priya Mohan",
    role: "COO, SwiftBuild Infra",
    rating: 5,
    avatar: "PM",
    service: "Construction",
    avatarColor: "from-blue-700 to-blue-500",
  },
  {
    quote:
      "Our terrace was leaking every monsoon. NexaFusion applied a premium waterproofing solution and the problem is completely gone. Great value for the service rendered.",
    author: "Suresh Babu",
    role: "Property Manager, TerraForm Homes",
    rating: 5,
    avatar: "SB",
    service: "Waterproofing",
    avatarColor: "from-cyan-600 to-cyan-400",
  },
  {
    quote:
      "The brand content NexaFusion created for our product launch exceeded all expectations. The reels they made generated thousands of organic views in just the first week!",
    author: "Divya Nair",
    role: "Marketing Head, PixelNova Agency",
    rating: 5,
    avatar: "DN",
    service: "Content Creation",
    avatarColor: "from-blue-600 to-sky-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-sky-50/30 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Client Success Stories</span>
          <h2 className="section-title mt-3">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-slate-500 mt-4">
            Real results from real clients across our service areas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-5 relative shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Service tag */}
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
                {t.service}
              </span>

              {/* Quote text */}
              <p className="text-slate-600 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-sm">{t.author}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

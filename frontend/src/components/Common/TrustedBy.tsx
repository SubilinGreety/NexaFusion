import React from "react";

const brands = [
  "BuildCraft Solutions",
  "AquaShield Realty",
  "VisualPeak Studios",
  "SwiftBuild Infra",
  "PixelNova Agency",
  "TerraForm Homes",
];

export default function TrustedBy() {
  return (
    <section className="py-14 relative overflow-hidden bg-white border-y border-slate-100">
      {/* Scroll keyframe injected via style tag */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 30s linear infinite;
        }
      `}</style>

      <div className="section-container">
        <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-10 font-semibold">
          Trusted by our happy clients across industries
        </p>
        {/* Marquee */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
          <div className="animate-marquee flex gap-12 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-slate-400 font-bold text-sm tracking-widest uppercase whitespace-nowrap hover:text-blue-600 transition-colors cursor-default select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

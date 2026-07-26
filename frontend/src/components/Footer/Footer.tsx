import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Instagram,
  MessageSquare,
} from "lucide-react";

// Service links organized by two core domains
const serviceLinks = [
  { label: "Website Development",    href: "/services#website-development" },
  { label: "App Development",        href: "/services#mobile-app-development" },
  { label: "Digital Marketing",      href: "/services#digital-marketing" },
  { label: "Branding",               href: "/services#branding" },
  { label: "Content Creation",       href: "/services#content-creation" },
  { label: "AI Automations",         href: "/services#ai-automations" },
  { label: "Construction",           href: "/services#construction" },
  { label: "Waterproofing",          href: "/services#waterproofing" },
  { label: "Interior Design",        href: "/services#interior-design" },
  { label: "Exterior Design",        href: "/services#exterior-design" },
  { label: "Smart Home Installation",href: "/services#smart-home-installation" },
];

const companyLinks = [
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Projects",   href: "/projects" },
  { label: "Team",       href: "/team" },
  { label: "FAQ",        href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const social = [
  { icon: Twitter,   href: "https://twitter.com",   label: "Twitter" },
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github,    href: "https://github.com",    label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50 pt-20 pb-8 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="glow-orb-blue w-[400px] h-[250px] bottom-[-120px] left-[5%] opacity-10" />
      <div className="glow-orb-cyan w-[300px] h-[200px] top-[-60px] right-[10%] opacity-10" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10 border border-blue-400/20 p-1 flex items-center justify-center shadow-lg">
                <img
                  src="/logo/logo.jpg"
                  alt="NexaFusion Groups Logo"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                Nexa<span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Fusion</span> Groups
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              NexaFusion Groups is your multi-service partner for website & mobile development, UI/UX, branding, content creation, digital marketing, and construction services. Building Intelligent Futures.
            </p>
            <div className="flex items-center gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-slate-400 text-xs hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>53, Sivan Koil St, Ganga Nagar, Kodambakkam, Chennai, Tamil Nadu 600024, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+918825657848" className="hover:text-white transition-colors">
                  +91 8825657848
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+917904711030" className="hover:text-white transition-colors">
                  +91 7904711030 (Alt)
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918825657848?text=Hello%20NexaFusion%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 8825657848
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:nexafusion.grp@gmail.com" className="hover:text-white transition-colors">
                  nexafusion.grp@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>&copy; {year} NexaFusion Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

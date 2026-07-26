"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// Nav links grouped under two core domains: AI & Digital Solutions and Construction & AI Solutions
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      // ── Domain 1: AI & Digital Solutions ──
      { name: "Website Development",    href: "/services/website-development" },
      { name: "App Development",        href: "/services/mobile-app-development" },
      { name: "Digital Marketing",      href: "/services/digital-marketing" },
      { name: "Branding",               href: "/services/branding" },
      { name: "Content Creation",       href: "/services/content-creation" },
      { name: "AI Automations",         href: "/services/ai-automations" },
      // ── Domain 2: Construction & AI Solutions ──
      { name: "Construction",           href: "/services/construction" },
      { name: "Waterproofing",          href: "/services/waterproofing" },
      { name: "Interior Design",        href: "/services/interior-design" },
      { name: "Exterior Design",        href: "/services/exterior-design" },
      { name: "Smart Home Installation",href: "/services/smart-home-installation" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100/80 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-blue-50 border border-blue-200 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img
              src="/logo/logo.jpg"
              alt="NexaFusion Groups Logo"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <span className="text-xl font-extrabold tracking-wider text-slate-800">
            Nexa<span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">Fusion</span> Groups
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.children) {
              return (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setDropOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropOpen && (
                    <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl py-2 shadow-xl border border-slate-200 max-h-96 overflow-y-auto">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setDropOpen(false)}
                          className="block px-4 py-2 text-xs text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-blue-600 py-1 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── CTA Button ── */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-1 shadow-xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 last:border-0 py-2">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === link.href ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="pl-4 mt-2 flex flex-col gap-1.5 border-l-2 border-blue-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-slate-500 hover:text-blue-600 transition-colors py-1"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-4 justify-center text-sm"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

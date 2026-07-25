import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import ContactForm from '@/components/Contact/ContactForm';
import { Mail, Phone, MapPin, Sparkles, MessageSquare, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Footer from '@/components/Footer/Footer';
import { COMPANY_INFO } from '@/data/mockData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us — NexaFusion",
  description: "Get in touch with NexaFusion for website development, mobile apps, UI/UX, digital marketing, content creation, and construction services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />
      <div className="py-12 pt-32 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-4">
          
          {/* Contact details */}
          <div className="lg:col-span-2 flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-4">
              <span className="section-label">Get In Touch</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Let&apos;s Build Something <span className="text-gradient">Together</span>
              </h1>
              <p className="text-slate-500 leading-relaxed text-sm">
                Have a web development requirement, mobile app idea, UI/UX project, or civil construction need? Reach out directly via call, email, or WhatsApp.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20NexaFusion%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm flex items-center gap-2.5 hover:bg-emerald-100 transition-all shadow-sm"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="px-5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-bold text-sm flex items-center gap-2.5 hover:bg-blue-100 transition-all shadow-sm"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>Call Us Direct</span>
              </a>
            </div>

            {/* Detailed Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-slate-800 font-bold text-sm">Office Address</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    {COMPANY_INFO.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-slate-800 font-bold text-sm">Phone Numbers</h4>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-slate-600 text-xs font-semibold hover:text-blue-600 transition-colors">
                      Main: {COMPANY_INFO.contact.phone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.contact.additionalPhone}`} className="text-slate-600 text-xs font-semibold hover:text-blue-600 transition-colors">
                      Alt: {COMPANY_INFO.contact.additionalPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-slate-800 font-bold text-sm">Email Address</h4>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-600 text-xs mt-1 font-semibold hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-slate-700 font-bold text-xs uppercase tracking-wider">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a href={COMPANY_INFO.contact.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all">
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a href={COMPANY_INFO.contact.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all">
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a href={COMPANY_INFO.contact.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all">
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a href={COMPANY_INFO.contact.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all">
                  <Github className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs text-slate-600">Direct response guaranteed within 24 hours.</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-4 overflow-hidden shadow-sm">
          <h3 className="text-slate-800 font-bold text-lg mb-4 px-2">Visit Our Office in Kodambakkam, Chennai</h3>
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <iframe
              title="NexaFusion Office Location"
              src={COMPANY_INFO.contact.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Open mailto link directed to nexafusion.grp@gmail.com
    const mailtoSubject = encodeURIComponent(`NexaFusion Service Inquiry: ${formData.service} from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Required: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    
    // Trigger mailto link in background/new tab
    window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hi NexaFusion team, I'm ${formData.name || 'interested'} inquiring about ${formData.service}. ${formData.message ? `Details: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-lg">
      
      {submitted ? (
        <div className="text-center py-12 flex flex-col items-center gap-4">
          <CheckCircle2 className="w-16 h-16 text-blue-600" />
          <h3 className="text-slate-900 font-extrabold text-2xl">Inquiry Ready to Send!</h3>
          <p className="text-slate-500 text-sm max-w-sm">
            Thank you for reaching out to NexaFusion. Your email client has been prepared for <strong className="text-blue-700">nexafusion.grp@gmail.com</strong>. You can also chat with us directly on WhatsApp!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 text-sm font-semibold transition-all"
            >
              Send Another Message
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp (+91 8825657848)
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-900 font-extrabold text-2xl">Get in Touch</h3>
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="text-xs px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold flex items-center gap-1.5 hover:bg-emerald-100 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Direct
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-800 text-sm font-medium transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. john@company.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-800 text-sm font-medium transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 8825657848"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-800 text-sm font-medium transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Service Required *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-800 text-sm font-medium transition-all"
              >
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Branding">Branding</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Exterior Design">Exterior Design</option>
                <option value="Waterproofing">Waterproofing</option>
                <option value="Construction">Construction</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Detailed Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project requirements or inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-800 text-sm font-medium transition-all placeholder:text-slate-400 resize-none"
              ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-4 btn-primary text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'Opening Email...' : 'Send to nexafusion.grp@gmail.com'}</span>
              <Mail className="w-4.5 h-4.5" />
            </button>
            
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
}

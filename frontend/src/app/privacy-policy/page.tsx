import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 relative z-10 text-slate-300">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">Privacy Policy</h1>
      <p className="mb-6 leading-relaxed">
        Last updated: July 14, 2026. NexaFusion ("we", "us", or "our") operates the NexaFusion website. We are committed to protecting the personal information you submit via our contact and job application forms.
      </p>
      <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Data We Collect</h2>
      <p className="mb-6 leading-relaxed">
        We collect only the details you explicitly submit: names, emails, phones, cover letter descriptions, and links to resume documents. We do not set persistent tracking codes or sell database records.
      </p>
      <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Database Storage & Safety</h2>
      <p className="mb-6 leading-relaxed">
        Submissions are stored securely in our database schemas (MySQL / H2). We restrict access to admin users authenticated through signed JWT middleware.
      </p>
      <p className="leading-relaxed">
        If you would like your submitted contact records or application files deleted, contact us at privacy@nexafusion.com.
      </p>
    </div>
  );
}

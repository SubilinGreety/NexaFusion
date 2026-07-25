import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 relative z-10 text-slate-300">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">Terms of Service</h1>
      <p className="mb-6 leading-relaxed">
        Last updated: July 14, 2026. Please read these Terms of Service carefully before utilizing our system interfaces.
      </p>
      <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Structural Acceptability</h2>
      <p className="mb-6 leading-relaxed">
        By accessing the NexaFusion website, you agree to submit only valid information. Submitting spam text or attempting to exploit our systems is strictly prohibited.
      </p>
      <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Database Ownership</h2>
      <p className="mb-6 leading-relaxed">
        All website content, layouts, brand materials, and service descriptions are intellectual property of NexaFusion. You may explore public portfolios for reference but may not reproduce content without written permission.
      </p>
      <p className="leading-relaxed">
        Any disputes arising from these terms will be handled under the jurisdiction of the State of California.
      </p>
    </div>
  );
}

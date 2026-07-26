import React from "react";
import { Mail, CheckCircle2 } from "lucide-react";

interface TeamMemberDetail {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  badgeColor: string;
  email: string;
  points: string[];
}

const teamMembers: TeamMemberDetail[] = [
  {
    name: "Vignesh V R",
    role: "Founder",
    initials: "VK",
    avatarColor: "from-blue-700 to-indigo-600",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    email: "vickkyyy1516@gmail.com",
    points: [
      "Defines the company’s vision and strategy.",
      "Builds partnerships and drives business growth.",
      "Oversees major business decisions."
    ]
  },
  {
    name: "Hariprasath R",
    role: "CEO & CTO",
    initials: "HP",
    avatarColor: "from-blue-600 to-sky-500",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    email: "hariprasathr1801@gmail.com",
    points: [
      "Leads the company and technology strategy.",
      "Oversees software, AI, websites, and digital solutions.",
      "Manages the technical team.",
      "Handles technical client meetings and solution architecture."
    ]
  },
  {
    name: "Bharath Kumar M",
    role: "COO",
    initials: "BK",
    avatarColor: "from-sky-600 to-cyan-500",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    email: "bharath@nexafusion.com",
    points: [
      "Manages daily operations.",
      "Coordinates projects and resources.",
      "Ensures smooth execution and timely delivery."
    ]
  },
  {
    name: "Tamil Kumaran K",
    role: "Finance Head",
    initials: "TK",
    avatarColor: "from-cyan-600 to-teal-500",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    email: "tamil@nexafusion.com",
    points: [
      "Manages accounts, budgeting, quotations, invoices, and financial planning."
    ]
  },
  {
    name: "Subilin Greety K S",
    role: "Full Stack Developer",
    initials: "SG",
    avatarColor: "from-blue-600 to-cyan-600",
    badgeColor: "text-cyan-700 bg-cyan-50 border border-cyan-200",
    email: "subiling852@gmail.com",
    points: [
      "Website and web application development.",
      "Frontend and backend implementation.",
      "API integration and maintenance."
    ]
  },
  {
    name: "Nitara J",
    role: "AI & Backend Developer",
    initials: "NJ",
    avatarColor: "from-indigo-600 to-purple-600",
    badgeColor: "text-cyan-700 bg-cyan-50 border border-cyan-200",
    email: "nitara@nexafusion.com",
    points: [
      "AI solutions and automation.",
      "Backend development and database management.",
      "Machine learning integration."
    ]
  },
  {
    name: "Susmitha",
    role: "Business Development & Customer Support Executive",
    initials: "SS",
    avatarColor: "from-pink-500 to-rose-500",
    badgeColor: "text-pink-700 bg-pink-50 border border-pink-200",
    email: "sushmitha@nexafusion.com",
    points: [
      "Identifies and follows up with potential clients.",
      "Builds and maintains customer relationships.",
      "Handles customer inquiries and support.",
      "Coordinates with clients throughout the project lifecycle.",
      "Collects client requirements and communicates them to the technical team.",
      "Supports sales, business growth, and client retention."
    ]
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Meet the Team</span>
          <h2 className="section-title mt-3">
            The People Behind{" "}
            <span className="text-gradient">NexaFusion Groups</span>
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            A dedicated multi-disciplinary team driving innovation across physical infrastructure, AI, software, and business strategy.
          </p>
        </div>

        {/* All Team Members in One Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div>
                {/* Avatar & Role Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-white font-extrabold text-xl shadow-md shrink-0`}>
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg leading-snug">{member.name}</h4>
                    <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-1">
                      {member.role}
                    </p>
                    <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${member.badgeColor}`}>
                      Team Member
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 my-4 text-slate-600 text-sm">
                  {member.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / Email link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">NexaFusion Team</span>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    initials: "VR",
    name: "Viknesh VR",
    role: "Founder",
    badge: "Leadership",
    avatarColor: "from-blue-700 to-blue-500",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    desc: "Visionary entrepreneur who founded NexaFusion with a mission to deliver multi-service excellence spanning construction, digital innovation, and creative services under one roof.",
    social: { email: "vickkyyy1516@gmail.com" },
  },
  {
    initials: "HP",
    name: "Hari Prasath",
    role: "Co-Founder & Head of Technical Department",
    badge: "Leadership",
    avatarColor: "from-blue-600 to-sky-500",
    badgeColor: "text-purple-700 bg-purple-50 border border-purple-200",
    desc: "Co-founder and technical leader overseeing web development, app development, UI/UX design, and digital solutions — ensuring every product meets the highest engineering standards.",
    social: { email: "hariprasathr1801@gmail.com" },
  },
  {
    initials: "TM",
    name: "Tamil",
    role: "Head of Financial Department",
    badge: "Department Head",
    avatarColor: "from-indigo-600 to-blue-500",
    badgeColor: "text-blue-700 bg-blue-50 border border-blue-200",
    desc: "Manages financial planning, budgeting, and fiscal strategy at NexaFusion — keeping the company on a healthy growth trajectory while ensuring transparency for all stakeholders.",
    social: { email: "tamil@nexafusion.com" },
  },
  {
    initials: "BH",
    name: "Bharath",
    role: "Team Member",
    badge: "Fresher",
    avatarColor: "from-sky-600 to-cyan-500",
    badgeColor: "text-cyan-700 bg-cyan-50 border border-cyan-200",
    desc: "Eager and enthusiastic team member contributing fresh ideas and energy to NexaFusion's projects — actively learning and growing across multiple service verticals.",
    social: { email: "bharath@nexafusion.com" },
  },
  {
    initials: "SG",
    name: "Subilin Greety K S",
    role: "Full Stack Developer",
    badge: "Developer",
    avatarColor: "from-sky-600 to-cyan-500",
    badgeColor: "text-cyan-700 bg-cyan-50 border border-cyan-200",
    desc: "Dedicated team member bringing creativity and commitment to every task, contributing to NexaFusion's construction and content creation projects with enthusiasm.",
    social: { email: "subiling852@gmail.com" },
  },
  {
    initials: "NJ",
    name: "Nitara J",
    role: " AI/ML Engineer",
    badge: "Engineer",
    avatarColor: "from-blue-500 to-pink-400",
    badgeColor: "text-pink-700 bg-pink-50 border border-pink-200",
    desc: "Creative and detail-oriented team member supporting design and content workflows at NexaFusion — passionate about visual storytelling and digital marketing.",
    social: { email: "nitara@nexafusion.com" },
  },
  {
    initials: "SS",
    name: "Susmitha",
    role: "Technical Support Engineer",
    badge: "Fresher",
    avatarColor: "from-blue-500 to-pink-400",
    badgeColor: "text-pink-700 bg-pink-50 border border-pink-200",
    desc: "Versatile team member enthusiastically supporting client coordination and project execution — bringing a positive attitude and willingness to learn across all service areas.",
    social: { email: "sushmitha@nexafusion.com" },
  },
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
            <span className="text-gradient">NexaFusion</span>
          </h2>
          <p className="text-slate-500 mt-4">
            A passionate, young team united by a drive to deliver excellence
            across construction, design, content, and digital services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-white font-extrabold text-xl shadow-md`}>
                {member.initials}
              </div>

              <div>
                <h3 className="text-slate-800 font-bold text-base">{member.name}</h3>
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-1.5">
                  {member.role}
                </p>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${member.badgeColor}`}>
                  {member.badge}
                </span>
                <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label={`${member.name} on Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/about" className="btn-secondary inline-flex">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

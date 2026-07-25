import React, { useState, useEffect } from 'react';
import { contactApi, jobApi, blogApi, portfolioApi } from '@/services/api';
import { BarChart3, Users, Briefcase, FileText, Image as ImageIcon, Activity } from 'lucide-react';

interface AnalyticsTabProps {
  token: string;
}

export default function AnalyticsTab({ token }: AnalyticsTabProps) {
  const [stats, setStats] = useState({
    contacts: 0,
    applications: 0,
    jobs: 0,
    blogs: 0,
    portfolio: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, appsRes, jobsRes, blogsRes, portfolioRes] = await Promise.all([
          contactApi.getAll(token).catch(() => []),
          jobApi.getApplications(token).catch(() => []),
          jobApi.getAll(token).catch(() => []),
          blogApi.getAll(token).catch(() => []),
          portfolioApi.getAll().catch(() => []), // portfolio doesn't require token for getAll typically, wait, let's just fetch all
        ]);

        setStats({
          contacts: contactsRes.length || 0,
          applications: appsRes.length || 0,
          jobs: jobsRes.length || 0,
          blogs: blogsRes.length || 0,
          portfolio: portfolioRes.length || 0,
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, [token]);

  if (isLoading) {
    return <div className="p-8 text-center text-slate-400">Loading Analytics...</div>;
  }

  const statCards = [
    { title: 'Total Inquiries', value: stats.contacts, icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Job Applications', value: stats.applications, icon: FileText, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Active Jobs', value: stats.jobs, icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Published Blogs', value: stats.blogs, icon: BarChart3, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { title: 'Portfolio Items', value: stats.portfolio, icon: ImageIcon, color: 'text-teal-500', bg: 'bg-teal-500/10' },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <Activity className="w-5 h-5 text-primary-500" />
        <h2 className="text-xl font-bold text-white">System Overview</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl flex items-center justify-between border border-white/5 hover:border-primary-500/20 transition-all">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{card.title}</p>
              <h3 className="text-white text-3xl font-extrabold">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg} ${card.color}`}>
              <card.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-card p-8 rounded-2xl border border-white/5 mt-4">
         <h3 className="text-white font-bold mb-4">Dashboard Tip</h3>
         <p className="text-slate-400 text-sm leading-relaxed">
           Use the navigation tabs on the left to manage specific entities. All changes made in the dashboard are instantly reflected on the live public-facing website. Be cautious when deleting items, as this action is irreversible and immediately updates the live database.
         </p>
      </div>
    </div>
  );
}

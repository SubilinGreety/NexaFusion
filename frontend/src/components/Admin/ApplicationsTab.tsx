import React, { useState, useEffect } from 'react';
import { jobApi } from '@/services/api';
import { JobApplication } from '@/types';
import { FileText } from 'lucide-react';

interface ApplicationsTabProps {
  token: string;
}

export default function ApplicationsTab({ token }: ApplicationsTabProps) {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, [token]);

  const loadApplications = async () => {
    setIsLoading(true);
    try {
      const apps = await jobApi.getApplications(token);
      setApplications(apps || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this applicant submission?')) return;
    try {
      await jobApi.deleteApplication(id, token);
      setApplications(applications.filter(a => a.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <div className="p-8 text-center text-slate-400">Loading Applications...</div>;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-2">
        <FileText className="w-5 h-5 text-primary-500" />
        <h2 className="text-xl font-bold text-white">Job Applications</h2>
      </div>

      {applications.length === 0 ? (
        <div className="glass-card p-12 text-center text-slate-500 rounded-2xl">
          No applicant submissions found.
        </div>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="glass-card p-6 rounded-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-white font-bold text-lg">{app.candidateName}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{app.candidateEmail} &bull; {app.candidatePhone || 'No Phone'}</p>
                <p className="text-primary-500 text-xs font-bold mt-2">Applied for: {app.jobPosting?.title}</p>
              </div>
              <span className="text-slate-500 text-xs">{app.createdAt ? new Date(app.createdAt).toLocaleDateString() : 'Recent'}</span>
            </div>

            <div className="mb-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Resume:</h4>
              <a href={app.resumeUrl} target="_blank" rel="noreferrer" className="text-primary-500 text-sm underline break-all">{app.resumeUrl}</a>
            </div>

            {app.coverLetter && (
              <div className="mb-6 bg-slate-950/30 p-4 rounded-xl border border-white/5">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Cover Letter:</h4>
                <p className="text-slate-400 text-sm whitespace-pre-wrap leading-relaxed">{app.coverLetter}</p>
              </div>
            )}

            <div className="flex border-t border-white/5 pt-4">
              <button
                onClick={() => handleDelete(app.id!)}
                className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold rounded-lg transition-all ml-auto"
              >
                Delete Submission
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

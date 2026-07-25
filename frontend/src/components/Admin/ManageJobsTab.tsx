import React, { useState, useEffect } from 'react';
import { jobApi } from '@/services/api';
import { JobPosting } from '@/types';
import { Briefcase, Plus, Edit2, Trash2, Check, X } from 'lucide-react';

interface ManageJobsTabProps {
  token: string;
}

export default function ManageJobsTab({ token }: ManageJobsTabProps) {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: 'IDLE', msg: '' });

  const initialForm = {
    title: '', department: 'Enterprise Engineering', location: 'Remote',
    type: 'Full-Time', description: '', requirements: '', benefits: '', active: true
  };
  const [jobForm, setJobForm] = useState<Partial<JobPosting>>(initialForm);

  useEffect(() => {
    loadJobs();
  }, [token]);

  const loadJobs = async () => {
    setIsLoading(true);
    try {
      const data = await jobApi.getAll(token);
      setJobs(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionStatus({ type: 'IDLE', msg: '' });

    try {
      if (jobForm.id) {
        // Edit
        await jobApi.update(jobForm.id, jobForm, token);
        setJobs(jobs.map(j => j.id === jobForm.id ? { ...j, ...jobForm } as JobPosting : j));
        setActionStatus({ type: 'SUCCESS', msg: 'Job updated successfully!' });
      } else {
        // Create
        const newJob = await jobApi.create(jobForm, token);
        setJobs([newJob, ...jobs]);
        setActionStatus({ type: 'SUCCESS', msg: 'Job posting added successfully!' });
      }
      setIsEditing(false);
      setJobForm(initialForm);
    } catch (err) {
      setActionStatus({ type: 'ERROR', msg: 'Failed to save job posting.' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return;
    try {
      await jobApi.delete(id, token);
      setJobs(jobs.filter(j => j.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (job: JobPosting) => {
    setJobForm(job);
    setIsEditing(true);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  const handleCancelEdit = () => {
    setJobForm(initialForm);
    setIsEditing(false);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  if (isLoading) return <div className="p-8 text-center text-slate-400">Loading Jobs...</div>;

  return (
    <div className="flex flex-col gap-6">
      
      {/* Action Banner */}
      {actionStatus.type === 'SUCCESS' && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm flex items-center gap-2">
          <Check className="w-4.5 h-4.5" />
          <span>{actionStatus.msg}</span>
        </div>
      )}

      {isEditing || jobs.length === 0 ? (
        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSaveJob} className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-extrabold text-xl">{jobForm.id ? 'Edit Job Vacancy' : 'Create Job Vacancy'}</h3>
              {isEditing && (
                <button type="button" onClick={handleCancelEdit} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Job Title *</label>
                <input
                  type="text" required
                  value={jobForm.title}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  placeholder="e.g. Senior Backend Architect"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Department *</label>
                <input
                  type="text" required
                  value={jobForm.department}
                  onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                  placeholder="e.g. Enterprise Architecture"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Location *</label>
                <input
                  type="text" required
                  value={jobForm.location}
                  onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                  placeholder="e.g. Silicon Valley / Hybrid"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Job Type *</label>
                <input
                  type="text" required
                  value={jobForm.type}
                  onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                  placeholder="e.g. Full-Time / Contract"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Job Description *</label>
              <textarea
                required rows={4}
                value={jobForm.description}
                onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                placeholder="Role responsibilities and daily workload detail..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Requirements</label>
              <textarea
                rows={3}
                value={jobForm.requirements}
                onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                placeholder="Prerequisites, stack familiarity, certifications..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Benefits</label>
              <textarea
                rows={3}
                value={jobForm.benefits}
                onChange={(e) => setJobForm({ ...jobForm, benefits: e.target.value })}
                placeholder="Health packages, equity details, remote support..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 mt-2">
               <input 
                 type="checkbox" 
                 id="activeCheck" 
                 checked={jobForm.active !== false}
                 onChange={(e) => setJobForm({ ...jobForm, active: e.target.checked })} 
                 className="w-4 h-4 rounded border-white/10" 
               />
               <label htmlFor="activeCheck" className="text-sm text-slate-300">Active (Visible on public job board)</label>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-accent-purple to-primary-500 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              {jobForm.id ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              <span>{jobForm.id ? 'Save Changes' : 'Publish Opening'}</span>
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-bold text-white">Manage Jobs</h2>
            </div>
            <button
              onClick={() => { setJobForm(initialForm); setIsEditing(true); }}
              className="px-4 py-2 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" /> Add Job
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <div key={job.id} className="glass-card p-5 rounded-xl flex items-center justify-between border border-white/5">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-white font-bold text-lg">{job.title}</h4>
                    {!job.active && <span className="text-[10px] px-2 py-0.5 bg-rose-500/20 text-rose-500 rounded font-bold uppercase">Inactive</span>}
                  </div>
                  <p className="text-slate-400 text-xs mt-1">{job.department} &bull; {job.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditClick(job)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(job.id)} className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

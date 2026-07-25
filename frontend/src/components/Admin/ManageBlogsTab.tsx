import React, { useState, useEffect } from 'react';
import { blogApi } from '@/services/api';
import { BlogPost } from '@/types';
import { BookOpen, Plus, Edit2, Trash2, Check, X } from 'lucide-react';

interface ManageBlogsTabProps {
  token: string;
}

export default function ManageBlogsTab({ token }: ManageBlogsTabProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: 'IDLE', msg: '' });

  const initialForm: Partial<BlogPost> = {
    title: '', summary: '', content: '', category: 'Backend', author: 'NexaFusion Admin', status: 'PUBLISHED'
  };
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>(initialForm);

  useEffect(() => {
    loadBlogs();
  }, [token]);

  const loadBlogs = async () => {
    setIsLoading(true);
    try {
      const data = await blogApi.getAll(token);
      setBlogs(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionStatus({ type: 'IDLE', msg: '' });

    try {
      if (blogForm.id) {
        // Edit
        await blogApi.update(blogForm.id, blogForm, token);
        setBlogs(blogs.map(b => b.id === blogForm.id ? { ...b, ...blogForm } as BlogPost : b));
        setActionStatus({ type: 'SUCCESS', msg: 'Blog updated successfully!' });
      } else {
        // Create
        const newBlog = await blogApi.create(blogForm, token);
        setBlogs([newBlog, ...blogs]);
        setActionStatus({ type: 'SUCCESS', msg: 'Blog post created successfully!' });
      }
      setIsEditing(false);
      setBlogForm(initialForm);
    } catch (err) {
      setActionStatus({ type: 'ERROR', msg: 'Failed to save blog post.' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await blogApi.delete(id, token);
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (blog: BlogPost) => {
    setBlogForm(blog);
    setIsEditing(true);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  const handleCancelEdit = () => {
    setBlogForm(initialForm);
    setIsEditing(false);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  if (isLoading) return <div className="p-8 text-center text-slate-400">Loading Blogs...</div>;

  return (
    <div className="flex flex-col gap-6">
      
      {/* Action Banner */}
      {actionStatus.type === 'SUCCESS' && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm flex items-center gap-2">
          <Check className="w-4.5 h-4.5" />
          <span>{actionStatus.msg}</span>
        </div>
      )}

      {isEditing || blogs.length === 0 ? (
        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSaveBlog} className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-extrabold text-xl">{blogForm.id ? 'Edit Blog Article' : 'Draft Blog Article'}</h3>
              {isEditing && (
                <button type="button" onClick={handleCancelEdit} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Article Title *</label>
                <input
                  type="text" required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="e.g. Advanced SQL profiling in Spring Boot"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Category *</label>
                <input
                  type="text" required
                  value={blogForm.category}
                  onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                  placeholder="e.g. Backend / Design"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Short Summary *</label>
              <input
                type="text" required
                value={blogForm.summary}
                onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                placeholder="Brief description for the feed page..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">HTML Article Content *</label>
              <textarea
                required rows={8}
                value={blogForm.content}
                onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                placeholder="<p>Write your detailed article body in HTML format here...</p>"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm font-mono resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 mt-2">
               <select 
                 value={blogForm.status} 
                 onChange={(e) => setBlogForm({...blogForm, status: e.target.value as 'DRAFT' | 'PUBLISHED'})}
                 className="px-4 py-2 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 text-white text-sm focus:outline-none"
               >
                 <option value="PUBLISHED">Published</option>
                 <option value="DRAFT">Draft</option>
               </select>
               <label className="text-sm text-slate-300">Article Status</label>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-accent-purple to-primary-500 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              {blogForm.id ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              <span>{blogForm.id ? 'Save Changes' : 'Publish Article'}</span>
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-bold text-white">Manage Blogs</h2>
            </div>
            <button
              onClick={() => { setBlogForm(initialForm); setIsEditing(true); }}
              className="px-4 py-2 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" /> Add Blog
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="glass-card p-5 rounded-xl flex items-center justify-between border border-white/5">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-white font-bold text-lg">{blog.title}</h4>
                    {blog.status === 'DRAFT' && <span className="text-[10px] px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded font-bold uppercase">Draft</span>}
                  </div>
                  <p className="text-slate-400 text-xs mt-1">{blog.category} &bull; {blog.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditClick(blog)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(blog.id!)} className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-all">
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

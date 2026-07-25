import React, { useState, useEffect } from 'react';
import { portfolioApi } from '@/services/api';
import { PortfolioItem } from '@/types';
import { Image as ImageIcon, Plus, Edit2, Trash2, Check, X } from 'lucide-react';

interface ManagePortfolioTabProps {
  token: string;
}

export default function ManagePortfolioTab({ token }: ManagePortfolioTabProps) {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: 'IDLE', msg: '' });

  const initialForm: Partial<PortfolioItem> = {
    title: '', description: '', imageUrl: '', category: 'Development', technologies: '', client: ''
  };
  const [itemForm, setItemForm] = useState<Partial<PortfolioItem>>(initialForm);

  useEffect(() => {
    loadItems();
  }, [token]);

  const loadItems = async () => {
    setIsLoading(true);
    try {
      const data = await portfolioApi.getAll();
      setItems(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionStatus({ type: 'IDLE', msg: '' });

    try {
      if (itemForm.id) {
        // Edit
        await portfolioApi.update(itemForm.id, itemForm, token);
        setItems(items.map(p => p.id === itemForm.id ? { ...p, ...itemForm } as PortfolioItem : p));
        setActionStatus({ type: 'SUCCESS', msg: 'Portfolio item updated successfully!' });
      } else {
        // Create
        const newItem = await portfolioApi.create(itemForm, token);
        setItems([newItem, ...items]);
        setActionStatus({ type: 'SUCCESS', msg: 'Portfolio item created successfully!' });
      }
      setIsEditing(false);
      setItemForm(initialForm);
    } catch (err) {
      setActionStatus({ type: 'ERROR', msg: 'Failed to save portfolio item.' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this portfolio item?')) return;
    try {
      await portfolioApi.delete(id, token);
      setItems(items.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (item: PortfolioItem) => {
    setItemForm(item);
    setIsEditing(true);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  const handleCancelEdit = () => {
    setItemForm(initialForm);
    setIsEditing(false);
    setActionStatus({ type: 'IDLE', msg: '' });
  };

  if (isLoading) return <div className="p-8 text-center text-slate-400">Loading Portfolio...</div>;

  return (
    <div className="flex flex-col gap-6">
      
      {/* Action Banner */}
      {actionStatus.type === 'SUCCESS' && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm flex items-center gap-2">
          <Check className="w-4.5 h-4.5" />
          <span>{actionStatus.msg}</span>
        </div>
      )}

      {isEditing || items.length === 0 ? (
        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSaveItem} className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-extrabold text-xl">{itemForm.id ? 'Edit Portfolio Item' : 'Add Portfolio Item'}</h3>
              {isEditing && (
                <button type="button" onClick={handleCancelEdit} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Project Title *</label>
                <input
                  type="text" required
                  value={itemForm.title}
                  onChange={(e) => setItemForm({ ...itemForm, title: e.target.value })}
                  placeholder="e.g. Nexa E-Commerce Platform"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Category *</label>
                <input
                  type="text" required
                  value={itemForm.category}
                  onChange={(e) => setItemForm({ ...itemForm, category: e.target.value })}
                  placeholder="e.g. Web Development / Design"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Project Description *</label>
              <textarea
                required rows={3}
                value={itemForm.description}
                onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                placeholder="Brief summary of the project goals and outcomes..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Image URL *</label>
              <input
                type="text" required
                value={itemForm.imageUrl}
                onChange={(e) => setItemForm({ ...itemForm, imageUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Client (Optional)</label>
                <input
                  type="text"
                  value={itemForm.client || ''}
                  onChange={(e) => setItemForm({ ...itemForm, client: e.target.value })}
                  placeholder="e.g. TechCorp Inc."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Technologies (Comma separated)</label>
                <input
                  type="text"
                  value={itemForm.technologies || ''}
                  onChange={(e) => setItemForm({ ...itemForm, technologies: e.target.value })}
                  placeholder="React, Node.js, AWS"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 focus:border-primary-500/50 focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-accent-purple to-primary-500 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              {itemForm.id ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              <span>{itemForm.id ? 'Save Changes' : 'Publish Portfolio Item'}</span>
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
            <div className="flex items-center gap-3">
              <ImageIcon className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-bold text-white">Manage Portfolio</h2>
            </div>
            <button
              onClick={() => { setItemForm(initialForm); setIsEditing(true); }}
              className="px-4 py-2 bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 text-sm font-bold rounded-xl flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <div key={item.id} className="glass-card p-5 rounded-xl flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-4">
                  {item.imageUrl && (
                     <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 hidden sm:block">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                     </div>
                  )}
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{item.category} {item.client && `• ${item.client}`}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditClick(item)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id!)} className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-all">
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

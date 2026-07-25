import React, { useState, useEffect } from 'react';
import { contactApi } from '@/services/api';
import { ContactMessage } from '@/types';
import { Mail } from 'lucide-react';

interface ContactsTabProps {
  token: string;
}

export default function ContactsTab({ token }: ContactsTabProps) {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, [token]);

  const loadContacts = async () => {
    setIsLoading(true);
    try {
      const data = await contactApi.getAll(token);
      setContacts(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkRead = async (id: number) => {
    try {
      await contactApi.markRead(id, token);
      setContacts(contacts.map(c => c.id === id ? { ...c, read: true } : c));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      await contactApi.delete(id, token);
      setContacts(contacts.filter(c => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <div className="p-8 text-center text-slate-400">Loading Inquiries...</div>;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-2">
        <Mail className="w-5 h-5 text-primary-500" />
        <h2 className="text-xl font-bold text-white">Client Inquiries</h2>
      </div>

      {contacts.length === 0 ? (
        <div className="glass-card p-12 text-center text-slate-500 rounded-2xl">
          No inquiries found in the database.
        </div>
      ) : (
        contacts.map((msg) => (
          <div key={msg.id} className={`glass-card p-6 rounded-2xl flex flex-col justify-between border ${msg.read ? 'border-white/5' : 'border-primary-500/20 bg-primary-500/[0.01]'}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>{msg.name}</span>
                  {!msg.read && <span className="text-[10px] px-2 py-0.5 bg-primary-500/20 text-primary-500 rounded font-bold uppercase">New</span>}
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">{msg.email} &bull; {msg.phone || 'No phone'}</p>
              </div>
              <span className="text-slate-500 text-xs">{msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'Recent'}</span>
            </div>

            <div className="mb-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject: {msg.subject || 'General Inquiry'}</p>
              <p className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">{msg.message}</p>
            </div>

            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
              {!msg.read && (
                <button
                  onClick={() => handleMarkRead(msg.id!)}
                  className="px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 hover:bg-primary-500/20 text-primary-500 text-xs font-semibold rounded-lg transition-all"
                >
                  Mark Read
                </button>
              )}
              <button
                onClick={() => handleDelete(msg.id!)}
                className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold rounded-lg transition-all ml-auto"
              >
                Delete Record
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

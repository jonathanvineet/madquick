"use client";
export const dynamic = 'force-dynamic';
import { useEffect, useMemo, useState } from 'react';
import PasswordGenerator from '@/components/PasswordGenerator';
import { decryptJson, encryptJson, importKey, loadSessionKey, clearSessionKey } from '@/lib/crypto';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type VaultPlain = { title: string; username: string; password: string; url?: string; notes?: string };

type VaultItemWire = { _id: string; ciphertext: string; iv: string; createdAt?: string; updatedAt?: string };

export default function VaultPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [items, setItems] = useState<VaultItemWire[]>([]);
  const [decrypted, setDecrypted] = useState<Record<string, VaultPlain>>({});
  const [search, setSearch] = useState('');
  const [form, setForm] = useState<VaultPlain>({ title: '', username: '', password: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sessionKeyB64 = useMemo(() => loadSessionKey(), []);

  async function fetchItems() {
    const res = await fetch('/api/vault');
    if (!res.ok) return;
    const list: VaultItemWire[] = await res.json();
    setItems(list);
    if (sessionKeyB64) {
      try {
        const key = await importKey(sessionKeyB64);
        const map: Record<string, VaultPlain> = {};
        for (const it of list) {
          try { map[it._id] = await decryptJson<VaultPlain>(key, { ciphertext: it.ciphertext, iv: it.iv }); } catch {}
        }
        setDecrypted(map);
      } catch {}
    }
  }

  useEffect(() => { fetchItems(); }, []);

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/sign-in');
  }, [status, router]);

  const filtered = items.filter(it => {
    const p = decrypted[it._id];
    if (!p) return true; // until decrypted
    const q = search.toLowerCase();
    return [p.title, p.username, p.url, p.notes].filter(Boolean).some(v => v!.toLowerCase().includes(q));
  });

  async function saveItem() {
    if (!sessionKeyB64) { alert('Missing session key. Please sign in again.'); return; }
    const key = await importKey(sessionKeyB64);
    const payload = await encryptJson(key, form);
    if (editingId) {
      const res = await fetch(`/api/vault/${editingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (res.ok) { setForm({ title: '', username: '', password: '' }); setEditingId(null); fetchItems(); }
    } else {
      const res = await fetch('/api/vault', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (res.ok) { setForm({ title: '', username: '', password: '' }); fetchItems(); }
    }
  }

  async function editItem(it: VaultItemWire) {
    const p = decrypted[it._id];
    if (p) { setForm(p); setEditingId(it._id); }
  }

  async function deleteItem(id: string) {
    if (!confirm('Delete this item?')) return;
    const res = await fetch(`/api/vault/${id}`, { method: 'DELETE' });
    if (res.ok) fetchItems();
  }

  async function copyPassword(id: string) {
    const p = decrypted[id];
    if (!p) return;
    await navigator.clipboard.writeText(p.password);
    setCopiedId(id);
    setTimeout(async () => {
      try { await navigator.clipboard.writeText(''); } catch {}
      setCopiedId(null);
    }, 15000);
  }

  async function exportItems() {
    const res = await fetch('/api/vault');
    if (!res.ok) return;
    const list: VaultItemWire[] = await res.json();
    const blob = new Blob([JSON.stringify(list, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'vault-export.json'; a.click();
    URL.revokeObjectURL(url);
  }

  async function importItems(file: File) {
    const text = await file.text();
    let arr: VaultItemWire[] = [];
    try { arr = JSON.parse(text); } catch { alert('Invalid JSON'); return; }
    for (const it of arr) {
      if (!it.ciphertext || !it.iv) continue;
      await fetch('/api/vault', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ciphertext: it.ciphertext, iv: it.iv }) });
    }
    fetchItems();
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Vault</h2>
        <div className="row">
          <input className="input" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
          <Link href="/" className="btn">Home</Link>
          <button className="btn" onClick={() => { clearSessionKey(); signOut({ callbackUrl: '/' }); }}>Sign out</button>
          <button className="btn" onClick={exportItems}>Export</button>
          <label className="btn" style={{ cursor: 'pointer' }}>
            Import<input type="file" accept="application/json" style={{ display: 'none' }} onChange={e=>{ const f=e.target.files?.[0]; if (f) importItems(f); }} />
          </label>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Password Generator</h3>
          <PasswordGenerator onGenerated={pwd => setForm(f => ({ ...f, password: pwd }))} />
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>{editingId ? 'Edit Item' : 'Add Item'}</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({ ...form, title: e.target.value })} />
            <input className="input" placeholder="Username" value={form.username} onChange={e=>setForm({ ...form, username: e.target.value })} />
            <input className="input" placeholder="Password" value={form.password} onChange={e=>setForm({ ...form, password: e.target.value })} />
            <input className="input" placeholder="URL" value={form.url||''} onChange={e=>setForm({ ...form, url: e.target.value })} />
            <textarea className="input" placeholder="Notes" value={form.notes||''} onChange={e=>setForm({ ...form, notes: e.target.value })} />
            <div className="row">
              <button className="btn primary" onClick={saveItem}>{editingId ? 'Save Changes' : 'Add Item'}</button>
              {editingId && <button className="btn" onClick={() => { setEditingId(null); setForm({ title:'', username:'', password:'' }); }}>Cancel</button>}
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <h3 style={{ marginTop: 0 }}>Items</h3>
        <div className="list">
          {filtered.map(it => {
            const p = decrypted[it._id];
            return (
              <div className="item" key={it._id}>
                <div>
                  <div style={{ fontWeight: 600 }}>{p ? p.title : 'Encrypted…'}</div>
                  {p && <div className="badge">{p.username} • {p.url || ''}</div>}
                </div>
                <div className="row">
                  <button className="btn" onClick={()=>copyPassword(it._id)}>{copiedId===it._id? 'Copied (auto-clears)': 'Copy'}</button>
                  {p && <button className="btn" onClick={()=>editItem(it)}>Edit</button>}
                  <button className="btn danger" onClick={()=>deleteItem(it._id)}>Delete</button>
                </div>
              </div>
            );
          })}
          {!items.length && <div className="badge">No items yet.</div>}
        </div>
      </div>
    </div>
  );
}

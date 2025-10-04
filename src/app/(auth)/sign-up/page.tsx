"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function b64(bytes: ArrayBuffer) {
  const arr = new Uint8Array(bytes); let s=''; for (let i=0;i<arr.length;i++) s+=String.fromCharCode(arr[i]); return btoa(s);
}

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      const saltBytes = crypto.getRandomValues(new Uint8Array(16));
      const salt = b64(saltBytes.buffer);
      const res = await fetch('/api/sign-up', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, salt }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      router.push('/sign-in');
    } catch (err: any) {
      console.error(err); setError(err.message || 'Failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Create account</h2>
        <Link href="/sign-in" className="btn">Sign in</Link>
      </div>
      <form className="card" onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
        {error && <div style={{ color: 'var(--danger)' }}>{error}</div>}
        <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn primary" disabled={loading} type="submit">{loading? 'Creating…':'Create account'}</button>
      </form>
    </div>
  );
}

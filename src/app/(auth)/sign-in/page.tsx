"use client";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { deriveKeyFromPassword, exportKey, saveSessionKey } from '@/lib/crypto';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchSalt(email: string) {
    const res = await fetch(`/api/auth/salt?email=${encodeURIComponent(email)}`);
    if (!res.ok) throw new Error('User not found');
    const data = await res.json();
    return data.salt as string;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const salt = await fetchSalt(email);
      const key = await deriveKeyFromPassword(password, salt);
      const keyB64 = await exportKey(key);
      saveSessionKey(keyB64);
      const res = await signIn('credentials', { email, password, callbackUrl: '/vault', redirect: true });
      if (!res) throw new Error('Sign-in failed');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Sign in</h2>
        <Link href="/sign-up" className="btn">Create account</Link>
      </div>
      <form className="card" onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
        {error && <div style={{ color: 'var(--danger)' }}>{error}</div>}
        <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn primary" disabled={loading} type="submit">{loading? 'Signing in…':'Sign in'}</button>
      </form>
    </div>
  );
}

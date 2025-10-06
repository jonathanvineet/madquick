import Link from 'next/link';

export default async function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>MadQuick</h1>
        <h2>Vault</h2>
      </div>
      
      <div className="button-container">
        <Link href="/sign-in" className="btn">Sign In</Link>
        <Link href="/sign-up" className="btn primary">Create Account</Link>
        <Link href="/vault" className="btn">Vault</Link>
      </div>
      
      <div className="card">
        <p>Privacy-first password generator and secure vault. Client-side encryption. Minimal UI.</p>
      </div>
    </div>
  );
}

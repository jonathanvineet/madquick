import Link from 'next/link';

export default async function Home() {
  return (
    <div className="container">
      <div className="header">
        <h2>MadQuick Vault</h2>
        <div className="row"><Link href="/sign-in" className="btn">Sign in</Link><Link href="/sign-up" className="btn primary">Create account</Link><Link href="/vault" className="btn">Vault</Link></div>
      </div>
      <div className="card">
        <p>Privacy-first password generator and secure vault. Client-side encryption. Minimal UI.</p>
      </div>
    </div>
  );
}

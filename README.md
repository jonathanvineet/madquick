## MadQuick — Password Generator + Secure Vault (MVP)

A minimal, fast, privacy-first password manager MVP built with:

- Next.js (App Router) + TypeScript
- MongoDB (Atlas or local)
- NextAuth (email + password via Credentials)
- Client-side encryption using Web Crypto API (AES-GCM + PBKDF2)

### Features

- Strong password generator (length slider, include numbers/letters/symbols, exclude look-alikes)
- Simple auth (email + password)
- Vault items: title, username, password, URL, notes
- Client-side encryption: server stores only encrypted blobs
- Copy to clipboard with auto-clear (10–20s)
- Basic search/filter
- Optional: dark mode, export/import of encrypted data

### Crypto note (short)

- Uses Web Crypto API with AES-GCM for encryption/decryption on the client.
- Key derived with PBKDF2-SHA-256 from the user's password and a per-user salt; derived key is kept in sessionStorage for the session and never sent to the server.

---

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB connection string (MongoDB Atlas recommended)

### Setup

1) Copy env vars

```
cp .env.example .env.local
```

2) Fill in your values in `.env.local`:

- `MONGODB_URI` — your MongoDB connection string
- `NEXTAUTH_SECRET` — a random string (use `openssl rand -base64 32`)
- `NEXTAUTH_URL` — e.g. `http://localhost:3000` for local

3) Install deps and run

```
npm install
npm run dev
```

Open http://localhost:3000

### Usage flow

1) Sign up with email + password
2) Log in — the app derives a master key from your password (kept only in sessionStorage)
3) Generate a strong password using the generator panel
4) Save a vault item (title, username, password, URL, notes) — encrypted client-side
5) Search, edit, delete items — all decryption happens client-side
6) Copy password — clipboard clears after ~15s

### Deploy

- Easiest: Vercel + MongoDB Atlas
- Set Environment Variables on Vercel: `MONGODB_URI`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

### Acceptance checklist

- [x] Can sign up, log in, add an item; DB and network shows only encrypted blobs
- [x] Generator instant
- [x] Copy clears after ~10–20s
- [x] Basic search works client-side

### Notes

- This is an MVP; do not use in production without a thorough security review, rate-limiting, CSRF hardening, and secure headers. Consider 2FA and secure key handling improvements.

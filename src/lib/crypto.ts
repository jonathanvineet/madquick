// Client-side crypto utilities using Web Crypto API
"use client";

export type EncryptedBlob = { ciphertext: string; iv: string };

function toArrayBuffer(b64: string): ArrayBuffer {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

function toBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

export async function deriveKeyFromPassword(password: string, saltB64: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']);
  const salt = toArrayBuffer(saltB64);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 200_000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

export async function exportKey(key: CryptoKey): Promise<string> {
  const raw = await crypto.subtle.exportKey('raw', key);
  return toBase64(raw);
}

export async function importKey(b64: string): Promise<CryptoKey> {
  const raw = toArrayBuffer(b64);
  return crypto.subtle.importKey('raw', raw, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
}

export async function encryptJson(key: CryptoKey, data: unknown): Promise<EncryptedBlob> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();
  const plaintext = enc.encode(JSON.stringify(data));
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);
  return { ciphertext: toBase64(ct), iv: toBase64(iv.buffer) };
}

export async function decryptJson<T>(key: CryptoKey, blob: EncryptedBlob): Promise<T> {
  const iv = new Uint8Array(toArrayBuffer(blob.iv));
  const ct = toArrayBuffer(blob.ciphertext);
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
  const dec = new TextDecoder();
  return JSON.parse(dec.decode(pt)) as T;
}

export function saveSessionKey(b64: string) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('vault_key', b64);
}
export function loadSessionKey(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('vault_key');
}
export function clearSessionKey() {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('vault_key');
}

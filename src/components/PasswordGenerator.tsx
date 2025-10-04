"use client";
import { useEffect, useMemo, useState } from 'react';

const LOOK_ALIKES = /[O0Il1S5B8G6]/g; // simplistic set

function randomChoice<T>(arr: T[], rng: () => number) { return arr[Math.floor(rng() * arr.length)]; }

function createRng() {
  const cryptoObj = globalThis.crypto || (window as any).crypto;
  return () => cryptoObj.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
}

export default function PasswordGenerator({ onGenerated }: { onGenerated?: (pwd: string) => void }) {
  const [length, setLength] = useState(16);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [excludeLookAlikes, setExcludeLookAlikes] = useState(true);
  const [value, setValue] = useState('');

  const rng = useMemo(() => createRng(), []);

  const charset = useMemo(() => {
    let chars = '';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useDigits) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()-_=+[]{};:,.<>/?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    if (excludeLookAlikes) chars = chars.replace(LOOK_ALIKES, '');
    return chars.split('');
  }, [useLower, useUpper, useDigits, useSymbols, excludeLookAlikes]);

  const generate = () => {
    const chars = charset;
    const arr: string[] = [];
    for (let i = 0; i < length; i++) arr.push(randomChoice(chars, rng));
    const pwd = arr.join('');
    setValue(pwd);
    onGenerated?.(pwd);
  };

  useEffect(() => { generate(); /* regen on settings change */ }, [length, charset]);

  return (
    <div className="card" style={{ display: 'grid', gap: 8 }}>
      <div className="row" style={{ alignItems: 'center' }}>
        <input className="input" style={{ flex: 1 }} value={value} readOnly />
        <button className="btn" onClick={generate}>Regenerate</button>
      </div>
      <div className="row" style={{ alignItems: 'center' }}>
        <label className="label">Length: {length}</label>
        <input type="range" min={8} max={64} value={length} onChange={e => setLength(parseInt(e.target.value))} />
      </div>
      <div className="row">
        <label><input type="checkbox" checked={useLower} onChange={e => setUseLower(e.target.checked)} /> lower</label>
        <label><input type="checkbox" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} /> upper</label>
        <label><input type="checkbox" checked={useDigits} onChange={e => setUseDigits(e.target.checked)} /> digits</label>
        <label><input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} /> symbols</label>
        <label><input type="checkbox" checked={excludeLookAlikes} onChange={e => setExcludeLookAlikes(e.target.checked)} /> exclude look-alikes</label>
      </div>
    </div>
  );
}

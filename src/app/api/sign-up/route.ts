import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password, salt } = await req.json();
  if (!email || !password || !salt) return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  await dbConnect();
  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) return NextResponse.json({ error: 'User exists' }, { status: 409 });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email: email.toLowerCase(), passwordHash, salt });
  return NextResponse.json({ ok: true, id: (user as any)._id.toString() });
}

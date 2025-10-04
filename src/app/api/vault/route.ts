import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { dbConnect } from '@/lib/db';
import { VaultItem } from '@/models/VaultItem';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  await dbConnect();
  const items = await VaultItem.find({ userId: (session.user as any).id }).sort({ updatedAt: -1 });
  return NextResponse.json(items.map((i: any) => ({ _id: i._id.toString(), ciphertext: i.ciphertext, iv: i.iv, createdAt: i.createdAt, updatedAt: i.updatedAt })));
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const { ciphertext, iv } = await req.json();
  if (!ciphertext || !iv) return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  await dbConnect();
  const created: any = await VaultItem.create({ userId: (session.user as any).id, ciphertext, iv });
  return NextResponse.json({ _id: created._id.toString() });
}

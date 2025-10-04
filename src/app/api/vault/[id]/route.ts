import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { dbConnect } from '@/lib/db';
import { VaultItem } from '@/models/VaultItem';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const { ciphertext, iv } = await req.json();
  if (!ciphertext || !iv) return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  await dbConnect();
  const updated: any = await VaultItem.findOneAndUpdate({ _id: params.id, userId: (session.user as any).id }, { ciphertext, iv }, { new: true });
  if (!updated) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  await dbConnect();
  await VaultItem.findOneAndDelete({ _id: params.id, userId: (session.user as any).id });
  return NextResponse.json({ ok: true });
}

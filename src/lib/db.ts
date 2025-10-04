import mongoose from 'mongoose';

let cached = (global as any).mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined;

if (!cached) cached = (global as any).mongoose = { conn: null, promise: null };

export async function dbConnect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Missing MONGODB_URI');
  if (cached!.conn) return cached!.conn;
  if (!cached!.promise) {
    cached!.promise = mongoose.connect(uri).then((m) => m);
  }
  cached!.conn = await cached!.promise;
  return cached!.conn;
}

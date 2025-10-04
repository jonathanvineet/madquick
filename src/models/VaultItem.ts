import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVaultItem extends Document {
  userId: string; // references User._id
  ciphertext: string; // base64 AES-GCM
  iv: string; // base64 12-byte IV
  createdAt: Date;
  updatedAt: Date;
}

const VaultItemSchema = new Schema<IVaultItem>({
  userId: { type: String, required: true, index: true },
  ciphertext: { type: String, required: true },
  iv: { type: String, required: true }
}, { timestamps: true });

export const VaultItem: Model<IVaultItem> = mongoose.models.VaultItem || mongoose.model<IVaultItem>('VaultItem', VaultItemSchema);

export type Client = {
  id: string;
  name: string;
  telegramUsername?: string;
  phone?: string;
  email?: string;
  loyaltyLevel: 1 | 2 | 3;
  createdAt: string;
  updatedAt?: string;
};

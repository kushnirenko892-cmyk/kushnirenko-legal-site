export type LoyaltyReward = {
  id: string;
  title: string;
  description: string;
  requiredLevel: 1 | 2 | 3;
  type: "consultation" | "guide" | "discount" | "priority" | "kush";
  isActive: boolean;
};

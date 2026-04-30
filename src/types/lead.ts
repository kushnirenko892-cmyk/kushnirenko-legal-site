export type LeadDirection = "business" | "licensing" | "trades" | "kush" | "other";

export type LeadStatus =
  | "new"
  | "contacted"
  | "consultation_booked"
  | "in_progress"
  | "closed"
  | "rejected";

export type Lead = {
  id?: string;
  clientId?: string;
  source: "site" | "telegram";
  direction: LeadDirection;
  message: string;
  status: LeadStatus;
  assignedTo?: string;
  createdAt: string;
  updatedAt?: string;
};

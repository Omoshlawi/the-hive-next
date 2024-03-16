import { Entity } from "../../types/base";
import { Payment } from "../billing";
import { User } from "../users";

export interface Pricing extends Entity {
  id: string;
  name: string;
  billingInterval: "yearly" | "monthly";
  price: number;
  description: string | null;
  featurePricing: FeaturePricing[];
}

export interface Feature extends Entity {
  id: string;
  name: string;
  code: "listings" | "properties" | "groups";
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  featurePricing: FeaturePricing[];
}

export interface FeaturePricing {
  id: string;
  pricingId?: string;
  featureId?: string;
  limit?: number;
  included?: boolean;
  pricing?: Pricing;
  feature?: Feature;
}

export interface UserSubscription extends Entity {
  id: string;
  user: Partial<User>;
  pricingId?: string;
  pricing?: Partial<Pricing>;
  payment: Partial<Payment>;
  startDate: string;
  endDate: string;
  status: "active" | "cancelled" | "expired";
  cancellationDate?: string;
  cancellationReason?: string;
}

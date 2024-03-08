import { Entity } from "../../types/base";

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
  user: string;
  featurePricingLimitId?: string;
  featurePricing: FeaturePricing;
  startDate: string;
  endDate: string;
  status: "active" | "cancelled" | "expired";
  cancellationDate?: string;
  cancellationReason?: string;
}

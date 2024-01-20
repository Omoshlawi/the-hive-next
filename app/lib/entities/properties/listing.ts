import { Entity } from "../../types/base";

export interface Listing extends Entity {
  title: string;
  description: string;
  available: boolean;
  price: boolean;
  tags: string[];
  amenities: string[];
  coverImage: string;
  published: boolean;
}

export interface ListingProperty extends Entity {
  listing: string | number;
  property: string | number;
}

export interface ListingProperty extends Entity {
  listing: string | number;
  property: string | number;
}

export interface RentalListing extends Entity {
  listing: string | number;
  deposit: number;
}

export interface SalesListing extends Entity {
  listing: string | number;
  deposit: number;
  downPayment: number;
}

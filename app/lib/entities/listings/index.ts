import { Entity } from "../../types/base";
import { UploadFile } from "../files";
import { Person } from "../users";

export interface Listing extends Entity {
  id: string;
  title: string;
  description: string;
  available: boolean;
  price: number;
  tags: string[];
  amenities: string[];
  coverImage: UploadFile;
  published: boolean;
  properties: ListingProperty[];
  rental: RentalListing;
  sale?: SaleListing;
  tourHours: string[];
  tourSchedules: TourSchedule[];
}

export interface ListingProperty extends Entity {
  id: string;
  listing: Listing;
  property: string;
  note?: string;
}

export interface TourSchedule extends Entity {
  id: string;
  listingId: string;
  listing: Listing;
  date: string;
  time: string;
  person: Person;
  notes: string;
  status: string;
}

export interface RentalListing extends Entity {
  id: string;
  listing: Listing;
  depositRequired: number;
  renewalInterval: number;
}

export interface SaleListing extends Entity {
  id: string;
  listing: Listing;
  downPaymentRequired: number;
  closingDate: string;
  mortgageOptions?: string;
}

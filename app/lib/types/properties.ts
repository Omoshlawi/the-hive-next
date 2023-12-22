type ImageType = {
  id: number;
  image: string;
};

type PropertyLocation = {
  id: number;
  url: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  longitude: string;
  latitude: string;
  created_at: string;
  updated_at: string;
};

type Property = {
  id: string;
  url: string;
  title: string;
  slug: string;
  sqft_size?: string;
  date_build?: string;
  type: string[];
  images: ImageType[];
  attributes: string[];
  property_amenities: string[];
  description?: string;
  property_location: PropertyLocation;
  created_at: string;
  updated_at: string;
};

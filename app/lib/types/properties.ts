type ImageType = {
  id: number;
  image: string;
};

type PropertyGroupMemberShip = {
  id: number;
  url: string;
  group: string;
  property: string;
  date_joined: string;
  notes: string;
  created_at: string;
  updated_at: string;
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

type PropertyGroup = {
  id: string;
  url: string;
  title: string;
  slug: string;
  desscription: String;
  tags: string[];
  cover_image: string;
  created_at: string;
  updated_at: string;
  properties_membership: PropertyGroupMemberShip[];
};

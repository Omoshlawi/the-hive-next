import { Entity } from "../../types/base";

export interface PlaceSearchResult extends Entity {
  display?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  name?: string;
  properties: {
    country?: string;
    countryCode?: string;
    county?: string;
    street?: string;
    city?: string;
    type?: string;
  };
}

// export interface ReverseGeoCodeReslt extends Entity {
//   id: string;
//   gid: string;
//   layer: string;
//   source?: string;
//   source_id: string;
//   name: string;
//   confidence: number;
//   distance: number;
//   accuracy: string;
//   country: string;
//   country_gid: string;
//   country_a: string;
//   region: string;
//   region_gid: string;
//   region_a: string;
//   county: string;
//   county_gid: "whosonfirst:county:1091912587";
//   county_a: "TR";
//   continent: "Africa";
//   continent_gid: string;
//   label: "Tana River, CO, Kenya";
// }

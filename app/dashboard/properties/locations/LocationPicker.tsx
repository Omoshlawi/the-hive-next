import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface Props {
  location?: { lat: number; lng: number };
}

const LocationPicker: React.FC<Props> = ({
  location = { lat: -1.2830191496405818, lng: 36.82313146758021 },
}) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={location}
        zoom={13}
      ></GoogleMap>
    </LoadScript>
  );
};

export default LocationPicker;

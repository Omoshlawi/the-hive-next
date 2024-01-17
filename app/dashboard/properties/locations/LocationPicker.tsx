import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {};

const LocationPicker = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: -1.2830191496405818, lng: 36.82313146758021 }}
        zoom={13}
      ></GoogleMap>
    </LoadScript>
  );
};

export default LocationPicker;

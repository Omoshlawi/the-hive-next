"use client";
import React, { useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Skeleton } from "../ui/skeleton";

interface Props {
  lat: number;
  lng: number;
  display: string;
}

const LocationPlotter: React.FC<Props> = ({ display, lat, lng }) => {
  const ref = useRef(null);
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      loadingElement={<Skeleton className="w-full h-full rounded-md" />}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat, lng }}
        zoom={13}
      >
        <MarkerF position={{ lat, lng }}>
          <InfoWindowF position={{ lat, lng }} >
            <div className="text-black">
              <p>{display}</p>
            </div>
          </InfoWindowF>
        </MarkerF>
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationPlotter;

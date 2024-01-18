import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Skeleton } from "@/app/components/ui/skeleton";
import { useApiClient } from "@/app/lib/api";
import { PlaceSearchResult } from "@/app/lib/entities/maps";
interface Props {
  location?: PlaceSearchResult;
  onLocationChange?: (location: PlaceSearchResult) => void;
}
const LocationPicker: React.FC<Props> = ({
  location = {
    coordinates: { lat: -1.2830191496405818, lng: 36.82313146758021 },
    properties: {},
  },
  onLocationChange,
}) => {
  const { request, loading, data, error } = useApiClient();
  const [focusCoords, setFocusCoords] = useState<{
    lat: number;
    lng: number;
  }>();
  const handleReverseGeoCode = async (coords: { lat: number; lng: number }) => {
    await request({
      url: `maps/geocoding/reverse?location=${coords.lat},${coords.lng}`,
      method: "GET",
    });
  };
  useEffect(() => {
    if (
      (location && !focusCoords) ||
      (focusCoords &&
        location &&
        (focusCoords.lat !== location.coordinates.lat ||
          focusCoords.lng !== location.coordinates.lng))
    )
      setFocusCoords(location.coordinates);
  }, [location]);
  useEffect(() => {
    if (focusCoords) handleReverseGeoCode(focusCoords!);
  }, [focusCoords]);
  // const reverse = data?.results?.[0]?.locations?.[0].label;
  useEffect(() => {
    const reverse = data?.results?.[0]?.locations?.[0].label;
    const country = data?.results?.[0]?.locations?.[0].country;
    const county = data?.results?.[0]?.locations?.[0].county;
    const countryCode = data?.results?.[0]?.locations?.[0].country_a;
    const coordinates = data?.results?.[0]?.providedLocation;
    if (reverse) {
      onLocationChange?.({
        coordinates,
        properties: {
          country,
          countryCode,
          county,
        },
        display: reverse,
        name: reverse,
      });
    }
  }, [data]);
  return (
    <>
      {!focusCoords && <Skeleton className="w-full h-full rounded-md" />}
      {focusCoords && (
        <LoadScript
          googleMapsApiKey={
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
          }
          loadingElement={<Skeleton className="w-full h-full rounded-md" />}
        >
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={focusCoords}
            zoom={13}
          >
            <MarkerF
              position={focusCoords}
              draggable
              onDragEnd={({ latLng }) => {
                const coords = { lat: latLng!.lat(), lng: latLng!.lng() };
                handleReverseGeoCode(coords);
                // onLocationChange?.(coords);
              }}
            >
              <InfoWindowF position={focusCoords}>
                <div className="text-black">
                  <p>{location.display ?? "Drag to change location"}</p>
                </div>
              </InfoWindowF>
            </MarkerF>
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default LocationPicker;

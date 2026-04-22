"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { divIcon } from "leaflet";
import type { TravelLocation } from "@/app/travel/travel-data";

const markerIcon = divIcon({
  className: "travel-dot-wrapper",
  html: '<span class="travel-dot"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export default function TravelMap({
  locations,
  heightClassName = "h-[480px]",
}: {
  locations: TravelLocation[];
  heightClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-stone-200/80 shadow-[0_24px_70px_rgba(51,42,33,0.08)] ${heightClassName}`}
    >
      <MapContainer
        center={[33, 10]}
        zoom={2}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {locations.map((location) => (
          <Marker key={location.name} position={location.coords} icon={markerIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

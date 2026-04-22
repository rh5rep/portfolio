"use client";

import dynamic from "next/dynamic";
import type { TravelLocation } from "./travel-data";

const TravelMap = dynamic(() => import("@/components/TravelMap"), { ssr: false });

export default function MapPanel({
  locations,
  heightClassName,
}: {
  locations: TravelLocation[];
  heightClassName?: string;
}) {
  return <TravelMap locations={locations} heightClassName={heightClassName} />;
}

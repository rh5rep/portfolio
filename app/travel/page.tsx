"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { name: 'District of Columbia', coords: [38.907132, -77.036546] as [number, number] },
  { name: 'Concord', coords: [43.20814, -71.53757] as [number, number] },
  { name: 'Boston', coords: [42.35843, -71.05977] as [number, number] },
  { name: 'San Fransisco', coords: [37.773972, -122.431297] as [number, number] },
  { name: 'Beirut', coords: [33.8938, 35.5018] as [number, number] },
  { name: 'La Fortuna', coords: [10.4625, -84.7033] as [number, number] },
  { name: 'Monteverde', coords: [10.3084, -84.8046] as [number, number] },
  { name: 'Tamarindo', coords: [10.2998, -85.8374] as [number, number] },
  { name: 'London', coords: [51.5074, -0.1278] as [number, number] },
  { name: 'Cambridge', coords: [52.2053, 0.1218] as [number, number] },
  { name: 'York', coords: [53.9591, -1.0815] as [number, number] },
  { name: 'Skye', coords: [57.5359, -6.2263] as [number, number] },
  { name: 'Edinburgh', coords: [55.9533, -3.1883] as [number, number] },
  { name: 'Paris', coords: [48.8566, 2.3522] as [number, number] },
  { name: 'Geneva', coords: [46.2044, 6.1432] as [number, number] },
  { name: 'Milan', coords: [45.4642, 9.1900] as [number, number] },
  { name: 'Venice', coords: [45.4408, 12.3155] as [number, number] },
  { name: 'Passo di Giau', coords: [46.4825, 12.053889] as [number, number] },
  { name: 'Bologna', coords: [44.4949, 11.3426] as [number, number] },
  { name: 'Florence', coords: [43.7696, 11.2558] as [number, number] },
  { name: 'Rome', coords: [41.9028, 12.4964] as [number, number] },
  { name: 'Napoli', coords: [40.8522, 14.2681] as [number, number] },
  { name: 'Pompeii', coords: [40.7510, 14.4924] as [number, number] },
  { name: 'Barcelona', coords: [41.3851, 2.1734] as [number, number] },
  { name: 'Madrid', coords: [40.4168, -3.7038] as [number, number] },
  { name: 'Pula', coords: [44.8666, 13.8496] as [number, number] },
  { name: 'Zadar', coords: [44.1194, 15.2314] as [number, number] },
  { name: 'Split', coords: [43.5081, 16.4402] as [number, number] },
  { name: 'Mostar', coords: [43.34333, 17.80806] as [number, number] },
  { name: 'Dubrovnik', coords: [42.6507, 18.0944] as [number, number] },
  { name: 'Kotor', coords: [42.4247, 18.7712] as [number, number] },
  { name: 'Belgrade', coords: [44.7866, 20.4489] as [number, number] },
  { name: 'Budapest', coords: [47.4979, 19.0402] as [number, number] },
  { name: 'Vienna', coords: [48.2082, 16.3738] as [number, number] },
  { name: 'Munich', coords: [48.1351, 11.5820] as [number, number] },
  { name: 'Prague', coords: [50.0755, 14.4378] as [number, number] },
  { name: 'Sevilla', coords: [37.3886, -5.9823] as [number, number] },
  { name: 'Cancun', coords: [21.1619, -86.8515] as [number, number] },
  { name: 'Colorado Springs', coords: [38.8339, -104.8214] as [number, number] },
  { name: 'St. Pete Beach', coords: [27.7465, -82.7415] as [number, number] },
  { name: 'Los Angeles', coords: [34.0522, -118.2437] as [number, number] },
  { name: 'Santa Monica', coords: [34.005166646, -118.49249803] as [number, number] },
  { name: 'Las Vegas', coords: [36.17497, -115.13722] as [number, number] },
  { name: 'Yosemite', coords: [37.8651, -119.5383] as [number, number] },
  { name: 'Grand Canyon', coords: [36.1069, -112.1129] as [number, number] },
  { name: 'Beijing', coords: [39.9042, 116.4074] as [number, number] },
  { name: 'Lagos', coords: [37.1020, -8.6741] as [number, number] },
  { name: 'Lisbon', coords: [38.7223, -9.1393] as [number, number] },
  { name: 'Porto', coords: [41.1579, -8.6291] as [number, number] },
  { name: 'Oranjestad', coords: [12.5211, -69.9683] as [number, number] },
  { name: 'Cuernavaca', coords: [18.9242, -99.2216] as [number, number] },
  { name: 'Montreal', coords: [45.5017, -73.5673] as [number, number] },
  { name: 'Mexico City', coords: [19.4326, -99.1332] as [number, number] },
  { name: "Larnaca", coords: [34.92291, 33.6233] as [number, number] },
  { name: "Hanoi", coords: [21.0285, 105.8542] as [number, number] },
  { name: "Ha Long Bay", coords: [20.9101, 107.1839] as [number, number] },
  { name: "Ha Giang", coords: [22.8136, 104.9836] as [number, number] },
  { name: "Ninh Binh", coords: [20.2528, 105.9750] as [number, number] },
  { name: "Phong Nha", coords: [17.5904, 106.2838] as [number, number] },
  { name: "Hoi An", coords: [15.8801, 108.3380] as [number, number] },
  { name: "Bangkok", coords: [13.7563, 100.5018] as [number, number] },
  { name: "Chiang Mai", coords: [18.7061, 98.9817] as [number, number] },
  { name: "Pai", coords: [19.3592, 98.4396] as [number, number] },
  { name: "Krabi", coords: [8.0863, 98.9063] as [number, number] },
  { name: "Koh Phi Phi", coords: [7.7407, 98.7784] as [number, number] },
  { name: "Koh Tao", coords: [10.09808, 99.83809] as [number, number] },
  { name: "Koh Phanang", coords: [9.7317, 100.0136] as [number, number] },
];

// Dynamically import MapContainer to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function Travel() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">Travel</h1>
        
        <p className="text-center p-4">
          Exploring new destinations has always been a passion of mine. Each journey, 
          whether immersed in unique languages, enriched cultural experiences, or the 
          thrilling adventure of exploration, holds its own special significance. It is 
          only right that I have incorporated a map highlighting the remarkable places 
          I have traveled to on my website.
        </p>

        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg my-8">
          <MapContainer
            center={[30, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.coords} icon={icon}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
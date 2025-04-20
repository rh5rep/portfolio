import Map from '../components/Map';
import styles from '../styles/Home.module.css';
import Layout from "../components/layout";
import { Center, Text, useColorMode } from '@chakra-ui/react';

const locations = [
  { name: 'District of Columbia', coords: [38.907132, -77.036546] },
  { name: 'Concord', coords: [43.20814, -71.53757] },
  { name: 'Boston', coords: [42.35843, -71.05977] },
  { name: 'San Fransisco', coords: [37.773972, -122.431297] },
  { name: 'Beirut', coords: [33.8938, 35.5018] },
  { name: 'La Fortuna', coords: [10.4625, -84.7033] },
  { name: 'Monteverde', coords: [10.3084, -84.8046] },
  { name: 'Tamarindo', coords: [10.2998, -85.8374] },
  { name: 'London', coords: [51.5074, -0.1278] },
  { name: 'Cambridge', coords: [52.2053, 0.1218] },
  { name: 'York', coords: [53.9591, -1.0815] },
  { name: 'Skye', coords: [57.5359, -6.2263] },
  { name: 'Edinburgh', coords: [55.9533, -3.1883] },
  { name: 'Paris', coords: [48.8566, 2.3522] },
  { name: 'Geneva', coords: [46.2044, 6.1432] },
  { name: 'Milan', coords: [45.4642, 9.1900] },
  { name: 'Venice', coords: [45.4408, 12.3155] },
  { name: 'Passo di Giau', coords: [46.4825, 12.053889] },
  { name: 'Bologna', coords: [44.4949, 11.3426] },
  { name: 'Florence', coords: [43.7696, 11.2558] },
  { name: 'Rome', coords: [41.9028, 12.4964] },
  { name: 'Napoli', coords: [40.8522, 14.2681] },
  { name: 'Pompeii', coords: [40.7510, 14.4924] },
  { name: 'Barcelona', coords: [41.3851, 2.1734] },
  { name: 'Madrid', coords: [40.4168, -3.7038] },
  { name: 'Pula', coords: [44.8666, 13.8496] },
  { name: 'Zadar', coords: [44.1194, 15.2314] },
  { name: 'Split', coords: [43.5081, 16.4402] },
  { name: 'Mostar', coords: [43.34333, 17.80806] },
  { name: 'Dubrovnik', coords: [42.6507, 18.0944] },
  { name: 'Kotor', coords: [42.4247, 18.7712] },
  { name: 'Belgrade', coords: [44.7866, 20.4489] },
  { name: 'Budapest', coords: [47.4979, 19.0402] },
  { name: 'Vienna', coords: [48.2082, 16.3738] },
  { name: 'Munich', coords: [48.1351, 11.5820] },
  { name: 'Prague', coords: [50.0755, 14.4378] },
  { name: 'Sevilla', coords: [37.3886, -5.9823] },
  { name: 'Cancun', coords: [21.1619, -86.8515] },
  { name: 'Colorado Springs', coords: [38.8339, -104.8214] },
  { name: 'St. Pete Beach', coords: [27.7465, -82.7415] },
  { name: 'Los Angeles', coords: [34.0522, -118.2437] },
  { name: 'Santa Monica', coords: [34.005166646, -118.49249803] },
  { name: 'Las Vegas', coords: [36.17497, -115.13722] },
  { name: 'Yosemite', coords: [37.8651, -119.5383] },
  { name: 'Grand Canyon', coords: [36.1069, -112.1129] },
  { name: 'Beijing', coords: [39.9042, 116.4074] },
  { name: 'Lagos', coords: [37.1020, -8.6741] },
  { name: 'Lisbon', coords: [38.7223, -9.1393] },
  { name: 'Porto', coords: [41.1579, -8.6291] },
  { name: 'Oranjestad', coords: [12.5211, -69.9683] },
  { name: 'Cuernavaca', coords: [18.9242, -99.2216] },
  { name: 'Montreal', coords: [45.5017, -73.5673] },
  { name: 'Mexico City', coords: [19.4326, -99.1332] },
  { name: "Larnaca", coords: [34.92291, 33.6233] },
  { name: "Hanoi", coords: [21.0285, 105.8542] },
  { name: "Ha Long Bay", coords: [20.9101, 107.1839] },
  { name: "Ha Giang", coords: [22.8136, 104.9836] },
  { name: "Ninh Binh", coords: [20.2528, 105.9750] },
  { name: "Phong Nha", coords: [17.5904, 106.2838] },
  { name: "Hoi An", coords: [15.8801, 108.3380] },
  { name: "Bangkok", coords: [13.7563, 100.5018] },
  { name: "Chiang Mai", coords: [18.7061, 98.9817] },
  { name: "Pai", coords: [19.3592, 98.4396] },
  { name: "Krabi", coords: [8.0863, 98.9063] },
  { name: "Koh Phi Phi", coords: [7.7407, 98.7784] },
  { name: "Koh Tao", coords: [10.09808, 99.83809] },
  { name: "Koh Phanang", coords: [9.7317, 100.0136] },
];

export default function Travel({ Component, pageProps }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div>
      <Center>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Center>
      <Text align={"center"} p={"1rem"}>
        Exploring new destinations has always been a passion of mine. Each journey, whether immersed in unique languages, enriched cultural experiences, or the thrilling adventure of exploration, holds its own special significance. It is only right that I have incorporated a map highlighting the remarkable places I have traveled to on my website.
      </Text>
      <Map width="800" height="400" center={[43.20814, -71.53757]} zoom={10}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.coords}>
                <Popup>
                  {location.name}
                </Popup>
              </Marker>
            ))}
          </>
        )}
      </Map>
    </div>
  );
}

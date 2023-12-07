import Map from '../components/Map';
import styles from '../styles/Home.module.css';
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Flex, VStack, Text, Center } from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode";

const CONCORD = [43.20814, -71.53757];
const BOSTON = [42.35843, -71.05977];
const SF = [37.773972, -122.431297];
const DC = [38.907132, -77.036546];
const BEIRUT = [33.8938, 35.5018];
const LAFORTUNA = [10.4625, -84.7033];
const MONTEVERDE = [10.3084, -84.8046];
const TAMARINDO = [10.2998, -85.8374];
const LONDON = [51.5074, -0.1278];
const CAMBRIDGE = [52.2053, 0.1218];
const YORK = [53.9591, -1.0815];
const SKYE = [57.5359, -6.2263];
const EDINBURGH = [55.9533, -3.1883];
const PARIS = [48.8566, 2.3522];
const GENEVA = [46.2044, 6.1432];
const MILAN = [45.4642, 9.1900];
const VENICE = [45.4408, 12.3155];
const ALLEGHE = [46.4825, 12.053889];
const BOLOGNA = [44.4949, 11.3426];
const FLORENCE = [43.7696, 11.2558];
const ROME = [41.9028, 12.4964];
const NAPOLI = [40.8522, 14.2681];
const POMPEII = [40.7510, 14.4924];
const BARCELONA = [41.3851, 2.1734];
const MADRID = [40.4168, -3.7038];
const SEVILLA = [37.3886, -5.9823];
const LAGOS = [37.1020, -8.6741];
const LISBON = [38.7223, -9.1393];
const PORTO = [41.1579, -8.6291];
const PULA = [44.8666, 13.8496];
const ZADAR = [44.1194, 15.2314];
const SPLIT = [43.5081, 16.4402];
const DUBROVNIK = [42.6507, 18.0944];
const KOTOR = [42.4247, 18.7712];
const BELGRADE = [44.7866, 20.4489];
const BUDAPEST = [47.4979, 19.0402];
const VIENNA = [48.2082, 16.3738];
const MUNICH = [48.1351, 11.5820];
const PRAGUE = [50.0755, 14.4378];
const CANCUN = [21.1619, -86.8515];
const COLORADOSPRINGS = [38.8339, -104.8214];
const STPETESBEACH = [27.7465, -82.7415];
const LOSANGELES = [34.0522, -118.2437];
const YOSEMITE = [37.8651, -119.5383];
const GRANDCANYON = [36.1069, -112.1129];
const BEIJING = [39.9042, 116.4074];
const ARUBA = [12.5211, -69.9683];
const MONTREAL = [45.5017, -73.5673];
const CUERNAVACA = [18.9242, -99.2216];
const MEXICO_CITY = [19.4326, -99.1332];

const locations = [
  { name: 'District of Columbia', coords: DC },
  { name: 'Concord', coords: CONCORD },
  { name: 'Boston', coords: BOSTON },
  { name: 'San Fransisco', coords: SF },
  { name: 'Beirut', coords: BEIRUT },
  { name: 'La Fortuna', coords: LAFORTUNA },
  { name: 'Monteverde', coords: MONTEVERDE },
  { name: 'Tamarindo', coords: TAMARINDO },
  { name: 'London', coords: LONDON },
  { name: 'Cambridge', coords: CAMBRIDGE },
  { name: 'York', coords: YORK },
  { name: 'Skye', coords: SKYE },
  { name: 'Edinburgh', coords: EDINBURGH },
  { name: 'Paris', coords: PARIS },
  { name: 'Geneva', coords: GENEVA },
  { name: 'Milan', coords: MILAN },
  { name: 'Venice', coords: VENICE },
  { name: 'Passo di Giau', coords: ALLEGHE },
  { name: 'Bologna', coords: BOLOGNA },
  { name: 'Florence', coords: FLORENCE },
  { name: 'Rome', coords: ROME },
  { name: 'Napoli', coords: NAPOLI },
  { name: 'Pompeii', coords: POMPEII },
  { name: 'Barcelona', coords: BARCELONA },
  { name: 'Madrid', coords: MADRID },
  { name: 'Pula', coords: PULA },
  { name: 'Zadar', coords: ZADAR },
  { name: 'Split', coords: SPLIT },
  { name: 'Dubrovnik', coords: DUBROVNIK },
  { name: 'Kotor', coords: KOTOR },
  { name: 'Belgrade', coords: BELGRADE },
  { name: 'Budapest', coords: BUDAPEST },
  { name: 'Vienna', coords: VIENNA },
  { name: 'Munich', coords: MUNICH },
  { name: 'Prague', coords: PRAGUE },
  { name: 'Sevilla', coords: SEVILLA },
  { name: 'Cancun', coords: CANCUN },
  { name: 'Colorado Springs', coords: COLORADOSPRINGS },
  { name: 'St. Pete Beach', coords: STPETESBEACH },
  { name: 'Los Angeles', coords: LOSANGELES },
  { name: 'Yosemite', coords: YOSEMITE },
  { name: 'Grand Canyon', coords: GRANDCANYON },
  { name: 'Beijing', coords: BEIJING },
  { name: 'Lagos', coords: LAGOS },
  { name: 'Lisbon', coords: LISBON },
  { name: 'Porto', coords: PORTO },
  { name: 'Aruba', coords: ARUBA },
  { name: 'Cuernavaca', coords: CUERNAVACA},
  { name: 'Montreal', coords: MONTREAL},
  { name: 'Mexico City', coords: MEXICO_CITY},
];



export default function Travel({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div>
      <Center>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Center>
      <Text align={"center"} p={"1rem"}>
        Exploring new destinations has always been a passion of mine. Each journey, whether immersed in unique languages, enriched cultural experiences, or the thrilling adventure of exploration, holds its own special significance. It's only right that I've incorporated a map highlighting the remarkable places I've traveled to on my website.
      </Text>
      <Map width="800" height="400" center={CONCORD} zoom={10}>
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
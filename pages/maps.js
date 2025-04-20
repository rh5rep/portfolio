import Map from '../components/Map';
import styles from '../styles/Home.module.css';
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Flex, VStack, Text, useColorMode } from '@chakra-ui/react';

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Maps({ Component, pageProps }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (

        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Text align={"center"}>
                For this part of my website, I wanted to include a passion of mine -- traveling. To do so, though, I wanted to include a map with markers of places around the world I have been!
            </Text>

            <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}
            style={{ paddingLeft: '{20px}', paddingRight: '20px' }}>
                {({ TileLayer, Marker, Popup }) => (
                    <>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={DEFAULT_CENTER}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </>
                )}
            </Map>
        </div>
    );
}

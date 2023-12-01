import Layout from "../components/layout";
import { VStack, Flex, Heading, Text, Spacer, Grid, Box, Divider, StackDivider, List, ListItem, OrderedList } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/rami.png";
import { useColorMode } from "@chakra-ui/color-mode";


export default function Travel({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const projectGridMaxW = "100";

  return (
    <VStack>
      <Layout>
      <Component {...pageProps} />
      </Layout>


      
      <OrderedList>
        <ListItem> I want to include a map with a pin to everywhere in the world I have been. You click the pin, and images/videos and descriptions will show up</ListItem>
        <ListItem> Do include languages/Pimsu</ListItem>
      </OrderedList>

    </VStack>    
    );
}
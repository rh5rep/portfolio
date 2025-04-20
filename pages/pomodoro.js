import Layout from "../components/layout";
import { VStack, Flex, Heading, Text, Spacer, Grid, Box, Divider, StackDivider, List, ListItem, OrderedList, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/rami.png";


export default function Pomodoro({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const projectGridMaxW = "100";

  return (
    <VStack>
      <Layout>
      <Component {...pageProps} />
      </Layout>

    </VStack>    
    );
}
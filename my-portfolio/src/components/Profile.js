import { React, Image } from "react";
import { ColorMode, useColorMode } from "@chakra-ui/color-mode";
import {
  Divider,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/layout";
import resume from "./resume.png";

import "./styles.css";

function Profile() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <HStack>
        <img src={resume} className="resume" />
        <Divider orientation="vertical" />
        <VStack align="left">
          <Heading>
            <Text bgGradient="white" align="top">
              Projects to be included:
            </Text>
          </Heading>
          <Text align="left">- Turnafit </Text>
          <Text align="left">- Robotics </Text>
          <Text align="left">- Learn-It! </Text>
          <Text align="left">- Portable Charger </Text>
          <Text align="left">- And many more to come... </Text>
        </VStack>
      </HStack>
      <Divider orientation="horizontal" />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        w={["300px", "1000px"]}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          bgGradient="linear(to-r, cyan.400, #9448BC)"
        />
        {/* isDark ? <FaSun /> : <FaMoon /> */}
        <GridItem colSpan={2} bg={isDark ? "white" : "#1a202c"} />
        <GridItem colSpan={2} bg={isDark ? "white" : "#1a202c"} />
        <GridItem colSpan={4} bgGradient="linear(to-r, cyan.400, #9448BC)" />
      </Grid>
    </VStack>
  );
}

export default Profile;

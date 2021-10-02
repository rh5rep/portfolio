import { React, Image } from "react";
import { ColorMode, useColorMode } from "@chakra-ui/color-mode";
import { Grid, GridItem, VStack } from "@chakra-ui/layout";

function Profile() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        w="1000px"
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

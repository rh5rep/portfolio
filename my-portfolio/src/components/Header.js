import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Center,
  Heading,
  Stack,
  Text,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import temppic from "./temppic.png";

import "./styles.css";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <Heading flex="true">
        <HStack>
          <Center>
            <Text
              bgGradient="linear(to-r, cyan.400, #9448BC)"
              border="HighlightText"
              borderRadius="5"
              bgClip="text"
              fontSize="xxx-large"
              fontWeight="extrabold"
              p="5"
              align="center"
            >
              Hello, I am Rami Hanna.
            </Text>
            <img className="photo" src={temppic} />
          </Center>
        </HStack>
      </Heading>
      <Center>
        <VStack>
          <Text fontSize="large" p="2" align="center">
            Welcome to my website.
          </Text>
          <Text fontSize="large" p="2" align="center">
            Not only is this portfolio a Work in Progress, but it is also the
            first website I am building from scratch. I am planning on a big
            website restructing either today, (10/6/21), or tomorrow (10/7/21)
          </Text>
          <Text fontSize="large" p="2" align="center">
            Please check back often for updates and give me any feedback you may
            have.
          </Text>
        </VStack>
      </Center>
    </Stack>
  );
}

export default Header;

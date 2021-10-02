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

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <Heading flex="">
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
      </Heading>
      <Center>
        <VStack>
          <Text fontSize="large" p="2" align="center">
            Welcome to my website.
          </Text>
          <Text fontSize="large" p="2" align="center">
            Not only is this portfolio a Work in Progress, but it is also the
            first website I am building from scratch.
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

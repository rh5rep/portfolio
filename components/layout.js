import { Text, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Divider, Spacer, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex w="100%">
      <Heading ml="1" size="small" fontWeight="semibold" color="cyan.400">
        <Text p="0" align="center">
          {" "}
          | (603) 293-3511 |
        </Text>
        <Text p="0" align="center">
          {" "}
          | hannar1@wit.edu |
        </Text>
      </Heading>
      <Spacer></Spacer>
      <Link href="mailto:hannar1@wit.edu" isExternal passHref>
        <IconButton ml="1" mr="1" icon={<EmailIcon />} isRound="true">
          {" "}
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/ramiihanna/" isExternal passHref>
        <IconButton ml="1" icon={<FaLinkedin />} isRound="true">
          {" "}
        </IconButton>
      </Link>

      <IconButton
        ml="1"
        mr="1"
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}

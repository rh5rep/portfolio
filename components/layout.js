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
    <VStack width="100%" align="stretch">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="small" fontWeight="semibold" color="cyan.400">
          <VStack align="start">
            <Text p="0" align="center">
              | (603) 293-3511 |
            </Text>
            <Text p="0" align="center">
              | hannar1@wit.edu |
            </Text>
          </VStack>
        </Heading>
        <HStack spacing={1}>
          <Link href="mailto:hannar1@wit.edu" isExternal passHref>
            <IconButton icon={<EmailIcon />} isRound="true" />
          </Link>
          <Link href="https://www.linkedin.com/in/ramiihanna/" isExternal passHref>
            <IconButton icon={<FaLinkedin />} isRound="true" />
          </Link>
          <IconButton
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
      <Divider />
    </VStack>
  );
}

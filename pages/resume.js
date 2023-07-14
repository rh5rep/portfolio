import { Text, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Divider, Spacer, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import Layout from "../components/layout";

export default function Resume({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  
  return (
    <VStack p="4" spacing="6">
      <Divider />
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />
    </VStack>
  );
}

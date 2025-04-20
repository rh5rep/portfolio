import { Text, Flex, Heading, HStack, IconButton, Center, useColorMode } from "@chakra-ui/react";
import { Divider, Spacer, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import Layout from "../components/layout";

export default function Resume({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Divider /> */}
      <Link download={"RHanna - Resume"} href={"/resume.pdf"}>
        <Text align="center" as={"u"}>
          Click here to download my résumé!
        </Text>
      </Link> 
      {/* <Center spacing="6" borderRadius={"1rem"} p={"1rem"}> */}
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />
      {/* </Center> */}
    </VStack>
  );
}

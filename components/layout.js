import { Text, Flex, Heading, HStack, IconButton, Box } from "@chakra-ui/react";
import { Divider, Spacer, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import { FaLinkedin, FaSun, FaMoon,FaHome } from "react-icons/fa";
import { EmailIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import Image from "next/image";
import logo from "../public/images/Rami1.png";
import logoHover from "../public/images/RamiHover.png"
import React, {useState} from "react";

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  return (
    <VStack width="100%" align="stretch">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="small" fontWeight="semibold" color="cyan.400">
          <VStack align="start">
            <Text p="2" align="center">
              | +1 (603) 293-3511 |
            </Text>
            <Text p="2" align="center">
              | hannar1@wit.edu |
            </Text>
          </VStack>
        </Heading>
        <Link href={"/"}>
        <Box w="150px" h="150px" mt="6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={"pointer"}>

          <Image src={isHovered ? logoHover : logo} layout="responsive" alt="Logo" />

        </Box>
        </Link>
        <HStack spacing={1}>
        <Link href="/" isExternal passHref>
            <IconButton icon={<FaHome />} isRound="true" />
          </Link>
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
      {/* <Divider /> */}
    </VStack>
  );
}

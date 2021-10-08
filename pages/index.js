import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  VStack,
  HStack,
  Flex,
  Heading,
  Text,
  Spacer,
  IconButton,
  Grid,
  Center,
  Box,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Divider, Link as chakraLink } from "@chakra-ui/layout";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import fav from "../public/temppic.png";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const projectGridMaxW = "100";

  return (
    <VStack p="1">
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
        <Link href="mailto:hannar1@wit.edu" isExternal>
          <IconButton ml="1" mr="1" icon={<EmailIcon />} isRound="true">
            {" "}
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/ramiihanna/" isExternal>
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
      <Spacer> </Spacer>
      <Divider></Divider>
      <Spacer></Spacer>

      <Flex>
        <Heading>
          <Flex>
            <HStack>
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
              <Image src={fav} width="200px" height="200px" alt="profpic" />
            </HStack>
          </Flex>
        </Heading>
      </Flex>
      <Flex>
        <Center>
          <VStack>
            <Text fontSize="large" align="center" p="2">
              Welcome to my website. Not only is this portfolio a Work in
              Progress, but it is also the first website I am building from
              scratch.
            </Text>
            <Text fontSize="large" align="center" p="2">
              Please check back often for updates and give me any feedback you
              may have.
            </Text>
          </VStack>
        </Center>
      </Flex>
      <Spacer></Spacer>
      <Divider w="90%"></Divider>
      <Spacer></Spacer>

      <Text
        fontSize="2xl"
        align="center"
        borderBottomStyle="dotted"
        borderBottom="2px"
      >
        Resume and Projects
      </Text>
      <Text fontSize="sm" align="center">
        (will be added gradually, currently the resume is the only formatted
        page)
      </Text>
      <Grid
        p="2"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        w="100%"
        h="100%"
        gap={6}
      >
        <LinkBox as="projects">
          <Link href="/resume" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">My Resume </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <LinkBox as="projects">
          <Link href="/test" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">Project 1 </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>{" "}
        <LinkBox as="projects">
          <Link href="/test" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">Project 2 </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>{" "}
        <LinkBox as="projects">
          <Link href="/test" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">Project 3 </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>{" "}
        <LinkBox as="projects">
          <Link href="/test" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">Project 4 </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>{" "}
        <LinkBox as="projects">
          <Link href="/test" passHref>
            <LinkOverlay>
              <Box
                maxW="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Text align="center">Project 5 </Text>
              </Box>
            </LinkOverlay>
          </Link>
        </LinkBox>{" "}
      </Grid>
    </VStack>
  );
}

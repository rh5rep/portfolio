import Layout from "../components/layout";
import { VStack, Flex, Heading, Text, Spacer, Grid, Box, Divider, StackDivider } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/rami.png";
import { useColorMode } from "@chakra-ui/color-mode";


export default function Home({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const projectGridMaxW = "100";

  return (
    <VStack>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      <Flex align="center" justify="center" direction="column">
        <Heading
          bgGradient="linear(to-r, cyan.400, #9448BC)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
          p="5"
          align="center"
          // boxShadow={"lg"}
          borderRadius={"1rem"}
          // _hover={{ shadow:'xs', fontStretch:'110%'}}
        >
          Hello, I am Rami Hanna.
        </Heading>
        <Box w="200px" h="200px" mt="6">
          <Image src={fav} layout="responsive" alt="profpic" />
        </Box>
      </Flex>
      <VStack spacing="4" align="center">
        <Text fontSize="lg" align="center">
          Welcome to my website. Not only is this portfolio a Work in Progress, but it is also the first website I am building from scratch.
        </Text>
        <Text fontSize="lg" align="center">
          Please check back often for updates and give me any feedback you may have.
        </Text>
      </VStack>
      <Divider w="90%"/>
      <Heading as='u' paddingBottom={4}> Resume and Projects</Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        align="center"
        justifyItems="center"
      >
        <Link href="/resume">
          <Box
            maxW="sm"
            p="4"
            borderWidth="1px"
            borderRadius="1rem"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "dark-lg" }}
            cursor="pointer"
          >
            <Text align="center">My Resume</Text>
          </Box>
        </Link>
        <Link href="/learnit">
          <Box
            maxW="sm"
            p="4"
            borderWidth="1px"
            borderRadius="1rem"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "dark-lg" }}
            cursor="pointer"
          >
            <Text align="center">Learn-It</Text>
          </Box>
        </Link>

        <Link href="/capstone">
          <Box
            maxW="sm"
            p="4"
            borderWidth="1px"
            borderRadius="1rem"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "dark-lg" }}
            cursor="pointer"
          >
            <Text align="center">Senior Capstone</Text>
          </Box>
        </Link>
        <Link href="/heartrate">
          <Box
            maxW="sm"
            p="4"
            borderWidth="1px"
            borderRadius="1rem"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "dark-lg" }}
            cursor="pointer"
          >
            <Text align="center">Extracting Heartrate from Cell Phone Videos</Text>
          </Box>
        </Link>
        {/* Add more project links here */}
      </Grid>
      <Divider w="90%" />
      <Heading as='u' paddingBottom={4}> Hobbies and Interests </Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        align="center"
        justifyItems="center"
      >
      <Link href="/travel">
        <Box
          maxW="sm"
          p="4"
          borderWidth="1px"
          borderRadius="1rem"
          overflow="hidden"
          boxShadow="md"
          _hover={{ boxShadow: "dark-lg" }}
          cursor="pointer"
        >
          <Text align="center">Travel</Text>
        </Box>
      </Link>
      <Link href="/language">
        <Box
          maxW="sm"
          p="4"
          borderWidth="1px"
          borderRadius="1rem"
          overflow="hidden"
          boxShadow="md"
          _hover={{ boxShadow: "dark-lg" }}
          cursor="pointer"
        >
          <Text align="center">Language</Text>
        </Box>
      </Link>
      <Link href="/Exercise">
        <Box
          maxW="sm"
          p="4"
          borderWidth="1px"
          borderRadius="1rem"
          overflow="hidden"
          boxShadow="md"
          _hover={{ boxShadow: "dark-lg" }}
          cursor="pointer"
        >
          <Text align="center">Exercise</Text>
        </Box>
      </Link>
      </Grid>
      
      <Divider w="90%" />
      <Link href="/nextsteps">
        <Box
          maxW="sm"
          p="4"
          borderWidth="1px"
          borderRadius="1rem"
          overflow="hidden"
          boxShadow="md"
          _hover={{ boxShadow: "dark-lg" }}
          cursor="pointer"
        >
          <Text align="center">Next Steps</Text>
        </Box>
      </Link>
    </VStack>
  );
}

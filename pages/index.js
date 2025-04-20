import Layout from "../components/layout";
import { VStack, Flex, Heading, Text, Spacer, Grid, Box, Divider, StackDivider, Center, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/rami.png";
import { useColorMode } from "@chakra-ui/react";

export default function Home({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const projectGridMaxW = "100";
  const gappx = 4;

  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    {/* <Center> */}
      <VStack width="100%" align="center" p={"1rem"}>
        <Flex align="center" justify="stretch" direction="column" p={"1rem"}>
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
        <Divider w="95%" />
        <Center>
          <Heading as='u' paddingBottom={4}> Résumé and Projects</Heading>
        </Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={gappx}
          align="center"
          justifyItems="stretch"
          width={"95%"}
          // pr={"4"}
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
              <Text  align="center">My Résumé</Text>
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
          <Link href="/pomodoro">
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
              <Text align="center">Pomodoro Timer!</Text>
            </Box>
          </Link>
          <Link href="/caradapter">
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
              <Text align="center">Bluetooth Car Adapter</Text>
            </Box>
          </Link>
          {/* Add more project links here */}
        </Grid>
        <Divider w="95%" />
        <Center>
          <Heading as='u' paddingBottom={4}> Hobbies and Interests </Heading>
        </Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={gappx}
          align="center"
          justifyItems="stretch"
          width={"95%"}
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
          <Link href="/exercise">
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

        <Divider w="95%" />
        {/* <Center> */}
          <Grid
          templateColumns="repeat(3, 1fr)"
          gap={gappx}
          align="center"
          justifyItems="stretch"
          width={"95%"}>
            <GridItem colStart={2}>
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
          </GridItem>
          </Grid>
        {/* </Center> */}
      </VStack>
    {/* </Center> */}
    </VStack>

  );
}

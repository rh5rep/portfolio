// import "./App.css";

// import {
//   Box,
//   Text,
//   Image,
//   Badge,
//   Grid,
//   GridItem,
//   Heading,
//   Center,
//   HStack,
//   VStack,
//   Stack,
//   Link,
//   Button,
//   Fade,
//   ScaleFade,
//   Slide,
//   SlideFade,
// } from "@chakra-ui/react";

// import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
// import { SiLinkedin } from "react-icons/si";
// import React, { useState, Collapse } from "react";

// function App() {
//   const [show, setShow] = React.useState(false);

//   const handleToggle = () => setShow(!show);
//   return (
//     <>
//       {/* <>
//         <Collapse startingHeight={100} in={show}>
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
//           richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
//           anderson cred nesciunt sapiente ea proident.
//         </Collapse>
//         <Button size="sm" onClick={handleToggle} mt="1rem">
//           Show {show ? "Less" : "More"}
//         </Button>
//       </> */}
//       <HStack spacing="1000">
//         <Heading
//           bgGradient="linear(to-t, gray.300, cyan)"
//           bgClip="text"
//           fontSize="6xl"
//           fontWeight="hairline"
//           px="25"
//         >
//           <Text> | Rami I. Hanna |</Text>
//         </Heading>
//         <HStack spacing="1">
//           <Link href="https://www.linkedin.com/in/ramiihanna/" isExternal>
//             <SiLinkedin mx="2px" />{" "}
//           </Link>
//           <ExternalLinkIcon mx="2px" />
//         </HStack>
//       </HStack>
//       {/* <Box px="25" py="25"> */}
//       <VStack>
//         <HStack spacing="50" px="25" py="25">
//           <Box bg="cyan.300" mx="auto" w="100%" my="auto" l="100%">
//             <Text>Test1</Text>
//             {/* <Button */}
//           </Box>
//           <Box bg="cyan.300" mx="auto" w="100%">
//             <Text>Test2</Text>
//           </Box>
//           <Box bg="cyan.300" mx="auto" w="100%">
//             <Text>Test3</Text>
//           </Box>
//         </HStack>
//         <HStack spacing="50" px="25" py="25">
//           <Box bg="cyan.300" mx="auto" w="100%" my="auto" l="100%">
//             <Text>Test1</Text>
//           </Box>
//           <Box bg="cyan.300" mx="auto" w="100%">
//             <Text>Test2</Text>
//           </Box>
//           <Box bg="cyan.300" mx="auto" w="100%">
//             <Text>Test3</Text>
//           </Box>
//         </HStack>
//       </VStack>
//       {/* <Grid
//           h="200px"
//           templateRows="repeat(2, 1fr)"
//           templateColumns="repeat(5, 1fr)"
//           gap={4}
//         >
//           <GridItem rowSpan={2} colSpan={1} bg="cyan.300" />
//           <Button colorScheme="twitter"> Hello </Button>
//           <GridItem colSpan={2} bg="gray.300" />
//           <GridItem colSpan={2} bg="gray.300" />
//           <GridItem colSpan={4} bg="cyan.300" />
//         </Grid> */}
//       {/* </Box> */}
//     </>
//   );
// }

// export default App;

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Text, HStack, Spacer } from "@chakra-ui/layout";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="1">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.300">
          <Text> | Rami I. Hanna | </Text>
        </Heading>
        <Spacer></Spacer>
        <IconButton ml="5" icon={<FaLinkedin />} isRound="true">
          {" "}
        </IconButton>
        <IconButton
          ml="1"
          mr="1"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </VStack>
  );
}

export default App;

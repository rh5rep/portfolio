import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Flex,
  VStack,
  Heading,
  Text,
  HStack,
  Spacer,
  Link,
  Divider,
} from "@chakra-ui/layout";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import Header from "./Header";
import Profile from "./Profile";
import { EmailIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

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
      <Spacer></Spacer>
      <Divider orientation="horizontal" />
      <Header></Header>
      <Spacer></Spacer>
      <Divider orientation="horizontal" />
      <Spacer></Spacer>
      <Profile></Profile>
      <Spacer></Spacer>
      <Divider orientation="horizontal" />
      <Spacer></Spacer>
    </VStack>
  );
}

export default App;

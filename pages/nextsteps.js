import { Box, Center, Flex, Text, VStack, useColorMode } from "@chakra-ui/react";
import Layout from "../components/layout";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function nextsteps({ Component, pageProps }) {
  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Flex>
        <Center>
          <VStack>
            {/* want to get an outline to the ordered list. Currently not working. */}
            <Box border={"1"} borderColor={"white"}>
              <OrderedList>
                <ListItem>Good progress was made with the slideshow as seen in the Capstone page. Working on:</ListItem>
                <ListItem>Properly sizing the images</ListItem>
                <ListItem>Adding a hover option for description of the images</ListItem>
              </OrderedList>
            </Box>
            <Text align={"center"} as={"i"}>
              Obviously, there is much more to be done with this website. This
              ordered list is just to demonstrate where I currently see the
              priorities regardless of apperance. Again, I am learning and this
              all takes time!
            </Text>
          </VStack>
        </Center>
      </Flex>
    </VStack>
  );
}

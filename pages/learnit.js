import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function learnit({ Component, pageProps }) {
  return (
    <VStack p="4" spacing="6">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Flex>
        <Center>
          <VStack>
            <Text fontSize="large" align="center" p="2">
              Learn-It was my first major multidisciplinary project at
              Wentworth. The Problem Statement: The need is an increase of STEM
              related toys. This is important because there is a higher demand
              for STEM related jobs with diminishing numbers of qualified
              employees. Currently available designs include building blocks,
              magnetic gears, robots and take-apart toys. The users need a
              design to be attractive to young children and user-friendly. Our
              solution will encourage STEM learning at a young age by focusing
              on aspects of STEM fields working together in a safe manner. It
              will be at most $150, portable, and have at least one 3D
              printed/laser cut component.
            </Text>
            <Text fontSize="large" align="center" p="2">
              Background Information: Guided to children between the ages of 3 -
              6 (preschool - kindergarten) At that age children can recognize
              and recall information Toy needs to keep child&#39s interest and
              still educate them
            </Text>
          </VStack>
        </Center>
      </Flex>
    </VStack>
  );
}

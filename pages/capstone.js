import { useState } from 'react';
import Layout from "../components/layout";
import { Box, Image, IconButton, VStack, Link, Text, Center, Heading, Flex, Divider } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { transform } from 'framer-motion';

const media = [
  { type: 'image', url: '../images/RobotRender.jpg', description: 'Render of our Cartesian Robot.' },
  { type: 'image', url: '../images/RobotPicture.jpg', description: 'Picture of the Physical Robot.' },
  { type: 'image', url: '../images/30_min_drift_10_min_tare_2.png', description: 'Load Cell Testing: 30 min drift test with 10 minute tares' },
  { type: 'image', url: '../images/30_min_drift_no_tare.png', description: 'Load Cell Testing: 30 min drift test no taring' },
  { type: 'video', url: '../images/GUI Redesign Explaination_Trim.mp4', description: 'Current State of GUI -- highlighting the task scheduler' },
];

export default function Capstone({ Component, pageProps }) {
  const [currentMedia, setCurrentMedia] = useState(0);

  const previousMedia = () => {
    setCurrentMedia((prevMedia) =>
      prevMedia === 0 ? media.length - 1 : prevMedia - 1
    );
  };

  const nextMedia = () => {
    setCurrentMedia((prevMedia) =>
      prevMedia === media.length - 1 ? 0 : prevMedia + 1
    );
  };

  const renderMedia = () => {
    const { type, url, description } = media[currentMedia];

    return (
      <Box>
        <VStack>

          <Flex minWidth='max-content' alignItems='center' aspectRatio={"16/9"} >
            <Center w={[500, 700, 700]} >
              {type === 'image' && (
                <Image
                  src={url}
                  alt="Slideshow Image"
                  objectFit="contain"
                  borderRadius={"0.5rem"}
                />
              )}

              {type === 'video' && (
                <video objectFit="contain" borderRadius={"0.5rem"}

                >
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Center>
          </Flex>
          <Text p='4' as='i' position='center'>
            {description}
          </Text>
        </VStack>

      </Box>
    );
  };



  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Heading as={'u'}> Short Description and My Role </Heading>
      <Text margin='5%'> Introducing the Teradyne Cartesian Robot and Tool Changer project, a comprehensive solution designed to address the need for increased automation and innovation in the RF head mating system at Teradyne. By utilizing a Cartesian robot, a vision system integrated with AI/ML capabilities, an automated tool changer, and remote control access, this project aims to improve the efficiency of daily procedures at Teradyne. It seeks to tackle challenges such as human error and inefficiencies that often lead to costly component breakage during the testing process.</Text>
      <Link href="https://www.linkedin.com/company/cartesian-robot-and-tool-changer-project/" isExternal passHref>
        <Text as='u' color='inherit'>
          Until more detail is added, here is the Linkedin Page for my capstone group.
        </Text>
      </Link>
      <Divider p={[1, 2, 3]}></Divider>
      <Box position="relative">
        {renderMedia()}
        <IconButton
          icon={<FaArrowLeft />}
          size="md"
          color={"black"}
          position="absolute"
          left="3rem"
          top="50%"
          transform="translateY(-50%)"
          onClick={previousMedia}
        />
        <IconButton
          icon={<FaArrowRight />}
          size="md"
          position="absolute"
          color={"black"}
          right="1rem"
          top="50%"
          transform="translateY(-50%)"
          onClick={nextMedia}
          _hover={{ background: 'black', color: 'white' }} />
      </Box>
    </VStack>
  );
}

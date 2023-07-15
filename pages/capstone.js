import { useState } from 'react';
import Layout from "../components/layout";
import { Box, Image, IconButton, VStack, Link, Text, Center } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const media = [
  { type: 'image', url: '../images/30_min_drift_10_min_tare_2.png', description: 'Load Cell Testing: 30 min drift test with 10 minute tares' },
  { type: 'image', url: '../images/30_min_drift_no_tare.png', description: 'Load Cell Testing: 30 min drift test no taring' },
  // { type: 'image', url: '../images/IMG_5417.jpg', description: 'Image 3'  },
  { type: 'video', url: '../images/GUI Redesign Explaination_Trim.mp4', description: 'Current State of GUI -- highlighting the task scheduler' },
  // Add more media objects here
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

    if (type === 'image') {
      return <Image src={url} alt="Slideshow Image" objectFit="contain" height="100%" borderRadius='2xl' />;
    }

    if (type === 'video') {
      return (
        <video controls width="100%" height="100%">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null;
  };

  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Link href="https://www.linkedin.com/company/cartesian-robot-and-tool-changer-project/" isExternal passHref>
        <Text as='u' color='inherit'>
          Until more detail is added, here is the Linkedin Page for my capstone group.
        </Text>
      </Link>
      <Box position="relative" height="400px">
        {renderMedia()}
        <Center position='center'>{media[currentMedia].description}</Center>
        <IconButton
          icon={<ChevronLeftIcon />}
          size="lg"
          position="fixed"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          onClick={previousMedia}
        />
        <IconButton
          icon={<ChevronRightIcon />}
          size="lg"
          position="fixed"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          onClick={nextMedia}
        />
      </Box>
    </VStack>
  );
}

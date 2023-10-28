import { useState } from 'react';
import Layout from "../components/layout";
import { Box, IconButton, VStack, HStack, Button, Link, Text, Center, Heading, Flex, Divider, StackDivider, Icon, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { transform } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useColorMode } from "@chakra-ui/color-mode";
import Image from "next/image";


const mediaItems = [
  {type: 'image',
   source: '../images/RamiHover.png',
   description: ' changes such as adding a linear rail, tool-changer, and programming changes were all made.'

  },
  <Image src="../images/Rami1.png" width={500} height={500} alt='pis'/>,
  {type: 'image',
   source: '../images/RamiHover.png',
   description: ' changes such as adding a linear rail, tool-changer, and programming changes were all made.'

  },
  {type: 'image',
   source: '../images/Cartesian-Robot.jpg',
   description: 'The prior capstone group robot. Many mechanical changes such as adding a linear rail, tool-changer, and programming changes were all made.'

  },
  {
    type: 'image',
    source: '../images/RobotRender.jpg',
    description: 'Solidworks model of our initial redesign.'
  },
  {
    type: 'image',
    source: '../images/30_min_drift_10_min_tare_2.png',
    description: 'A major addition to the project was adding a load cell to determine ample force needed to mate a connector -- for automation purposes. Here is an initial test of 50g on a cantilever load cell with 10 min tares.'
  },
  {
    type: 'image',
    source: '../images/30_min_drift_no_tare.png',
    description: 'This test had no taring involved, but same mass and same total duration.'
  },
  {
    type: 'image',
    source: '../images/RobotPicture.jpg',
    description: 'Our first assembly day. Two linear rails on the X-Axis for additional support, base plate for the Maxwell Kinematic Coupling, and anti-backlash nuts.'
  },
  {
    type: 'video',
    source: '../images/GUI Redesign Explaination_Trim.mp4',
    description: "Now it was my time to shine -- Develop a redesigned, easy to use GUI that is powerful for automation. This video is commentated over to describe the scheduler I implemented."
  },
  {
    type: 'video',
    source: '../images/vid1.MOV',
    description: "One mate with conductivity verification. Make sure your volume is up!"
  },
];

export default function Capstone({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const handleNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const currentMediaItem = mediaItems[currentMediaIndex];

  return (
    <VStack>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Heading p={'1rem'}>
          Teradyne Senior Design Project
        </Heading>
      <Divider w={"50%"} />
      <Text p={"1rem"}>
      The purpose of this project was to create a device that automates the mating of coaxial connectors during testing. A Cartesian robot was designed and built that locates a specific connector within an array of connectors and then executes the desired mate using a Z-axis motion system. Additionally, an integrated tool-changer system is being developed that automatically swaps between the various toolheads used during a testing procedure.

The team behind this capstone project consists of three Electromechanical Engineering students at Wentworth Institute of Technology: Sam Baliki, Rami Hanna, and Paul Miller. They are supported and mentored by Professor James McCusker and Brian C. Wadell at Teradyne.
      </Text>

      <Center border={"1px"} borderRadius={"1rem"} p={"1rem"}>
        <Box maxW="800px">
          <HStack>
          <FaArrowLeft size={50} onClick={handlePrevMedia} cursor={"pointer"}></FaArrowLeft >
          <Spacer/>
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={currentMediaIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {currentMediaItem.type === 'video' ? (
                <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                  <ReactPlayer
                    url={currentMediaItem.source}
                    controls
                    width="100%"
                    height="400px"
                  />
                </div>
              ) : (
                <img
                  src={currentMediaItem.source}
                  alt="Image"
                  width="100%"
                  style={{ borderRadius: '1rem' }} 
                />
              )}
            </motion.div>
          </AnimatePresence>
{/* ≈                <Divider opacity={0}/> */}
            <Spacer/>

                <FaArrowRight size={50} onClick={handleNextMedia} cursor={"pointer"}></FaArrowRight>
        </HStack>
          <Center>
            <VStack>
              <Text align={'center'} p={"4"} >{currentMediaItem.description}</Text>
              {/* <HStack spacing={4}> */}
                {/* <FaArrowLeft size={50} onClick={handlePrevMedia}></FaArrowLeft> */}
                {/* <Divider opacity={0}/> */}
                {/* <FaArrowRight size={50} onClick={handleNextMedia}></FaArrowRight> */}
              {/* </HStack> */}
            </VStack>
          </Center>
        </Box>
      </Center>
      <Text> I have included our Research Paper that got published to IEEE below: </Text>
        <iframe
                src="../pdfs/Increasing Efficiency and Reliability of RF Machinery Testing Using Cartesian Robotics and Automatic Data Collection 8-25.pdf"
                width="90%"
                height="600px"
                style={{ border: "none", borderRadius: "1rem" }}
            />
    </VStack>
  );
};

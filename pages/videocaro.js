// components/VideoSlideshow.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Button, VStack, HStack, Center, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const mediaItems = [
  {
    type: 'video',
    source: '../images/vid1.MOV',
    description: "One mate with conductivity verification. Make sure your volume is up!"
  },
  {
    type: 'image',
    source: '../images/RobotPicture.jpg',
  },
];

const VideoSlideshow = () => {
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
    <Center height="100vh">
      <Box maxW="800px">
        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            key={currentMediaIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currentMediaItem.type === 'video' ? (
              <ReactPlayer
                url={currentMediaItem.source}
                controls
                width="100%"
                height="400px"
              />
            ) : (
              <img src={currentMediaItem.source} alt="Image" width="100%" />
            )}
          </motion.div>
        </AnimatePresence>
        <Center>
            <VStack>
                <Text>{currentMediaItem.description}</Text>
        <HStack mt="4" spacing="4">
          <Button onClick={handlePrevMedia}>Previous Media</Button>
          <Button onClick={handleNextMedia}>Next Media</Button>
        </HStack>
        </VStack>
        </Center>
      </Box>
    </Center>
  );
};

export default VideoSlideshow;

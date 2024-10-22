/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#228B22"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#228B22"
        bgImage="linear-gradient(-45deg, #228B22 25%, transparent 25%, transparent 50%, #228B22 50%, #228B22 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#38393d" fontFamily="'Gentium Plus', serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#38393d" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function GolfFilm() {
    const videos = [
      {
        videoSrc: "Norah-vid-1.MOV",
        title: "Norah's Winning Putt",
        description: "Clutch Finish on the 18th Hole",
      },
      {
        videoSrc: "Norah-vid-2.mov",
        title: "Norah Golf Training",
        description: "Intense Practice Session",
      },
      {
        videoSrc: "Norah-vid-3.MOV",
        title: "Norah Driving Techniques",
        description: "Mastering the Perfect Drive",
      },
      {
        videoSrc: "Norah-vid-4.MOV",
        title: "Norah's Fast Greens Play",
        description: "Quick and Accurate Green Play",
      },
      {
        videoSrc: "Norah-vid-5.MOV",
        title: "Norah's Sand Trap Escape",
        description: "Amazing Recovery",
      },
      {
        videoSrc: "../video6.mp4",
        title: "Norah's Pinpoint Putting",
        description: "Precision Putting Techniques",
      },
      {
        videoSrc: "../video7.mp4",
        title: "Norah Championship Round",
        description: "Highlights from the Finals",
      },
      {
        videoSrc: "../video8.mp4",
        title: "Norah's Golf Highlights",
        description: "Top Plays from Junior Tournaments",
      },
    ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="4xl" fontWeight="medium" color="#228B22" fontFamily="'Gentium Plus', serif">
        Golf Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default GolfFilm;
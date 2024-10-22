/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#228B22"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#228B22"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Gentium Plus', serif">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Gentium Plus', serif" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is a master of the long game, with an average driving distance of 280 yards, making her a force on the fairway."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is known for her precision approach shots, consistently placing the ball within striking distance of the pin."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "With an exceptional golf IQ, Norah Castillo reads the course and conditions like a pro, making smart decisions on every hole."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Norah Castillo thrives under pressure, regularly sinking clutch putts to close out tournaments in dramatic fashion."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Known for her excellent bunker play, Norah Castillo can escape tough sand traps with ease, turning tough situations into opportunities."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Norah Castillo's short game is nothing short of remarkable, with flawless chipping and putting that gives her an edge on the greens."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Norah Castillo has a reputation for clutch performances, consistently making birdies in the final rounds to secure victories."
    },
    {
      frontImg: "norah-1.png",
      name: "Norah Castillo",
      bio: "Her consistent mid-range iron play makes Norah Castillo a reliable contender, landing the ball on the green with accuracy on every approach."
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
        Player Cards    
      </Text>
      <Text fontSize="2xl" fontWeight="medium" color="#38393d" fontFamily="'Gentium Plus', serif">
        Click on a card to see player card info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
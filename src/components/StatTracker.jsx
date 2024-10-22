import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    strokes: '',
    birdies: '',
    bogeys: '',
    eagles: '',
    fairwaysHit: '',
  });

  const [gameInfo, setGameInfo] = useState({
    course: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      strokes: '',
      birdies: '',
      bogeys: '',
      eagles: '',
      fairwaysHit: '',
    });
    setGameInfo({
      course: '',
      date: '',
    });
  };

  // Function to calculate averages
  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averages = {
    strokes: calculateAverages('strokes'),
    birdies: calculateAverages('birdies'),
    bogeys: calculateAverages('bogeys'),
    eagles: calculateAverages('eagles'),
    fairwaysHit: calculateAverages('fairwaysHit'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/golf-course.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#228B22" fontFamily="'Gentium Plus', serif">
        Golf Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#228B22"
          borderWidth="4px"
        >
          <Text 
            color="#F5F5DC" 
            fontWeight="bold" 
            fontFamily="'Gentium Plus', serif" 
            fontSize="md"
            textAlign="center" 
          >
            Golf Stats
          </Text>
          <Text color="#F5F5DC">Strokes: {averages.strokes}</Text>
          <Text color="#F5F5DC">Birdies: {averages.birdies}</Text>
          <Text color="#F5F5DC">Bogeys: {averages.bogeys}</Text>
          <Text color="#F5F5DC">Eagles: {averages.eagles}</Text>
          <Text color="#F5F5DC">Fairways Hit: {averages.fairwaysHit}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#ebebeb"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Gentium Plus', serif" mb={4}>
          Round Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No rounds added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Gentium Plus', serif">
                  Round {index + 1} - Player:
                </Text>
                <Text color="#000000">Course: {game.course}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Strokes: {game.strokes}</Text>
                <Text color="#000000">Birdies: {game.birdies}</Text>
                <Text color="#000000">Bogeys: {game.bogeys}</Text>
                <Text color="#000000">Eagles: {game.eagles}</Text>
                <Text color="#000000">Fairways Hit: {game.fairwaysHit}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#228B22"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Course
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.course}
              name="course"
              onChange={handleGameInfoChange}
              placeholder="Enter course name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Date
            </FormLabel>
            <Input
              type="date"
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Strokes
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.strokes}
              name="strokes"
              onChange={handleInputChange}
              placeholder="Enter strokes"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Birdies
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.birdies}
              name="birdies"
              onChange={handleInputChange}
              placeholder="Enter birdies"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Bogeys
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.bogeys}
              name="bogeys"
              onChange={handleInputChange}
              placeholder="Enter bogeys"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Eagles
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.eagles}
              name="eagles"
              onChange={handleInputChange}
              placeholder="Enter eagles"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Gentium Plus', serif" fontSize="lg">
              Fairways Hit
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.fairwaysHit}
              name="fairwaysHit"
              onChange={handleInputChange}
              placeholder="Enter fairways hit"
              type="number"
            />
          </FormControl>
          <Button colorScheme="green" onClick={handleAddGame}
                      mt={4}
                      bgColor="#228B22"
                      color="#F5F5DC"
                      minW="100%"
                      maxW="45%"
                      alignSelf="center"
                      fontFamily="'Gentium Plus', serif"
                      fontWeight="medium"
                      fontSize="xl"
                      borderRadius="8px"
                      borderColor="#228B22"
                      borderWidth="3px"
                      _hover={{ borderColor: '#F5F5DC' }}
          >
            Add Round
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;

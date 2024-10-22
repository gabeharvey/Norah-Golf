import { Box, Text, VStack, Heading, Grid, Flex, IconButton, Image } from '@chakra-ui/react'; 
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import XLogo from '/x-logo.png';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "norah-1.png",
    secondImg: "basketball-placeholder.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2029" },
      { title: "Position", description: "Pitcher/CF" },
      { title: "Height", description: "5'5\"" },
      { title: "Weight", description: "115 lbs" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Health Careers" },
    ],
  };

  return (
    <VStack
      spacing={10}
      p={6}
      mt={12} 
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#228B22" fontFamily="'Gentium Plus', serif" mb="5">
        {player.name}
      </Heading>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
        <MotionBox
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#38393d"
          borderWidth="3px"
          minH="500px"
          minW="350px"
          m="5"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }} 
        >
        </MotionBox>
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="700px"
          minW="320px"
          m="5"
          bgColor="#ebebeb"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
          bgSize="1px 1px"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#228B22"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={6}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }} 
        >
          <Grid gap={4}>
            {player.bioCategories.map((category, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#38393d" fontWeight="bold" fontFamily="'Gentium Plus', serif" fontSize="lg">
                  {category.title}
                </Text>
                <Text color="#38393d" fontFamily="'Roboto+Condensed', system-ui" fontSize="lg" fontWeight="semibold" mt={1}>
                  {category.description}
                </Text>
              </Box>
            ))}
          </Grid>
          <Flex justifyContent="center" mt={6}>
            <IconButton
              as={Link}
              to="https://facebook.com"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="#38393d" 
              fontSize="24px"
              _hover={{ color: '#0056b3' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.instagram.com"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="#38393d" 
              fontSize="24px"
              _hover={{ color: '#e1306c' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://snapchat.com"
              aria-label="Snapchat"
              icon={<FaSnapchatGhost />}
              variant="ghost"
              color="#38393d" 
              fontSize="24px"
              _hover={{ color: '#fffc00' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://x.com"
              aria-label="X"
              icon={<Image src={XLogo} alt="X Logo" boxSize="24px" />}
              variant="ghost"
              color="#38393d" 
              _hover={{ color: '#F5F5F5' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
            <IconButton
              as={Link}
              to="https://www.youtube.com"
              aria-label="YouTube"
              icon={<FaYoutube />}
              variant="ghost"
              color="#38393d" 
              fontSize="24px"
              _hover={{ color: '#c4302b' }} 
              _active={{ bg: 'transparent' }}
              m="1"
            />
          </Flex>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
import { Box, VStack, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Media() {
  const mediaArticles = [
    {
      title: "Norah Castillo Wins Tournament",
      url: "https://news4sanantonio.com",
    },
    {
      title: "Norah Castillo Gives Back to Community",
      url: "https://news4sanantonio.com",
    },
  ];

  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="4xl" fontWeight="medium" color="#228B22" fontFamily="'Gentium Plus', serif" mb="5">
        Media Coverage
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        {mediaArticles.map((article, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="120px"
            m="5"
            bgColor="#ebebeb"
            borderRadius="12px"
            borderWidth="4px"
            borderColor="#228B22"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Link
              href={article.url}
              isExternal
              color="#38393d"
              fontWeight="bold"
              fontSize="lg" 
              p={3} 
              _hover={{ color: '#e47608', textDecoration: 'underline' }}
            >
              {article.title}
            </Link>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Media;
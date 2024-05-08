import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useColorModeValue,
  Flex,
  Heading,
  Grid,
  SimpleGrid,
  VStack,
  HStack
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

function Footer() {
  return (
    <VStack spacing={4} width="100%" height="40vw" bg="#FBF8F3">
      {/* First row with 3 columns */}
      <SimpleGrid columns={3} spacing={5} w="full">
        <Box p={5} borderWidth="1px">
          <Text>Column 1, Row 1</Text>
        </Box>
        <Box p={5} borderWidth="1px">
          <Text>Column 2, Row 1</Text>
        </Box>
        <Box p={5} borderWidth="1px">
          <Text>Column 3, Row 1</Text>
        </Box>
      </SimpleGrid>

      {/* Second row with 4 columns */}
      <SimpleGrid columns={4} spacing={5} w="full">
        <Box p={5} borderWidth="1px">
          <Text>Column 1, Row 2</Text>
        </Box>
        <Box p={5} borderWidth="1px">
          <Text>Column 2, Row 2</Text>
        </Box>
        <Box p={5} borderWidth="1px">
          <Text>Column 3, Row 2</Text>
        </Box>
        <Box p={5} borderWidth="1px">
          <Text>Column 4, Row 2</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}

export default Footer;

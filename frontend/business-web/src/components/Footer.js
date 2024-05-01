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
  SimpleGrid
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

function Footer() {
  return (
    <Box bgImage='grey.100' bgSize="cover" bgPosition="center" py="10">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="40px" mb="10" p={100}>
            <SimpleGrid columns={2} spacing={10}>
                <Box bg='' height='80px'></Box>
                <Box bg='' height='80px'></Box>
                <Box bg='' height='80px'></Box>
                <Box bg='' height='80px'></Box>
                <Box bg='' height='80px'></Box>
            </SimpleGrid>

            <Box bg="gray.100" p="4" borderRadius="md">
                <Heading as="h3" size="lg" mt="4">
                COLLABORATION
                </Heading>
                <Text mt="4">
                I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                </Text>
            </Box>

            <Box bg="gray.100" p="4" borderRadius="md">
                <Heading as="h3" size="lg" mt="4">
                COLLABORATION
                </Heading>
                <Text mt="4">
                I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                </Text>
            </Box>

        </SimpleGrid>
    </Box>
  );
}

export default Footer;

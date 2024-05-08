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
  HStack,
  Image
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { IoMailOutline } from 'react-icons/io5';
import Logo from '../image/Footer/logo1.png';

function Footer() {
  return (
    <VStack spacing={4} width="100%" height="40vw" bg="#FBF8F3" fontFamily="Maharlika">
      {/* First row with 3 columns */}
      <SimpleGrid columns={3} spacing={5} w="full" h="50%">
        <Box p="3vw" borderWidth="1px" h="full">
          <VStack align="left">
            <Text fontSize="1.5vw" mb="1vw" fontWeight="500">EXPLORE</Text>
            <SimpleGrid columns={2} spacing={2} fontSize="1.5vw" mb="1vw">
              <VStack align="left" spacing={0}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/service'>Services</Link>
              </VStack>
              <VStack align="left" spacing={0}>
                <Link href='/porfolio'>Portfolio</Link>
                <Link href='/inquire'>Inquire</Link>
                <Link href='/resources'>Resources</Link>
              </VStack>
            </SimpleGrid>
            <HStack spacing="2vw">
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                fontSize="3vw"
              />
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                fontSize="3vw"
              />
              <IconButton
                aria-label="Tiktok"
                icon={<FaTiktok />}
                variant="ghost"
                fontSize="3vw"
              />
              <IconButton
                aria-label="IoIosMail"
                icon={<IoIosMail />}
                variant="ghost"
                fontSize="4vw"
              />
            </HStack>
          </VStack>
        </Box>

        <Box borderWidth="1px">
        
            {/* Background image container */}
            <Box
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w="100%"
                h="100vh" // Set the height of the image container to be full screen
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                objectFit="cover"  // Ensures the image covers the given dimension
                objectPosition="center"
            >
                <VStack position="relative" bottom="6vw" spacing={4} textAlign="center" p="5%">
                    {/* Title text */}
                     <Image 
                        src={Logo} 
                        alt="Logo" 
                        height="auto"
                        width="80%"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <Text position="relative" bottom="6vw" fontSize="2vw" mb="1vw" fontWeight="500">
                      Made for the Brand that
                      <br />
                      Turns Heads
                    </Text>
                </VStack>
            </Box>
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

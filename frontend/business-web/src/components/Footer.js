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
  useBreakpointValue,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Button
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { IoMailOutline } from 'react-icons/io5';
import Logo from '../image/Footer/logo1.png';
import Photo from '../image/Footer/background.jpg'

function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    {isMobile ? (
      <>
      <Box bg="#FBF8F3" px="2vw" h="full" display="flex" alignItems="center" justifyContent="center">
        <Box width="80vw">
          <VStack>
              {/* Title text */}
              <Box display="flex" justifyContent="center">
                <Image 
                    src={Logo} 
                    alt="Logo" 
                    height="auto"
                    width="80%"
                    objectFit="cover"
                    objectPosition="center"
                />
              </Box>
              
              <Box mt="-15%" mb="5%">
                <Text fontSize="3vw">
                  Made for the Brand that Turns Heads
                </Text>
              </Box>
              <Box>
                <HStack spacing="3vw">
                  <IconButton
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    variant="ghost"
                    fontSize="8vw"
                    onClick={() => window.open("https://www.instagram.com/")}
                  />
                  <IconButton
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    variant="ghost"
                    fontSize="8vw"
                    onClick={() => window.open("https://www.facebook.com/")}
                  />
                  <IconButton
                    aria-label="Tiktok"
                    icon={<FaTiktok />}
                    variant="ghost"
                    fontSize="8vw"
                    onClick={() => window.open("https://www.tiktok.com/")}
                  />
                  <IconButton
                    aria-label="IoIosMail"
                    icon={<IoIosMail />}
                    variant="ghost"
                    fontSize="12vw"
                    onClick={() => window.open("mailto: ")}
                  />
                </HStack>
              </Box>
              
              <Box mt="10%" display="flex" justifyContent="center">
                <VStack >
                  <Box>
                    <Text fontSize="4vw" fontWeight="500">DON'T BE A STRANGER</Text>
                  </Box>
                  <VStack fontSize="2.5vw" spacing={0}>
                    <Text textAlign="right">Follow my Instagram to see behind</Text>
                    <Text textAlign="right">the scenes content, exclusive tips &</Text>
                    <Text textAlign="right">stay updated in real time!</Text>
                  </VStack>
                  <Box mt="1vw">
                    <Button fontSize="3vw" width="100%" textColor="#FBF8F3" backgroundColor="#4D95B5"> 
                      FOLLOW SOCIALGAGE
                    </Button>
                  </Box>
                </VStack>
              </Box>
              <Box>
            </Box>
            <Box w="100vw" mt="5%" fontSize="2vw" height="3vw" bg="#4D95B5" display="flex" alignItems="center" justifyContent="center" fontWeight="500">
              <Text fontFamily= "Montserrat">
                COPYRIGHT SOCIALGAGE STUDIO 2024 ©
              </Text>
            </Box>
          </VStack>
        </Box>
        
      </Box>
      </>
    ) : (
      <>
      <VStack bg="#FBF8F3" spacing="1vw" width="100%" height="auto" bg="#FBF8F3" p="3vw">
        {/* First row with 3 columns */}
        <SimpleGrid columns={3} spacing="0.8%" w="full">
          <Box pb="3vw" px="2vw" h="full" borderRight="0.15vw solid #4D95B5">
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
                  onClick={() => window.open("https://www.instagram.com/")}
                />
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  fontSize="3vw"
                  onClick={() => window.open("https://www.facebook.com/")}
                />
                <IconButton
                  aria-label="Tiktok"
                  icon={<FaTiktok />}
                  variant="ghost"
                  fontSize="3vw"
                  onClick={() => window.open("https://www.tiktok.com/")}
                />
                <IconButton
                  aria-label="IoIosMail"
                  icon={<IoIosMail />}
                  variant="ghost"
                  fontSize="4vw"
                  onClick={() => window.open("mailto: ")}
                />
              </HStack>
            </VStack>
          </Box>

          <Box height="21vw" borderX="0.15vw solid #4D95B5" >
        
              <VStack textAlign="center" >
                  {/* Title text */}
                  <Image 
                      src={Logo} 
                      alt="Logo" 
                      height="auto"
                      width="20vw"
                      objectFit="cover"
                      objectPosition="center"
                      position="relative"
                      bottom="2vw"
                  />
                  <Text position="relative" bottom="7vw" fontSize="1.5vw" fontWeight="500">
                    Made for the Brand that
                    <br />
                    Turns Heads
                  </Text>
              </VStack>
          </Box>

          <Box pb="3vw" px="2vw" h="full" alignItems="right" textAlign="right" borderLeft="0.15vw solid #4D95B5">
            <Box>
              <Text fontSize="1.5vw" mb="1vw" fontWeight="500">DON'T BE A STRANGER</Text>
            </Box>
            
            <Box>
              <VStack fontSize="1.5vw" align="right" spacing={0}>
                <Text textAlign="right">Follow my Instagram to see behind</Text>
                <Text textAlign="right">the scenes content, exclusive tips &</Text>
                <Text textAlign="right">stay updated in real time!</Text>
              </VStack>
            </Box>

            <Box mt="1vw">
              <Button fontSize="1.5vw" width="100%" textColor="#FBF8F3" backgroundColor="#4D95B5"> 
                FOLLOW SOCIALGAGE
              </Button>
            </Box>
            
          </Box>

        </SimpleGrid>

        {/* Second row with 4 columns */}
        <SimpleGrid p="2vw" mt="2vw" columns={4} spacing="1vw" w="full" h="20vw">
          <Box borderWidth="1px" height="20vw">
          <Image 
              src={Photo} 
              alt="Logo"
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="center"
          />
          </Box>

          <Box borderWidth="1px" height="20vw">
          <Image 
              src={Photo} 
              alt="Logo"
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="center"
          />
          </Box>

          <Box borderWidth="1px" height="20vw">
          <Image 
              src={Photo} 
              alt="Logo"
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="center"
          />
          </Box>

          <Box borderWidth="1px" height="20vw">
          <Image 
              src={Photo} 
              alt="Logo"
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="center"
          />
          </Box>
        </SimpleGrid>
      </VStack>
      <Box fontSize="1vw" mt="2vw" height="3vw" bg="#4D95B5" display="flex" alignItems="center" justifyContent="center" fontWeight="500">
        <Text fontFamily= "Montserrat">
          COPYRIGHT SOCIALGAGE STUDIO 2024 ©
        </Text>
      </Box>
      </>
    )}
      
      
    </>
  );
}

export default Footer;

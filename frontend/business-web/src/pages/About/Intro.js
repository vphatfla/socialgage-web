import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box, useBreakpointValue } from '@chakra-ui/react';
import Sample from '../../image/About/sample1.jpg' // make sure to import the image correctly

function Section1() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    {isMobile ? (
      <Flex direction="column">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="40vw">
            <Image 
              src={Sample} 
              alt="Image description" 
              height="100%"
              width="100%"
              objectFit="cover"  // Ensures the image covers the given dimension
              objectPosition="center"  // Focuses on the center of the image
            />
        </Box>
        <VStack spacing="5" align="flex-start" flex="1" m="4" >
            <Heading as="h1" fontFamily="Maharlika" fontSize="4vw">
              MADE FOR THE BRAND THAT TURNS HEADS
              <Text fontFamily="Maharlika">
              — Strategic Branding, Social Media & Design Studio in Muskoka, Ont.
              </Text>
            </Heading>
            <Text
              fontSize="calc(3vw)"
              // fontSize="lg" 
              fontStyle="italic" 
              fontFamily="Montserrat">
            Elevating & amplifying brands through sustainable, scroll-stopping design, identity & social presence.
            </Text>
            <Text fontFamily="LOGO" mt="5%" fontSize="3vw">
                SEE WHAT HOWDY IS ALL ABOUT...
            </Text>
        </VStack>
        
    </Flex>
    ):(
      <Flex direction="row" width="100%" height="40vw" py="7vw" px="12vw">
        <VStack spacing="5" align="flex-start" flex="1" >
            <Heading as="h1" size="xl" fontFamily="Maharlika" fontSize="2.5vw">
              MADE FOR THE BRAND THAT TURNS HEADS
              <Text fontFamily="Maharlika">
              — Strategic Branding, Social Media & Design Studio in Muskoka, Ont.
              </Text>
            </Heading>
            <Text
              fontSize="2vw"
              // fontSize="lg" 
              fontStyle="italic" 
              fontFamily="Montserrat">
            Elevating & amplifying brands through sustainable, scroll-stopping design, identity & social presence.
            </Text>
            <Text fontFamily="LOGO" mt="5%" fontSize="2vw">
                SEE WHAT HOWDY IS ALL ABOUT...
            </Text>
        </VStack>
        <Box 
          height="100%"
          width="30%"
          ml="10vw"
        >
            <Image 
              src={Sample} 
              alt="Image description"
              height="100%"
              width="100%"
              objectFit="cover"  // Ensures the image covers the given dimension
              objectPosition="center"
            />
        </Box>
    </Flex>
    ) }
    </>
  );

}

export default Section1;

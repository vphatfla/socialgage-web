import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box } from '@chakra-ui/react';
import Sample from '../../image/sample1.jpg' // make sure to import the image correctly

function Section1() {
  return (
    <Flex direction={{ base: "column", md: "row" }} mb="10">
        <VStack spacing="5" align="flex-start" flex="1" mr="4">
            <Heading as="h1" size="xl">
            MADE FOR THE BRAND THAT TURNS HEADS
            </Heading>
            <Text fontSize="lg">
            Strategic Branding, Social Media & Design Studio in Muskoka, Ont.
            </Text>
            <Text>
            Elevating & amplifying brands through sustainable, scroll-stopping design, identity & social presence.
            </Text>
            <Text>
                SEE WHAT HOWDY IS ALL ABOUT...
            </Text>
        </VStack>
        <Box flex="1" height="100%">
            <Image src={Sample} alt="Image description" height="100%" />
        </Box>
    </Flex>
  );
}

export default Section1;

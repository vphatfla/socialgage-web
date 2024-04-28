import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box } from '@chakra-ui/react';
import Sample from '../../image/sample1.jpg' // make sure to import the image correctly

function PersonalIntro() {
  return (
    <Flex direction={{ base: "column", md: "row" }} mb="10" py="10">
            <Box flex="1" mr="4">
            <Image src={Sample} alt="Personal touch" height="100%" />
            </Box>
            <VStack spacing="5" align="flex-start">
                <Heading as="h2" size="xl">
                    Nice to Meet You
                </Heading>
                <Text fontSize="lg">
                    I'm McKenna
                </Text>
                <Text>
                    With hearts eyes for stellar branding, social media, aesthetic and strategy, Howdy Studio was built.
                </Text>
            {/* Add more personal details if needed */}
            </VStack>
        </Flex>
  );
}

export default PersonalIntro;

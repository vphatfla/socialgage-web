import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box } from '@chakra-ui/react';
import Sample from '../../image/About/sample1.jpg' // make sure to import the image correctly

function PersonalNotes() {
  return (
    <Box position="relative" mb="10" bg='blue.200' borderRadius={10}>
      {/* Container for text content */}
      <Flex
          direction={{ base: "column", md: "row" }}
          p={{ base: "4", md: "10" }}
          justifyContent="center"
          alignItems="center"
          borderRadius={10}  
      >
          <VStack flex="1" alignItems="start" spacing="5" p="5" color="white">
              <Heading size="2xl" fontWeight="bold">
                  GET TO KNOW ME
              </Heading>
              <Text fontStyle="italic">
                  I'm a Virgo. By nature, I'm crazy organized, a goal-setter with...
              </Text>
              <Text fontStyle="italic">
                  I'm a Virgo. By nature, I'm crazy organized, a goal-setter with...
              </Text>
              <Text fontStyle="italic">
                  I'm a Virgo. By nature, I'm crazy organized, a goal-setter with...
              </Text>
              <Text fontStyle="italic">
                  I'm a Virgo. By nature, I'm crazy organized, a goal-setter with...
              </Text>
              <Text fontStyle="italic">
                  I'm a Virgo. By nature, I'm crazy organized, a goal-setter with...
              </Text>
              {/* More text elements */}
          </VStack>
      </Flex>

      {/* Image container with absolute positioning */}
      <Box position="absolute" top="4" right="4" width="300px" height="300px" overflow="hidden" borderRadius="full">
          <Image src={Sample} alt="Personal touch" objectFit="cover" />
      </Box>
    </Box>
  );
}

export default PersonalNotes;

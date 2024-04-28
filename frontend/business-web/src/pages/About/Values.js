import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box, SimpleGrid } from '@chakra-ui/react';
import Background1 from '../../image/background1.jpg'

function Values() {
  return (
    <Box bgImage={Background1} bgSize="cover" bgPosition="center" py="10">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="40px" mb="10" p={100}>
            {/* Repeat this Box for each value you have */}
            <Box bg="gray.100" p="4" borderRadius="md">
                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                <Heading as="h3" size="lg" mt="4">
                COLLABORATION
                </Heading>
                <Text mt="4">
                I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                </Text>
            </Box>

            <Box bg="gray.100" p="4" borderRadius="md">
                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                <Heading as="h3" size="lg" mt="4">
                COLLABORATION
                </Heading>
                <Text mt="4">
                I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                </Text>
            </Box>

            <Box bg="gray.100" p="4" borderRadius="md">
                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                <Heading as="h3" size="lg" mt="4">
                COLLABORATION
                </Heading>
                <Text mt="4">
                I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                </Text>
            </Box>
            {/* ... other value boxes */}
            </SimpleGrid>
        </Box>
  );
}

export default Values;

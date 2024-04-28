import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box, Button } from '@chakra-ui/react';
import Sample from '../../image/sample1.jpg' // make sure to import the image correctly
import { Link as RouterLink } from 'react-router-dom';

function CallAction() {
  return (
    <VStack spacing="5" align="center" py="10" backgroundColor="gray.200">
        <Text fontSize="lg">
            READY TO GO AGAINST THE GRAIN & SHOW UP AS THE BRAND OF YOUR DREAMS?
        </Text>
        <RouterLink to="/contact">
            <Button colorScheme="blue">
                DISCOVER MY SERVICES
            </Button>
        </RouterLink>
    </VStack>
  );
}

export default CallAction;

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                About Us
            </Heading>
            <Text fontSize="lg">
                Welcome to our About page! We are a team of passionate individuals dedicated to providing the best experience for our users.
            </Text>
        </Box>
    );
};

export default About;
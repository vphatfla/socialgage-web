import React from 'react';
import { Box, VStack, Text, Image, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Sample from '../../image/sample1.jpg'
import Background1 from '../../image/background1.jpg'
import Intro from './Intro';
import Values from './Values';
import PersonalIntro from './PersonalIntro';
import PersonalNotesSection from './PersonalNotes';
import CallAction from './CallAction';
// Add any other imports you might need

function About() {
return (
    <Box maxWidth="1200px" mx="auto" p="4">
        {/* Intro Section */}
        <Intro />
        {/* Values Section */}
        <Values />
        {/* Personal Introduction Section */}
        <PersonalIntro />
        {/* Personal Note */}
        <PersonalNotesSection />
        {/* Call to Action Section */}
        <CallAction />
    </Box>
);
}

export default About;

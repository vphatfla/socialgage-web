import React from 'react';
import { Box, VStack, Text, Image, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Intro from './Intro';
import Values from './Values';
import PersonalIntro from './PersonalIntro';
import PersonalNotesSection from './PersonalNotes';
import CallAction from './CallAction';
import GetToKnow from './GetToKnow';
// Add any other imports you might need

function About() {
return (
    <Box>
        {/* Intro Section */}
        <Intro />
        {/* Values Section */}
        <Values />
        {/* Personal Introduction Section */}
        <PersonalIntro />
        {/* Personal Note */}
        {/* <PersonalNotesSection /> */}
        <GetToKnow />
        {/* Call to Action Section */}
        <CallAction />
    </Box>
);
}

export default About;

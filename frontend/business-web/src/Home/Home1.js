import React from "react";
import { Box, Text, Button, VStack, } from '@chakra-ui/react';
import Background from '../image/background1.jpg';


function Home1() {

    return (
        <Box
            w="100vw"
            h="auto" // Changed to 'auto' to allow for content below the viewport height
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {/* Background image container */}
            <Box
                bgImage={`url(${Background})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w="100%"
                h="100vh" // Set the height of the image container to be full screen
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <VStack spacing={4} textAlign="center">
                    {/* Title text */}
                    <Text
                        color="white"
                        fontSize="6xl"
                        fontWeight="bold"
                        textShadow="2px 2px 20px rgba(0, 0, 0, 0.3)"
                    >
                        Howdy Studio
                    </Text>
                    {/* Subtitle text */}
                    <Text
                        color="white"
                        fontSize="xl"
                        fontWeight="semibold"
                        textShadow="1px 1px 10px rgba(0, 0, 0, 0.3)"
                    >
                        Social Media Marketing & Brand & Web Design
                    </Text>
                    {/* Get Started button */}
                    <Button
                        size="lg"
                        colorScheme="blue"
                        variant="solid"
                    >
                        Get Started
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
}

export default Home1;

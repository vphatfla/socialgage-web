import React from 'react';
import { Box, Text, Button, VStack, HStack, Image } from '@chakra-ui/react';
import Sample from '../../image/sample1.jpg'
import { useInView } from 'react-intersection-observer';


function Home2() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    return (
        <Box>
            <HStack 
                spacing={10} // This adds space between the image and text
                w="100%"
                p={10}
                align="center" // This aligns items vertically in the center
                ref={ref}
            >
                {/* Box for the image */}
                <Box
                    w="40%" // Adjust the width as needed
                    h="auto"
                    sx={{
                        transition: 'transform 0.8s ease-out',
                        transform: inView ? 'translateX(0)' : 'translateX(-100%)', // 'translateX(-100%)' is more generic and works better with different layouts
                      }}
                >
                    <Image
                        src={Sample}
                        alt="Sample image"
                        fit="cover"
                        w="100%"
                        h="100%"
                    />
                </Box>

                {/* Box for the text */}
                <VStack
                    w="60%" // Adjust the width as needed
                    textAlign="left" // Text aligned to the left
                    spacing={4} // Adjust the space between text elements
                    align="start" // Aligns VStack contents to the start of the axis
                >
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={4}
                    >
                        HOWDY STUDIO IS AN
                    </Text>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={4}
                    >
                        INDEPENDENT
                    </Text>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        mb={8}
                    >
                        SPECIALIZING IN SOCIAL MEDIA
                    </Text>
                    {/* ...additional information text goes here... */}
                </VStack>
            </HStack>
        </Box>
    );
}

export default Home2;

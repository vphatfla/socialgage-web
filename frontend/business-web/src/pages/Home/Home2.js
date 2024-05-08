import React from 'react';
import { Box, Text, Button, VStack, HStack, Image, useBreakpointValue } from '@chakra-ui/react';
import Sample from '../../image/Home/sample1.jpg'
import { useInView } from 'react-intersection-observer';


function Home2() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
        {isMobile ? (
            <VStack 
                bg="#FBF8F3"
                w="100%"
                // padding="5%"
            >
                <HStack 
                    spacing="5vw" // This adds space between the image and text
                    w="100%"
                    align="center" // This aligns items vertically in the center
                    ref={ref}
                    padding="5%"
                >
                    {/* Box for the image */}
                    <Box
                        w="50%" // Adjust the width as needed
                        h="30vw"
                        sx={{
                            transition: 'transform 0.8s ease-out',
                            transform: inView ? 'translateX(0)' : 'translateX(-100%)', // 'translateX(-100%)' is more generic and works better with different layouts
                        }}
                    >
                        <Image
                            src={Sample}
                            alt="Sample image"
                            fit="cover"
                            height="100%"
                            width="100%"
                            objectFit="cover"  // Ensures the image covers the given dimension
                            objectPosition="center"

                        />
                    </Box>

                    {/* Box for the text */}
                    <VStack
                        w="100%" // Adjust the width as needed
                        textAlign="left" // Text aligned to the left
                        spacing={1} // Adjust the space between text elements
                        align="start" // Aligns VStack contents to the start of the axis
                    >
                        <Text
                            fontFamily="Maharlika"
                            fontSize="3xl"
                            fontWeight="bold"
                            fontSize="calc(3vw)"
                        >
                            HOWDY STUDIO IS AN
                        </Text>
                        <Text
                            fontFamily="Maharlika"
                            fontSize="calc(3vw)"
                            fontWeight="bold"
                        >
                            INDEPENDENT CREATIVE STUDIO
                        </Text>
                        <Text
                            fontFamily="Maharlika"
                            fontSize="calc(3vw)"
                            fontWeight="bold"
                        >
                            SPECIALIZING IN SOCIAL MEDIA
                        </Text>
                        <Text
                            fontFamily="Maharlika"

                            fontSize="calc(3vw)"
                            fontWeight="bold"
                        >
                            BRANDING & WEB DESIGN
                        </Text>
                        {/* ...additional information text goes here... */}
                    </VStack>
                </HStack>
                <VStack 
                    mx="10%" 
                    spacing={4} 
                    fontSize="calc(2vw)"
                    fontFamily="Montserrat">
                        <Box>
                            <Text>
                                Hi, I'm McKenna! I use a strategy & an experience-driven approach to elevate your brand. With an unmatched eye for aesthetics, stand out with Howdy Studio
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                Howdy Studio is a creative agency that specializes in social media. We help brands and businesses grow their online presence through creative content and strategic planning.
                            </Text>
                        </Box>
                </VStack>
                <VStack
                    mb="5%"
                >
                    {/* Alert Bold text underline*/}
                    <Text
                        fontSize="2.5vw"
                        fontWeight="bold"
                        textDecoration="none"
                        mt="5%"
                    >
                        Spoiler Alert:

                    </Text>
                    <Text
                        fontSize="2.5vw"
                        fontWeight="bold"
                        textDecoration="none"
                        m="-5%"
                    >
                        Levelling Up Your Brand is Coming Soon

                    </Text>
                    <Text
                        fontSize="2.5vw"
                        fontWeight="bold"
                        textDecoration="underline"
                    >
                        is Coming Soon

                    </Text>
                </VStack>
            </VStack>
            
        ) : (
            <VStack 
                bg="#FBF8F3"
                w="100%"
                padding="5vw"
            >
                <HStack 
                    spacing="5vw" // This adds space between the image and text
                    w="100%"
                    align="center" // This aligns items vertically in the center
                    ref={ref}
                    padding="5%"
                >
                    {/* Box for the image */}
                    <Box
                        w="50%" // Adjust the width as needed
                        h="30vw"
                        sx={{
                            transition: 'transform 0.8s ease-out',
                            transform: inView ? 'translateX(0)' : 'translateX(-100%)', // 'translateX(-100%)' is more generic and works better with different layouts
                        }}
                    >
                        <Image
                            src={Sample}
                            alt="Sample image"
                            fit="cover"
                            height="100%"
                            width="100%"
                            objectFit="cover"  // Ensures the image covers the given dimension
                            objectPosition="center"

                        />
                    </Box>

                    {/* Box for the text */}
                    <VStack
                        w="100%" // Adjust the width as needed
                        textAlign="left" // Text aligned to the left
                        align="start" // Aligns VStack contents to the start of the axis
                    >
                        <Text
                            fontFamily="Maharlika"
                            fontWeight="bold"
                            mb={-4}
                            fontSize="2.5vw"
                        >
                            HOWDY STUDIO IS AN
                        </Text>
                        <Text
                            fontFamily="Maharlika"
                            fontSize="2.5vw"
                            fontWeight="bold"
                            mb={-4}
                        >
                            INDEPENDENT CREATIVE STUDIO
                        </Text>
                        <Text
                            fontFamily="Maharlika"
                            fontSize="2.5vw"
                            fontWeight="bold"
                            mb={-4}
                        >
                            SPECIALIZING IN SOCIAL MEDIA
                        </Text>
                        <Text
                            fontFamily="Maharlika"
                            fontSize="2.5vw"
                            fontWeight="bold"
                            mb={-4}
                        >
                            BRANDING & WEB DESIGN
                        </Text>
                        <HStack 
                            mt={5} 
                            spacing={4} 
                            fontSize="calc(1.5vw)"
                            fontFamily="Montserrat">
                                <Box>
                                    <Text>
                                        Hi, I'm McKenna! I use a strategy & an experience-driven approach to elevate your brand. With an unmatched eye for aesthetics, stand out with Howdy Studio
                                    </Text>
                                </Box>
                                <Box>
                                    <Text>
                                        Howdy Studio is a creative agency that specializes in social media. We help brands and businesses grow their online presence through creative content and strategic planning.
                                    </Text>
                                </Box>
                        </HStack>
                        {/* ...additional information text goes here... */}
                    </VStack>
                </HStack>

                <Box
                    mb="5%"
                >
                    {/* Alert Bold text underline*/}
                    <Text
                        fontSize="2.5vw"
                        fontWeight="bold"
                        textDecoration="underline"
                        
                    >
                        Spoiler Alert: Levelling Up Your Brand is Coming Soon

                    </Text>
                </Box>
            </VStack>
        )}
        </>
    );
}

export default Home2;

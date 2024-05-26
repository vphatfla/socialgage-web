import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import Sample from '../../image/About/sample1.jpg' // make sure to import the image correctly

function PersonalIntro() {
    const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
    {isMobile ? (
        <Box p="10%" mb="10%">
            <SimpleGrid columns={{ base: 1, md: 2}} spacing="5%">
                <Box>
                    <Image 
                        src={Sample} 
                        alt="Personal touch"
                        objectFit="cover"
                        objectPosition="center"
                        width="100%"
                    />
                </Box>
                <Box>
                    <Text fontSize="4vw">
                        I'm McKenna
                    </Text>
                    <Text fontSize="2vw">
                        <br />
                        With heart eyes for stellar branding, social media, aesthetics and strategy, Howdy Studio was built.
                        <br />
                        <br />
                        During my time as a Journalism and Communications student, I began learning the ins and outs of content creation, marketing and entrepreneurship.
                        <br />
                        <br />
                        Throughout my undergraduate degree, I completed a Fashion Communications and Luxury Brand Management internship in Madrid. Later, I interned at a communications agency, gaining experience in brand strategy, design, and social media.
                        <br />
                        <br />
                        Post-grad, I worked full time in marketing at a non-profit and then transitioned to freelance marketing and social media roles and then worked at a social media marketing agency. Through these roles, I gained a deep understanding for all things social media, branding & design.
                        <br />
                        <br />
                        I have always felt moved to be an entrepreneur, so my next natural step was building Howdy Studio. I am so thrilled that you are here!
                    </Text>

                </Box>
            </SimpleGrid>
        </Box>
    ): (
        <Box p="10%">
            <SimpleGrid columns={{ base: 1, md: 2}} spacing="5%">
                <Box>
                    <Image 
                        src={Sample} 
                        alt="Personal touch"
                        objectFit="cover"
                        objectPosition="center"
                        width="100%"
                    />
                </Box>
                <Box>
                    <Text fontSize="3vw">
                        I'm McKenna
                    </Text>
                    <Text fontSize="1.5vw">
                        <br />
                        With heart eyes for stellar branding, social media, aesthetics and strategy, Howdy Studio was built.
                        <br />
                        <br />
                        During my time as a Journalism and Communications student, I began learning the ins and outs of content creation, marketing and entrepreneurship.
                        <br />
                        <br />
                        Throughout my undergraduate degree, I completed a Fashion Communications and Luxury Brand Management internship in Madrid. Later, I interned at a communications agency, gaining experience in brand strategy, design, and social media.
                        <br />
                        <br />
                        Post-grad, I worked full time in marketing at a non-profit and then transitioned to freelance marketing and social media roles and then worked at a social media marketing agency. Through these roles, I gained a deep understanding for all things social media, branding & design.
                        <br />
                        <br />
                        I have always felt moved to be an entrepreneur, so my next natural step was building Howdy Studio. I am so thrilled that you are here!
                    </Text>

                </Box>
            </SimpleGrid>
        </Box>
    )}
    </>
    

  );
}

export default PersonalIntro;

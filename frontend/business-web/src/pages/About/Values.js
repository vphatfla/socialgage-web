import React, {useEffect, useState} from 'react';
import { Flex, VStack, Heading, Text, Image, Box, SimpleGrid, HStack, useBreakpointValue } from '@chakra-ui/react';
import Background1 from '../../image/About/background.jpg'

function Values() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            {isMobile ? (
                <Box 
                    id="values-container"
                    bgImage={Background1} 
                    bgSize="cover" 
                    bgPosition="center"
                    width="100vw"
                    height="auto"
                    display="flex"
                    alignItems="center"
                >
                
                    <SimpleGrid columns={{ base: 1, md: 3}} 
                                spacing="40px"
                                px="20%"
                                py="10%"
                                width="100%"
                                height= "auto"
                                mx="auto" // Center the grid
                                
                    >
                        {/* Repeat this Box for each value you have */}
                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="3vw"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="5%"
                                    fontSize='2vw'
                                    noOfLines={6}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>
                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="3vw"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="5%"
                                    fontSize='2vw'
                                    noOfLines={6}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>
                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="3vw"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="5%"
                                    fontSize='2vw'
                                    noOfLines={6}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>


                    
                    </SimpleGrid>
                </Box>

            ) : (
                <Box id="values-container" 
                    bgImage={Background1} 
                    bgSize="cover" 
                    bgPosition="center" 
                    width="100vw"
                    height="40vw"
                    display="flex"
                    alignItems="center" 
                    padding="10vw"
                >
                
                    <SimpleGrid columns={{ base: 1, md: 3}} 
                                spacing="7%" 
                                p="5%"
                                mx="auto" // Center the grid
                    >
                        {/* Repeat this Box for each value you have */}
                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>

                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>

                        <Box bg="#FBF8F3" p="5%" borderRadius="3xl" textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>


                    
                    </SimpleGrid>
                </Box>
            )}
        </>
    );
}

export default Values;

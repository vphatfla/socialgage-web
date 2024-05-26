import React, {useEffect, useState} from 'react';
import { Flex, VStack, Heading, Text, Image, Box, SimpleGrid, HStack, useBreakpointValue } from '@chakra-ui/react';
import Background1 from '../../image/About/background.jpg'

function Values() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
        <Box mb="1.5%" borderY="0.15vw solid #4D95B5" py="0.2%"/>
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
                                textColor="#FBF8F3"
                    >
                        {/* Repeat this Box for each value you have */}
                        <Box bg="#4D95B5" p="5%" borderRadius="3xl" borderWidth={"0.3vw"} fontWeight={"500"} textAlign="center">
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
                        
                        <Box bg="#4D95B5" p="5%" borderRadius="3xl" borderWidth={"0.3vw"} fontWeight={"500"} textAlign="center">
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

                        <Box bg="#4D95B5" p="5%" borderRadius="3xl" borderWidth={"0.3vw"} fontWeight={"500"} textAlign="center">
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
                    // width="100vw"
                    // height="40%"
                    display="flex"
                    alignItems="center" 
                    padding="8%"
                >
                
                    <SimpleGrid columns={{ base: 1, md: 3}} 
                                spacing="7%" 
                                p="4%"
                                mx="auto" // Center the grid
                                textColor={"#FBF8F3"}
                    >
                        {/* Repeat this Box for each value you have */}
                        <Box bg="#4D95B5" p="10%" borderRadius="3xl" borderWidth={"0.2vw"} textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        mb="10%"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                    fontWeight={"500"}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>

                        <Box bg="#4D95B5" p="10%" borderRadius="3xl" borderWidth={"0.2vw"} textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        mb="10%"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                    fontWeight={"500"}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>

                        <Box bg="#4D95B5" p="10%" borderRadius="3xl" borderWidth={"0.2vw"} textAlign="center">
                                {/* <Image borderRadius="full" boxSize="150px" src={{Sample}} alt="Collaboration" /> */}
                                <Box>
                                    <Heading 
                                        as="h3" 
                                        fontSize="2vw"
                                        mb="10%"
                                    >
                                        COLLABORATION
                                    </Heading>
                                </Box>
                                <Text 
                                    mt="3%"
                                    fontSize= '1.5vw'
                                    fontWeight={"500"}
                                >
                                    I value your expertise in your industry and value the importance of effective teamwork. You will be part of every step in the process with complete guidance.
                                </Text>
                        </Box>


                    
                    </SimpleGrid>
                </Box>
            )}

        <Box mt="1.5%" borderY="0.15vw solid #4D95B5" py="0.2%"/>
        </>
    );
}

export default Values;

import React, {useEffect, useState} from 'react';
import { Flex, VStack, Heading, Text, Image, Box, SimpleGrid, HStack, useBreakpointValue } from '@chakra-ui/react';
import Background1 from '../../image/About/background.jpg'
import Sample from '../../image/About/sample1.jpg'

function GetToKnow() {

    return (
        <Box
            bgColor={"#4D95B5"}
            position={"relative"} 
            p={"5%"}
            pr={"20%"}
            textColor={"#FBF8F3"}

        >
            <SimpleGrid
                spacing={"5%"}
                columns={{ base: 1, md: 2}}
                templateColumns={{ base: "1fr", md: "1fr 7fr" }}
            >
                <Box
                    // bgColor={"tomato"}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                >
                    <Text 
                        fontSize={"4vw"}
                        transform={{md:"rotate(-90deg)"}}
                        whiteSpace="nowrap"
                        position={{md:"absolute"}}
                        transformOrigin="center"                  
                    >
                        GET TO KNOW ME
                    </Text>
                </Box>
                
                <Box>
                    <VStack>
                        <Box
                            borderTop={"0.1vw solid #FBF8F3"}
                            py={"4%"}
                        >
                            <Text>
                                ✸ I’m a virgo. By nature, I’m crazy organized, a goal-setter with unmatchable determination, have an analytical mind, and get sh*t done.
                            </Text>
                        </Box>

                        <Box
                            borderTop={"0.1vw solid #FBF8F3"}
                            py={"4%"}
                        >
                            <Text>
                                ✸ I’m a virgo. By nature, I’m crazy organized, a goal-setter with unmatchable determination, have an analytical mind, and get sh*t done.
                            </Text>
                        </Box>

                        <Box
                            borderTop={"0.1vw solid #FBF8F3"}
                            py={"4%"}
                        >
                            <Text>
                                ✸ I’m a virgo. By nature, I’m crazy organized, a goal-setter with unmatchable determination, have an analytical mind, and get sh*t done.
                            </Text>
                        </Box>

                        <Box
                            borderTop={"0.1vw solid #FBF8F3"}
                            py={"4%"}
                        >
                            <Text>
                                ✸ I’m a virgo. By nature, I’m crazy organized, a goal-setter with unmatchable determination, have an analytical mind, and get sh*t done.
                            </Text>
                        </Box>

                        
                    </VStack>
                </Box>
            </SimpleGrid>
            <Box>
                    <Image
                        src={Sample}
                        width={"10%"}
                        position={"absolute"}
                        top={"-10%"}
                        right={"5%"}
                    />
            </Box>
        </Box>
    );
}

export default GetToKnow;

import {HStack, Link, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center, VStack, SimpleGrid } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Collapse, Text } from "@chakra-ui/react";
import Logo from '../../image/Home/logo.png';
import Sample from '../../image/Home/sample1.jpg'
import Background from '../../image/Home/background.jpg';

function Home5() {
    return (
        <Box
            padding={{base: "15%", md: "7%"}}
            bg={"#FBF8F3"}
            position={"relative"}
        >
            <Box
                    position="absolute"
                    top={{base: "1%", md: "2%"}}
                    left="0"
                    right="0"
                    height={{base: "0.5%", md: "1.5%"}} // Height of the first line
                    // bg="red" // Color of the line
                    borderY={{base: "0.4vw solid #4D95B5", md: "0.2vw solid #4D95B5"}}
            />
            <Box
                    position="absolute"
                    bottom={{base: "1%", md: "2%"}}
                    left="0"
                    right="0"
                    height={{base: "0.5%", md: "1.5%"}} // Height of the first line
                    // bg="red" // Color of the line
                    borderY={{base: "0.4vw solid #4D95B5", md: "0.2vw solid #4D95B5"}}
            />

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{base: "5%", md: "10%"}}>
                <Box
                    height={{ base: "80vw", md:"30vw" }}
                >
                      <Image
                        height={"100%"}
                        width={"100%"}
                        src={Sample}
                        objectFit={"contain"}
                        objectPosition={"center"}
                      />
                </Box>
                    
                <Box
                    height={{ base: "80vw", md:"30vw" }}
                >
                      <Image
                        height={"100%"}
                        width={"100%"}
                        src={Sample}
                        objectFit={"contain"}
                        objectPosition={"center"}
                      />
                </Box>

                <Box
                    height={{ base: "80vw", md:"30vw" }}
                >
                      <Image
                        height={"100%"}
                        width={"100%"}
                        src={Sample}
                        objectFit={"contain"}
                        objectPosition={"center"}
                      />
                </Box>
            </SimpleGrid>
            <Center mt={{base: "45%", md: "5%"}}>
                <Link href="/portfolio" fontStyle={"italic"} textDecoration={"underline"} fontSize={{base: "5vw", md: "2vw"}}>
                    View Portfolio
                </Link>
            </Center>
        </Box>
    );
}

export default Home5;

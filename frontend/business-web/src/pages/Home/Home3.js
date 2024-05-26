import {Link, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Collapse, Text } from "@chakra-ui/react";
import Logo from '../../image/Home/logo.png';
import Sample from '../../image/Home/sample1.jpg'
import { useInView } from 'react-intersection-observer';

function Home3() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
    <Center position={"relative"} bg="#4D95B5" ref={ref}>
        <Box 
            width="15%"
            position={"absolute"}
            top="5%"
            left="5%"
            
            sx={{
                transition: 'transform 0.8s ease-out',
                transform: `${inView ? 'translateX(0)' : 'translateX(-100%)'} rotate(-20deg)`, // 'translateX(-100%)' is more generic and works better with different layouts
            }}

        >
            <Image 
                src={Logo}
                objectFit={"cover"}
                objectPosition={"center"}
            />
        </Box>

        <Box 
            width="15%"
            position={"absolute"}
            bottom="20%"
            right="5%"
            sx={{
                transition: 'transform 0.8s ease-out',
                transform: `${inView ? 'translateX(0)' : 'translateX(50%)'} `, // 'translateX(-100%)' is more generic and works better with different layouts
            }}

        >
            <Image 
                src={Sample}
                height={"100%"}
                width={"100%"}
                objectFit={"fill"}
                objectPosition={"center"}
            />
        </Box>
        <Box width="50%" my="15%" textColor={"#FBF8F3"}>
            <Accordion allowMultiple >
                
                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem mb="8%">
                    <AccordionButton fontSize="2vw" fontWeight="500">
                        <Box as='span' flex='1' textAlign='left' >
                            SOCIAL MEDIA MANAGEMENT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="1.5vw">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
            <Center>
                <Link href="/services" fontStyle={"italic"} textDecoration={"underline"} fontSize={"2vw"}>
                    View Services
                </Link>
            </Center>

        </Box>
        
        
        
        
    </Center>
    
  );
}

export default Home3;

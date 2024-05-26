import {HStack, Image, Grid, GridItem, AccordionPanel, AccordionIcon, Box, Center, VStack, SimpleGrid, Button } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Collapse, Text } from "@chakra-ui/react";
import Logo from '../../image/Home/logo.png';
import Sample from '../../image/Home/sample1.jpg'
import Background from '../../image/Home/background.jpg';
import { Link } from "react-router-dom";

function Home6() {
    return (
        <Box
            bgColor={"#4D95B5"}
            p={"5%"}
        >
            <VStack>
                <Center>
                    <Text fontSize="3vw" textColor={"#FBF8F3"}>
                    READY TO GO AGAINST THE GRAIN & SHOW UP 
                    <br/>
                    AS THE BRAND OF YOUR DREAMS?
                    </Text>
                </Center>

                <Grid
                    h={"25vw"}
                    w={"100%"}
                    mt={"2%"}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(10, 1fr)'
                    gap={"4%"}
                    textColor={"#FBF8F3"}

                >
                    <GridItem rowSpan={2} colSpan={2}>
                        <Image
                            src={Sample}
                            objectFit={"contain"}
                            objectPosition={"center"}
                            width={"100%"}
                            height={"100%"}
                        />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3}>
                        <Text fontSize="1.5vw" >
                            At Howdy Studio, transparency, attention to detail, and positioning strategy at the forefront of your brand is signature in my process.
                        </Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3}>
                        <Text fontSize="1.5vw">
                            Click below to fill out the project inquiry form to book a discovery call. I’m so excited to hear more about how I can help you reach your goals.
                        </Text>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={2} />
                    <GridItem 
                        rowSpan={1} 
                        colSpan={6} 
                        display={"flex"} 
                        alignItems={"center"} 
                        justifyContent={"center"}    
                    >
                        <Button 
                            bgColor={"#F79256"} 
                            borderRadius={0} 
                            borderWidth={"0.2vw"} 
                            borderColor={"black"}
                            h={"35%"}
                            width={"80%"}
                            px={"15%"}
                            fontSize={"2vw"}
                        >
                            <Link to="/inquire">
                                <Text  textColor={"#FBF8F3"}>
                                    SCHEDULE A FREE DISCOVERY CALL
                                </Text>
                            </Link>
                        </Button>
                    </GridItem>
                </Grid>

            </VStack>

        </Box>
    );
}

export default Home6;

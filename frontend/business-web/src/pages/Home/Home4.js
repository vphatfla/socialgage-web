import React from "react";
import {Flex, Input, Box, Text, Button, VStack, Image} from '@chakra-ui/react';
import Background from '../../image/Home/background.jpg';
import Logo from '../../image/Home/logo.png';
import { Link } from "react-router-dom";

function Home4() {

    return (
        <Box
            bgImage={Background}
            py="5%"
            textColor={"#FBF8F3"}
        >
            <VStack>
                <Box>
                    <Text fontSize={"3vw"}>
                        Packages & Pricing
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={"2vw"} textAlign="center">
                        Sign up with your email address to receive a guild with detailed information
                        <br/>
                        about package, prices, & FAQs.
                    </Text>
                </Box>

                <Flex
                    as="form"
                    align="center"  // Align items vertically
                    justify="space-between"  // Distribute space between elements
                    p={4}  // Padding around the Flex container
                    w={{base: "100%", md: "60%"}}
                    flexDirection={{ base: "column", md: "row" }}
                    
                >
                    <Input
                        placeholder="Name"
                        mr={2}  // Margin right for spacing between the input and the next element
                        w="40%"  // Width of the name input
                        borderColor="gray.300"  // Border color similar to the image
                        mb={{ base: 2, md: 0 }}  // Margin bottom for spacing between the input and the next element
                        _placeholder={{ color: "#FBF8F3" }}
                    />
                    <Input
                        placeholder="Email Address"
                        mr={2}
                        w="40%"
                        borderColor="gray.300"
                        mb={{ base: 2, md: 0 }}
                        _placeholder={{ color: "#FBF8F3" }}  // Set the placeholder color to red
                    />
                    <Button
                        colorScheme="blue"
                        px={8}  // Padding left and right to make the button wider
                        type="submit"  // Set button type as submit for form submission
                        bg={"#4D95B5"}  // Set the background color of the button
                    >
                        Submit
                    </Button>
                </Flex>

            </VStack>
            
        </Box>
    );
}

export default Home4;

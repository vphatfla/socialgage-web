import React from "react";
import { Box, Text, Button, VStack, Image, Center} from '@chakra-ui/react';
import Background from '../../image/Home/background.jpg';
import Logo from '../../image/Home/logo.png';
import { Link } from "react-router-dom";

function Home1() {

    return (
        <>

        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position={"relative"}
        >


            {/* Background image container */}
            <Box
                bgImage={Background}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    position="absolute"
                    top="2%"
                    left="0"
                    right="0"
                    height="1.5%" // Height of the first line
                    // bg="red" // Color of the line
                    borderY="0.2vw solid #FBF8F3"

                />
                    
                <VStack 
                    spacing={4}
                    textAlign="center" 
                    px="5%" 
                    py="8%"

                >
                    {/* Title text */}
                     <Image 
                        src={Logo} 
                        alt="Logo" 
                        width= "50%" 
                        height="auto"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    <Box
                        height={"5vw"}
                    >
                        <Button
                            // margin="4%"
                            bgColor={"#4D95B5"} 
                            borderRadius={0} 
                            borderWidth={"0.2vw"} 
                            borderColor={"black"}
                            h={"100%"}
                            // px={"15%"}
                            fontSize={"2vw"}
                        >
                            <Link to="/service" style={{ textDecoration: 'none', color: 'white' }}>
                                GET STARTED
                            </Link>
                        </Button>
                    </Box>
                    
                </VStack>

                <Box
                    position="absolute"
                    bottom="2%"
                    left="0"
                    right="0"
                    height="1.5%" // Height of the first line
                    // bg="red" // Color of the line
                    borderY="0.2vw solid #FBF8F3"

                />
            </Box>
        </Box>
        </>
    );
}

export default Home1;

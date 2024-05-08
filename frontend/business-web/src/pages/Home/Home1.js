import React from "react";
import { Box, Text, Button, VStack, Image} from '@chakra-ui/react';
import Background from '../../image/About/background.jpg';
import Logo from '../../image/Home/logo.png';
import { Link } from "react-router-dom";

function Home1() {

    return (
        <Box
            w="100%"
            h="50vw" // Changed to 'auto' to allow for content below the viewport height
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {/* Background image container */}
            <Box
                bgImage={Background}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                w="100%"
                h="100vh" // Set the height of the image container to be full screen
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                objectFit="cover"  // Ensures the image covers the given dimension
                objectPosition="center"
            >
                <VStack spacing={4} textAlign="center" p="5%">
                    {/* Title text */}
                     <Image 
                        src={Logo} 
                        alt="Logo" 
                        width= "40vw" 
                        height="auto"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    <Button
                        margin="4%"
                        colorScheme="blue"
                        variant="solid"
                        fontSize="2vw"
                        bg='#4D95B5'
                    >
                        <Link to="/service" style={{ textDecoration: 'none', color: 'white' }}>
                            Get Started
                        </Link>
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
}

export default Home1;

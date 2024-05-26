import React from 'react';
import { Flex, VStack, Heading, Text, Image, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Sample from '../../image/About/sample1.jpg'
import Background from '../../image/About/background.jpg';

function CallAction() {
  return (
    <Box
      height={"40vw"}
      position={"relative"}
    >
      <Image 
        src={Background} 
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <VStack 
        spacing="5" 
        align="center" 
        // py="10" 
        textAlign={"center"}
        position={"absolute"}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textColor={"#FBF8F3"}
      >
          <Text fontSize="3vw" whiteSpace="nowrap">
              READY TO GO AGAINST THE GRAIN & SHOW UP 
              <br />
              AS THE BRAND OF YOUR DREAMS?
          </Text>

              <Button
                  as={Link}
                  to="/services"
                  bgColor={"#F79256"} 
                  borderRadius={0} 
                  borderWidth={"0.2vw"} 
                  borderColor={"black"}
                  h={"4vw"}
                  px={"8%"}
                  fontSize={"2vw"}
              >

                      <Text  textColor={"#FBF8F3"}>
                        DISCOVER MY SERVICES
                      </Text>

              </Button>

      </VStack>
    </Box>
    
  );
}

export default CallAction;

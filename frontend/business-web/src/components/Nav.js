import React from 'react';
import {
    Flex,
    Box,
    Link,
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../image/Nav/logo1.png';

function NavBar() {
    // Determine if the viewport is at 'base' (mobile) or larger sizes ('md' or larger)
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex fontFamily="" p="2vh" color="black" backgroundColor="#FBF8F3" justifyContent="space-between" alignItems="center">
            {isMobile ? (
                // Mobile View: Hamburger Menu
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        aria-label="Options"
                    />
                    <MenuList>
                        <MenuItem as={Link} href="/">Home </MenuItem>
                        <MenuItem as={Link} href="/about">About</MenuItem>
                        <MenuItem as={Link} href="/service">Services</MenuItem>
                        <MenuItem as={Link} href="/portfolio">Portfolio</MenuItem>
                        <MenuItem as={Link} href="/inquire">INQUIRE</MenuItem>
                    </MenuList>
                    <Box p="2">
                        <Link href="/" _hover={{ textDecoration: 'none' }}>
                            <Image src={Logo} alt="Logo" boxSize="100px" position="absolute" ml="-70px" mt="-50px" />
                        </Link>
                    </Box>

                </Menu>
                
            ) : (
                // Desktop View
                <Flex justify="space-between" width="100%" >
                    <Flex>
                        <Box fontWeight="500" p="2" ml="10" _hover={{ textDecoration: 'underline', bg: 'gray.200', borderRadius: "10%"}}><Link href="/" >HOME</Link></Box>
                        <Box fontWeight="500" p="2" ml="10" _hover={{ textDecoration: 'underline', bg: 'gray.200', borderRadius: "10%"}}><Link href="/about" >ABOUT</Link></Box>
                        <Box fontWeight="500" p="2" ml="10" _hover={{ textDecoration: 'underline', bg: 'gray.200', borderRadius: "10%"}}><Link href="/service" >SERVICES</Link></Box>
                    </Flex>
                    <Box p="2">
                        <Link href="/" _hover={{ textDecoration: 'none' }}>
                            <Image src={Logo} alt="Logo" boxSize="130px" position="absolute" mt="-50px" ml="-100px" />
                        </Link>
                    </Box>
                    <Flex>
                        <Box fontWeight="500" p="2" ml="10" _hover={{ textDecoration: 'underline', bg: 'gray.200', borderRadius: "10%"}}><Link href="/portfolio" >PORTFOLIO</Link></Box>
                        <Box fontWeight="500" p="1" ml="10" bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' borderRadius="md" boxShadow="md">
                            <Link href="/inquire" _hover={{ textDecoration: 'none', bg: 'orange.500' }} p={2} display="block">
                                INQUIRE
                            </Link>
                        </Box>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}

export default NavBar;

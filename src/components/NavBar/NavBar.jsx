import { Flex, Box, Link, Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import logo from "../../assets/logo.png"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Flex p="4" bg="Black" align="center">
            <Box p="2">
                <Heading size="md" color="white">
                <img src={logo} width={'20%'} alt="Logo" />
                </Heading>
            </Box>
            <Spacer />
            <Box display="flex" alignItems="center">
                <Link color="white" mr="6">
                Inicio
                </Link >
                <Menu >
                <MenuButton mr="6" as={Button} rightIcon={<BsChevronDown /> } width="180px" >
                    Categorías
                </MenuButton>
                <MenuList >
                    <MenuItem>Remeras</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                    <MenuItem>Buzos</MenuItem>
                </MenuList>
                </Menu>
                <CartWidget />
            </Box>
        </Flex>
    );
};

export default NavBar;
import { Flex, Box,  Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Flex p="4" bg="Black" align="center">
            <Box p="2">
                <Heading size="md" color="white">
                    <Link to={'/'}>
                        <img src={logo} width={'45%'} alt="Logo" />
                    </Link>
                </Heading>
            </Box>
            <Spacer />
            <Box display="flex" alignItems="center " >
                <Link color="white" mr="6">
                Inicio
                </Link>
                <Menu>
                <MenuButton mr="6" as={Button} rightIcon={<BsChevronDown /> } width="180px" >
                    Categorías
                </MenuButton>
                <MenuList >
                    <MenuItem><Link to={'/category/Resina'}>Resina</Link></MenuItem>
                    <MenuItem><Link to={'/category/Fsv'}>Fsv</Link></MenuItem>
                    
                   
                </MenuList>
                </Menu>
                <Link to={'/cart'}>
                    <CartWidget />  
                </Link>
            </Box>
        </Flex>
    );
};

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="sm"
            src="https://w7.pngwing.com/pngs/724/759/png-transparent-apple-logo-apple-computer-icons-apple-logo-heart-computer-logo-thumbnail.png"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>Apple</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="black"
                  m="5"
                >
                  Catálogo
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="black"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorías
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"i14"}`}>
                  <MenuItem>iPhone14</MenuItem>
                </Link>
                <Link to={`/category/${"i13"}`}>
                  <MenuItem>iPhone13</MenuItem>
                </Link>
                <Link to={`/category/${"i12"}`}>
                  <MenuItem>iPhone12</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;

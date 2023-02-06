import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react"


const NavBar = () => {
  return (
    
    <div>
      <div>
      <Menu>
  <MenuButton>MENU</MenuButton>
  <MenuList>
    <MenuItem>iPhone</MenuItem>
    <MenuItem>Mac</MenuItem>
    <MenuItem>iPad</MenuItem>
  </MenuList>
      </Menu>
      <h1>Apple-Ecomm</h1>
      </div>
        <CartWidget/>
    </div>
  )
}

export default NavBar
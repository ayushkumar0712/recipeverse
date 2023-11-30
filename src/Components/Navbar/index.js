import React from 'react';
import { FaBars , FaHamburger} from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
         <NavLink  activeStyle>
          <FaHamburger/>
            RecipeVerse
         </NavLink>
        </NavMenu>
       
      </Nav>
    </>
  );
};
  
export default Navbar;
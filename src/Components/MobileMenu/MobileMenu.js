import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
    <Menu right>
      <NavLink to='/' className='nav'>Home</NavLink>
      <NavLink to='/need-milk' className='nav'>Need Milk</NavLink>
      <NavLink to='/donate' className='nav'>Donate</NavLink>
      <NavLink to='/about' className='nav'>About</NavLink>
      <NavLink to='/support' className='nav'>Support</NavLink>
    </Menu>
  );
};

export default MobileMenu;

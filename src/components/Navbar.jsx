import React from 'react'
import "../css/Navbar.css";
import Button from '@mui/material/Button';
import logo from "../Gallery/mb.png"
export const Navbar = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src="./logo" alt="" />
      </div>
      <div className='menu'>
        <div>Our Story</div>
        <div>Write</div>
        <div>Sign In</div>
        <Button variant="contained">Contained</Button>
      </div>
      <div className='name-person'>NAME-LOGO</div>
      </div>
  )
}

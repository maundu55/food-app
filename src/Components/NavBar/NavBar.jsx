import React from 'react'
import { BiCart } from 'react-icons/bi'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
      <div className='link'>
       <ul>
        <li>HOME</li>
       <li>DISHES</li>
       </ul>
      </div>
      <div className='logo-header'>
        <h2>GEN-Z DINER</h2>
      </div>
      <div className='nav_icon_wrapper'>
        <BiCart className='nav-icon' />
        <p className='nav_qty'>0</p>
      </div>
      </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import NavbarBelt from './Navbar/NavbarBelt/navbarBelt'
import NavbarBanner from './Navbar/NavbarBanner/navbarBanner'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarBelt/>
        <NavbarBanner/>
    </div>
  )
}

export default Navbar
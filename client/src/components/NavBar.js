import React from 'react'
import NavbarCSS from '../styles/Navbar.module.css'

function NavBar() {
    return (
        <nav className={NavbarCSS.navbar}>
            <div className={NavbarCSS.links}>
               <a href='/'>Day</a> 
               <a href='/week'>Week</a> 
               <a href='/month'>Month</a> 
               <a href='/year'>Year</a> 
            </div>
        </nav>
    )
}

export default NavBar

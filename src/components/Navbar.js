import React from 'react'
import NavbarItem from './NavbarItem'

const Nav = ({items = []}) => items.map( NavbarItem )

const NavBar = ({ brandName = 'Colors', items }) => ( 
    <nav className="nav-wrapper blue-grey darken-3">
        <a href="/" className="brand-logo">{ brandName }</a>
        <div className="container">
            <ul className="right">
                <Nav items={items} />
            </ul>
        </div>
    </nav> 
)

export default NavBar
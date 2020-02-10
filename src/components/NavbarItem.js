import React from 'react'
import { Link, useRouteMatch as isActive } from 'react-router-dom'

const  NavbarItem = ({ path, label, exact }) => (
    <li key={path} className={ isActive({path, exact}) ? 'active' : '' }>
        <Link to={path}>{label}</Link>
    </li>
)

export default NavbarItem

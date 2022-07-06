import React from "react";
import {Link} from 'react-scroll'

const NavbarMenu = (props) => {
    return(
        <li className="nav-item me-3 color-black-primary" style={{fontWeight:'500'}}>
            <Link to={props.menu.link} style={{cursor:'pointer'}} className="nav-link">{props.menu.title}</Link>
        </li>
    )
}


export default NavbarMenu
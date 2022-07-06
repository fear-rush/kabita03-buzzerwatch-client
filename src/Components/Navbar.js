import React from "react";
import './css/navbar.css'
import NavbarMenu from './NavbarMenu'
import Logo from '../assets/logo.png'

const Menu = [
    {'title':'Beranda', 'link':'Home'},
    {'title':'Tentang','link':'About'},
    {'title':'Team','link':'Team'},
]
const Navbar = () => {
    return(
        <header className="">
            <nav className="navbar navbar-expand-md navbar-light scrolling-navbar justify-content-between" id="navbar">
                <div className="container my-1">
                    <img className="navbar-brand" src={Logo} alt="Buzzer Watch"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto navbar-right">
                            {Menu.map((data,key)=>(
                                <NavbarMenu key={key} menu={data}/>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Navbar
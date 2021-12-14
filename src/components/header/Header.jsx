import React from 'react'
import menu from '../../assets/icons/bars-solid.svg'
import icon from '../../assets/icons/meteor-solid.svg'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src={icon} alt="Logo" className="navbar-logo"/> 
                </a>
            </div>
            <h1>Nombre de la web</h1>
            <div className="navbar-menu">
                <img src={menu} alt="menu" /> 
            </div>
        </nav>
        </div>
    )
}

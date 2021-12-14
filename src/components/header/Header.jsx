import React from 'react';
import menu from '../../assets/icons/bars-solid.svg';
import icon from '../../assets/icons/meteor-solid.svg';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src={icon} alt="Logo" className="navbar-logo"/> 
                </Link>
            </div>
            <h1 className="h1">Nombre de la web</h1>
            <div className="navbar-menu">
                <img className="img" src={menu} alt="menu" /> 
            </div>
        </nav>
        </div>
    )
}

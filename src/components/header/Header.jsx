import React from 'react';
import menu from '../../assets/icons/bars-solid.svg';
import icon from '../../assets/icons/meteor-solid.svg';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

export default function Header() {

    const location = useLocation();
    const ruta = location.pathname
    const idRuta = ruta.substring(1,20)
    let color = {}

    if(idRuta === 'emocional'){
        color = {background: '#FF7878'}
    }
    if(idRuta === 'financiero'){
        color = {background: '#507445'}
    }
    if(idRuta === 'laboral'){
        color = {background: '#517EA6'}
    }
    if(idRuta === 'register' || idRuta === 'login'){
        color = {background: '#F2994B'}
    }
    if(idRuta === 'dlogin'){
        color = {background: '#F2994B'}
    }

    return (
        <div>
            <nav className="navbar" style={color}>
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

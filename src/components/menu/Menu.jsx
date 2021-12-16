import React,{useState} from 'react'
import './Menu.css'
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap'
import { Link } from 'react-router-dom';
import menud from '../../assets/icons/bars-solid.svg'


export default function Menu() {

            const [dropdown, setDropdown,] = useState(false);
            const abrirCerrarDropdown=()=>{
                setDropdown(!dropdown);
            }
     
    return (

        <div className="container-menu">
            <Dropdown className="dropdown" isOpen={dropdown} toggle={abrirCerrarDropdown}> 
                <DropdownToggle className="dropbtn" header>
                    <img className="navbar-logo" src={menud} alt="" />
                </DropdownToggle>

                <DropdownMenu className="dropdown-content">  
                   <Link to="laboral" className="item" > Laboral </Link>
                    <Link to="emocional" className="item" > Emocional </Link>
                    <Link to="financiero" className="item" > Financiero </Link>
                    <Link to="register" className="item" >  Registate </Link>
                    <Link to="login" className="item" > Iniciar sesión </Link>
                </DropdownMenu>                
            
            
            </Dropdown>            
        </div>
    )
}
import React,{useState} from 'react'
import './Menu.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'


export default function Menu() {

            const [dropdown, setDropdown,] = useState(false);
            const abrirCerrarDropdown=()=>{
                setDropdown(!dropdown);
            }
     
    return (

        <div className="container-emo">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}> 
                <DropdownToggle header>
                    Menu
                </DropdownToggle>

                <DropdownMenu>  
                   <DropdownItem> Laboral </DropdownItem>
                    <DropdownItem> Emocional </DropdownItem>
                    <DropdownItem> Encuesta </DropdownItem>
                    <DropdownItem>  Registate </DropdownItem>
                    <DropdownItem> uno </DropdownItem>
                    <DropdownItem> otro</DropdownItem>
                </DropdownMenu>                
            
            
            </Dropdown>            
        </div>
    )
}
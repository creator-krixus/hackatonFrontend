import React,{useState} from 'react'
import './Menu.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import girls from '../../assets/images/girls.png'


export default function Menu() {

            const [dropdown, setDropdown,] = useState(false);
            const abrirCerrarDropdown=()=>{
                setDropdown(!dropdown);
            }
     
    return (

        <div className="container-emo">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}> 
                <DropdownToggle header className='label'>
                    <label htmlFor="btn-menu" className='btn-menu'>
                        <img className="test--img image" src={girls} alt="Work from home" />
                    </label>  
                </DropdownToggle>

                <DropdownMenu className='menu'>
                    <DropdownItem className='boton'> Laboral </DropdownItem>
                    <DropdownItem className='boton'> Emocional </DropdownItem>
                    <DropdownItem className='boton'> Encuesta </DropdownItem>
                    <DropdownItem className='boton'>  Registate </DropdownItem>
                    <DropdownItem className='boton'> uno </DropdownItem>
                    <DropdownItem className='boton'> otro</DropdownItem>
                </DropdownMenu>                
            
            
            </Dropdown>            
        </div>
    )
}
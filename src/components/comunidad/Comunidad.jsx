import React, {useRef, useEffect} from 'react'
import './Comunidad.css';
import searchinglooking from "../../assets/images/Searching - Looking.svg";






export default function Comunidad() {

    return (
       <div>
           
               <h3 className="last-title">Registrate y has parte de esta comunidad  ¡Regístrate!</h3>
               <div className="comunidad-container">
               <h3 className="last-title">Registrate y has parte de esta comunidad</h3>
               <img  className="searchinglooking" src={searchinglooking} alt=""/>
               </div>
               
           
      </div>
   )
}
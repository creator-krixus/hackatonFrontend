import React, {useRef, useEffect} from 'react'
import './Registrate.css';
import { TweenMax,Power3 } from 'gsap';
import { Link } from 'react-router-dom';




export default function Registrate() {

 
   let textItem = useRef(null);

   
   useEffect(() =>{

      
      TweenMax.to(textItem, .8, {opacity:1, y:1, ease:Power3.easeOut, delay:1})}, [])
   
    return (
       <div>
           <div className='register-container-reg'>
               <h3 className='paragraph' ref={el =>{textItem = el}} >Entre muchas otras herramientas. ¡Regístrate!</h3>             
               <Link to="register" className="secondary-button register">Regístrate</Link>
            </div>
      </div>
   )
}
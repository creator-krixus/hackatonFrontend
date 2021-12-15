import React, {useRef, useEffect} from 'react'
import './Agendar.css';
import { TweenMax,Power3 } from 'gsap';
import { Link } from 'react-router-dom';




export default function Agendar() {

 
   let textItem = useRef(null);

   
   useEffect(() =>{

      
      TweenMax.to(textItem,.8,{opacity:1, y:1, ease:Power3.easeOut, delay:1})},[])
   
    return (
       <div className='agendar-cont'>
           <div>
                <div className='paragraph'> <h3         className='paragraph-agendar' ref={el =>{textItem = el}} >Proximamente!</h3>
               </div>
               <div className="agendar-container">        <button className="secondary-button agendar"><Link to="agendar">Agendar cita con Coach</Link></button>
               </div>
              
           </div>
      </div>
   )
}
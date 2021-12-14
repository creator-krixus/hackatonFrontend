import React, {useRef, useEffect} from 'react'
import './Registrate.css';
import picos from '../../assets/components/peaksgreen.png';
import { TweenMax,Power3 } from 'gsap';
import { Link } from 'react-router-dom';




export default function Registrate() {

   let ImgRegist = useRef(null);
   let textItem = useRef(null);

   
   useEffect(() =>{

      
      console.log(ImgRegist);
      TweenMax.to(ImgRegist,.8,{opacity:1,y:1, ease:Power3.easeOut,delay:1})
      TweenMax.to(textItem,.8,{opacity:1, y:1, ease:Power3.easeOut, delay:1})},[])
   
    return (
       <div>
           
               <h3 ref={el =>{textItem = el}} className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
               <img ref={el =>{ImgRegist = el}} src= {picos} alt="Green peaks" className="down" />
               <div className="register-container">
                  <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
                  <button className="secondary-button register"><Link to="register">Regístrate</Link></button>
               </div>
           
      </div>
   )
}
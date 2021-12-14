import React, {useRef, useEffect} from 'react'
import './Registrate.css';
import picos from '../../assets/components/peaksgreen.png';
import { TweenMax,Power3 } from 'gsap';




export default function Registrate() {

   let ImgRegist = useRef(null);
   let textItem = useRef(null);

   
   useEffect(() =>{
      console.log(ImgRegist);
      TweenMax.to(ImgRegist,.8,{opacity:1,y:-20, ease:Power3.easeOut,delay:.2})
      TweenMax.to(textItem,.8,{opacity:1,y:-20, ease:Power3.easeOut, delay:.5})},[])
   
    return (
       <div>
           <main className='main'>
               <h3 ref={el =>{textItem = el}} className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
               <img ref={el =>{ImgRegist = el}} src= {picos} alt="Green peaks" className="down" />
            </main>
            
      </div>
   )
}
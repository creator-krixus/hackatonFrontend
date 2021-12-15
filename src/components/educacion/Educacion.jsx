import React, {useRef, useEffect, useState} from 'react'
import { TweenMax,Power3 } from 'gsap';
import './Educacion.css';
import CallService from '../../assets/images/Call Service.png'


export default function Educacion() {
        
            let callService = useRef(null);
            useEffect(() =>{
                TweenMax.staggerFrom([callService],0.8,{opacity:0, y:-540,rotate:360, ease:Power3.easeOut, delay:1})},[])
    return (
        
       <div>
           <main className='main'>
              <section className="main-learn">
                    <h4 className="learn--title title">Modulo de enseñanza.</h4>
                    <img ref={el =>callService = el} className="learn--img image" src={CallService} alt="Call service" />
                    <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                    <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                    <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
                </section>
            </main>
      </div>
   )
}

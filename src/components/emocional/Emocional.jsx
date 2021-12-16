import React, {useRef, useEffect } from 'react'
import './Emocional.css'
import curl from '../../assets/borders/curlpinkinverted.png'
import pink from '../../assets/images/pinkBusinessPlan.png'
import girls from '../../assets/images/girls.png'
import pinkCall from '../../assets/images/pinkCallService.png'
import curlPink from '../../assets/borders/curlpink.png'
import { TweenMax,Power3 } from 'gsap';


export default function Emocional() {

       
        let rosa = useRef(null);
        let chicas = useRef(null);
        let call = useRef(null);
        let boton = useRef(null);

    useEffect(() =>{
        TweenMax.staggerFrom([call], 0.8, {opacity:0, y:-540, rotate:360, ease:Power3.easeOut, delay:1})
        TweenMax.staggerFrom([rosa, chicas, boton], 0.8, {opacity:0, y:-540, ease:Power3.easeOut, delay:1})}, [])

    return (
        <div className="container-emo">
            <img  src={curl} alt="Blue peaks" className="up" />
            
            <img ref={el => rosa = el} className="hero" src={pink} alt="Girl in a computer" />

            <h3 className="principal-title" >Herramientas y recursos para:</h3>

            <section className="main-test">
                <h4 className="test--title title">Test de autoevaluación</h4>
                <p className="test--prg paragraph">Reconocer lo que sabemos y no sabemos es el primer caso.</p>
                <img ref={el => chicas = el} className="test--img image" src={girls} alt="Work from home" />
            </section>
            
            <section className="main-free">
                <h4 className="free--title title">Recursos educativos gratuitos para mejorar o  pedir asistencia</h4>
                <p className="free--prg paragraph">Las emociones como pilar hacer parte de nuestro día a día.</p>
            </section>
            <section className="main-learn">
                <h4 className="learn--title title">Modulo de enseñanza.</h4>
                <img ref={el => call = el}className="learn--img image" src={pinkCall} alt="" />
                <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
            </section>

            <div  className="register-container">
                <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
                <button  ref={el => boton = el} className="secondary-button register"><a href="/">Regístrate</a></button>
            </div>
            
            <img src={curlPink} alt="Blue peaks" className="down"></img> 
        </div>
    )
}

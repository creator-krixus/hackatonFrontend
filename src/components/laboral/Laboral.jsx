import React, {useRef, useEffect } from 'react'
import { TweenMax,Power3 } from 'gsap';
import './Laboral.css';
import bluePeaks from '../../assets/components/squareblueinverted.png'
import girl from '../../assets/images/blueBusinessPlan.png'
import down from '../../assets/components/squareblue.png'
import blue from '../../assets/images/blueCallService.png'
import bluePerson from '../../assets/images/bluepersonboard.png'
import work from '../../assets/images/bluepersoncalendar.png'
import { Link } from 'react-router-dom';




export default function Financiero() {

let chica = useRef(null);
let abajo = useRef(null);
let azul = useRef(null);
let personaAzul = useRef(null);
let trabajo = useRef(null);

useEffect(() =>{
     TweenMax.staggerFrom([chica, abajo, azul, personaAzul, trabajo], 0.8, {opacity:0, y:-540, ease:Power3.easeOut, delay:1})}, [])

    return (

    <div className="container-lab">
        <img src={bluePeaks} alt="Blue peaks" className="up"/>
        <img ref={el => chica = el} className="hero" src={girl} alt="Girl in a computer"/>
        <h3 className="principal-title" >Herramientas y recursos para:</h3>
        <section className="main-rights">
            <h4 className="rights--title title">Conocer tus derechos</h4>
            <p className="rights--prg paragraph">Te contamos sobre tus días libres, horas extras y ambiente laboral</p>
            <img  ref={el => trabajo = el} src={work} className="rights--img image"  alt="Work from home"/>
        </section>

        <section className="main-free">
            <h4 className="free--title title">Recursos educativos gratuitos para mejorar</h4>
            <p className="free--prg paragraph">Seleccionamos mensualmente los mejores contenidos en un solo lugar.</p>
        </section>
        
        <section className="main-conflict">
            <h4 className="conflict--title title">Aprende a manejar los conflictos de manera acertada</h4>
            <p className="conflict--prg paragraph">De la mano de coaches daremos guias y consejos.</p>
            <img ref={el => personaAzul = el} className="conflict--img image" src={bluePerson} alt="blueperson"/>
        </section>
        <section className="main-learn">
            <h4 className="learn--title title">Modulo de enseñanza.</h4>
            <img ref= {el => azul = el}className="learn--img image" src={blue} alt="blue"/>
            <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
            <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
            <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
        </section>
        <div className="register-container">
            <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
            <Link to="register" className="secondary-button register a">Regístrate</Link>
        </div>
        <div>
                <img ref={el => abajo = el} src={down} alt="Blue peaks" className="down"/>
        </div>
</div>
) }
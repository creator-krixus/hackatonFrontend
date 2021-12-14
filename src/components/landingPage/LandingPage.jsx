import React, {useRef, useEffect, useState} from 'react'
import { TweenMax,Power3 } from 'gsap';
import waveblueinverted from "../../assets/borders/waveblueinverted.png";
import waveblue from "../../assets/borders/waveblue.png";
import wavegreeninverted from "../../assets/borders/wavegreeninverted.png";
import wavegreen from "../../assets/borders/wavegren.png";
import wavepinkinverted from "../../assets/borders/wavepinkinverted.png";
import wavepink from "../../assets/borders/wavepink.png";
import searchinglooking from "../../assets/images/Searching - Looking.svg";
import navigateboat from "../../assets/images/Navigate - Rock the boat.png";
import singin from "../../assets/images/Sign In.png"
import './LandingPage.css';

export default function LandingPage() {
    let callService = useRef(null);
    let searching = useRef(null);
    let wave = useRef(null);
    let btnFin = useRef(null);
    let btnLab = useRef(null);
    let btnEmo = useRef(null);
    let btnServ = useRef(null);
    let bote = useRef(null);
    let sing = useRef(null);
    useEffect(() =>{
    TweenMax.staggerFrom([callService,searching,btnLab, wave],0.8,{opacity:0, y:-540, x:1000, ease:Power3.easeOut, delay:0.1})

    TweenMax.staggerFrom([btnEmo],0.8,{opacity:0, y:-540, x:0,rotate: 360,ease:Power3.easeOut, delay:0.1})
    
    TweenMax.staggerFrom([btnFin],0.8,{opacity:0, y:-540, x:-1000,rotate: 360,ease:Power3.easeOut, delay:0.1})
    TweenMax.staggerFrom([bote,btnServ],0.8,{opacity:0, y:-540, x:-1000,rotate: 360,ease:Power3.easeOut, delay:0.1})

    TweenMax.staggerFrom([sing],0.8,{opacity:0, y:-540, x:-1000, rotate: 360,ease:Power3.easeOut, delay:0.1})},[])
    return (
        <div>
            <main className="main">
                <section className="main-aboutus">
                    <img className="waves-blue-inverted" src={waveblueinverted} alt="Inverted blue waves"/>
                    <p>Nacemos con el objetivo de ayudar y apoyar a los trabajadores ofreciendoles herramientaspara su vida financiera, laboral y emocional</p>
                    <div className="aboutus-container">
                        <img ref={el =>searching = el} src={searchinglooking} alt="Searching Looking"/>
                        <h3>Nuestros tres pilares</h3>
                    </div>
                    <div className="container-buttons">
                        <button ref={el =>btnFin = el}className="secondary-button financiera"><a href="./financiero.html">Financiero</a></button>
                        <button ref={el =>btnLab = el} className="secondary-button laboral"><a href="./laboral.html">Laboral</a></button>
                        <button ref={el =>btnEmo = el} className="secondary-button emocional"><a href="./emocional.html">Emocional</a></button>
                    </div>
                    <h4>Conocélos para saber como poder ayudarte</h4>
                    <img className="waves-blue" src={waveblue} alt="Waves blue"/>
                </section>

                <section className="main-services">
                    <img  className="wave-green-inverted" src={wavegreeninverted} alt="Inverted green waves"/>
                    <h3>Te invitamos a tener un abrebocas de nuestro servicio</h3>
                    <div className="services-container">
                        <p>Te tomará de 5 a 10 minutos</p>
                        <button ref={el =>btnServ = el} className="encuesta">link a encuesta</button>
                    </div>
                    <img  ref={el =>bote = el} className="navigate-boat" src={navigateboat} alt="Boat"/>
                    <img ref={el =>callService = el} className="wave-green" src={wavegreen} alt="Green waves"/>
                </section>

                <section className="main-benefits">
                    <img ref={el =>wave = el} className="wave-pink-inverted" src={wavepinkinverted} alt="Inverted pink waves"/>
                    <div className="benefits-container" >
                        <h3>Regístrate. Se parte de nuestra comunidad</h3>
                        <img ref={el =>sing = el} className="singin" src={singin} alt=""/>
                    </div>
                    <img ref={el =>callService = el} className="wave-pink" src={wavepink} alt="Pink waves"/>
                </section>
            </main>
        </div>
    )
}

import React, {useRef, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap';
import wavepurpleinverted from "../../assets/borders/wavepurpleinverted.png";
import wavepurple from "../../assets/borders/wavepurple.png";
import searchinglooking from "../../assets/images/purpleSearching-Looking.svg";
import navigateboat from "../../assets/images/purpleNavigate -Rocktheboat.png";
import singin from "../../assets/images/purpleSignIn.png";
import { Link } from 'react-router-dom';
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
    let registrate = useRef(null);
    let btnRegistro = useRef(null);

    useEffect(() =>{
    TweenMax.staggerFrom([callService, searching, btnLab, wave, btnEmo, registrate, bote, btnServ, btnRegistro, btnFin, sing], 0.8, {opacity:0, y:-540, ease:Power3.easeOut, delay:0.1})},[])
    // JS code
    return (
        <div >
            
                <section className="main-aboutus">
                    <img className="waves-blue-inverted" src={wavepurpleinverted} alt="Inverted blue waves"/>
                    <p className="p">Nacemos con el objetivo de ayudar y apoyar a los trabajadores ofreciendoles herramientaspara su vida financiera, laboral y emocional</p>
                    <div className="aboutus-container">
                        <img ref={el =>searching = el} src={searchinglooking} alt="Searching Looking"/>
                        
                        <h3 className="h3">Nuestros tres pilares</h3>
                    </div>
                    <div className="container-buttons">
                        
                        <button ref={el =>btnFin = el} className="secondary-button financiera"> <Link className="a"   to="financiero">Financiero</Link></button>
                        <button ref={el =>btnLab = el} className="secondary-button laboral"> <Link className="a"   to="laboral">Laboral</Link></button>
                        <button ref={el =>btnEmo = el} className="secondary-button emocional"> <Link className="a"   to="emocional">Emocional</Link></button>
                    </div>
                    
                    <h4 className="h4">Conocélos para saber como poder ayudarte</h4>
                    <img className="waves-blue" src={wavepurple} alt="Waves blue"/>
                </section>

                <section className="main-services">
                    <img  className="wave-green-inverted" src={wavepurpleinverted} alt="Inverted green waves"/>
                    <h3 className="h3">Te invitamos a tener un abrebocas de nuestro servicio</h3>
                    <div className="services-container">
                        <p className="p">Te tomará de 5 a 10 minutos</p>
                        <button ref={el =>btnServ = el} className="encuesta">link a encuesta</button>
                    </div>
                    <img  ref={el =>bote = el} className="navigate-boat" src={navigateboat} alt="Boat"/>
                    <img ref={el =>callService = el} className="wave-green" src={wavepurple} alt="Green waves"/>
                </section>

                <section className="main-benefits">
                    <img ref={el =>wave = el} className="wave-pink-inverted" src={wavepurpleinverted} alt="Inverted pink waves"/>
                    <div className="benefits-container" >
                        <h3 className="h3">Regístrate. Se parte de nuestra comunidad</h3>
                        <img ref={el =>sing = el} className="singin" src={singin} alt=""/>
                    </div>                 
                    <div className="button-container">
                        <button ref={el =>btnRegistro = el} class="secondary-button register"><Link className="a" to="/">Regístrate</Link></button>
                    </div>
                    <img ref={el =>registrate = el} className="wave-pink" src={wavepurple} alt="Pink waves"/>
                </section>
            
        </div>
    )
}

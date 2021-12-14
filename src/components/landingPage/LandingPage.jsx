import React from 'react';
import waveblueinverted from "../../assets/borders/waveblueinverted.png";
import waveblue from "../../assets/borders/waveblue.png";
import wavegreeninverted from "../../assets/borders/wavegreeninverted.png";
import wavegreen from "../../assets/borders/wavegren.png";
import wavepinkinverted from "../../assets/borders/wavepinkinverted.png";
import wavepink from "../../assets/borders/wavepink.png";
import searchinglooking from "../../assets/images/Searching - Looking.svg";
import navigateboat from "../../assets/images/Navigate - Rock the boat.png";
import singin from "../../assets/images/Sign In.png";
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    // JS code
    return (
        <div>
            {/* <div className="main"> */}
                <section className="main-aboutus">
                    <img className="waves-blue-inverted" src={waveblueinverted} alt="Inverted blue waves"/>
                    <p className="p">Nacemos con el objetivo de ayudar y apoyar a los trabajadores ofreciendoles herramientaspara su vida financiera, laboral y emocional</p>
                    <div className="aboutus-container">
                        <img src={searchinglooking} alt="Searching Looking"/>
                        <h3 className="h3">Nuestros tres pilares</h3>
                    </div>
                    <div className="container-buttons">
                        <button className="secondary-button financiera"><Link className="a" to="./financiero.html">Financiero</Link></button>
                        <button className="secondary-button laboral"><Link className="a" to="./laboral.html">Laboral</Link></button>
                        <button className="secondary-button emocional"><Link className="a" to="./emocional.html">Emocional</Link></button>
                    </div>
                    <h4 className="h4">Conocélos para saber como poder ayudarte</h4>
                    <img className="waves-blue" src={waveblue} alt="Waves blue"/>
                </section>

                <section className="main-services">
                    <img className="wave-green-inverted" src={wavegreeninverted} alt="Inverted green waves"/>
                    <h3 className="h3">Te invitamos a tener un abrebocas de nuestro servicio</h3>
                    <div className="services-container">
                        <p className="p">Te tomará de 5 a 10 minutos</p>
                        <button className="encuesta">link a encuesta</button>
                    </div>
                    <img className="navigate-boat" src={navigateboat} alt="Boat"/>
                    <img className="wave-green" src={wavegreen} alt="Green waves"/>
                </section>

                <section className="main-benefits">
                    <img className="wave-pink-inverted" src={wavepinkinverted} alt="Inverted pink waves"/>
                    <div className="benefits-container" >
                        <h3 className="h3">Regístrate. Se parte de nuestra comunidad</h3>
                        <img className="singin" src={singin} alt=""/>
                    </div>
                    <div className="button-container">
                        <button class="secondary-button register"><Link className="a" to="/">Regístrate</Link></button>
                    </div>
                    <img className="wave-pink" src={wavepink} alt="Pink waves"/>
                </section>
           {/*  </div> */}
        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png'
import waveorange from '../../assets/borders/waveorange.png';
import orangewindow from '../../assets/images/orangewindow.png'
import graph from '../../assets/images/grafico.png'
import medal from '../../assets/images/medal.png'
import orangeBusinessPlan from '../../assets/images/orangeBusinessPlan.png'
import FloatButtons from '../floatButtons/FloatButtons';
import './LandingPageLogin.css'

export default function LandingPageLogin() {
    return (
        <div className="container-pl">
            <section className="main-welcome">
                <img className="img-waveOrange" src={waveorangeinverted} alt="Inverted orange waves"/>
                <section className="welcome-container">
                    <h4 className="h4">Bienvenido: David</h4>
                    <p className="p">Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida - Confucio </p>
                    <img src={orangewindow} alt="Window"/>
                </section>
                <h4 className="progress">Tu progreso actual</h4>
                <section className="current-progress">
                    <h4 className="medals-name">Medallas</h4>
                    <h4 className="points">2/50</h4>
                    <img className="graph" src={graph} alt="Grafico de los pilares"/>
                    <img className="medals-img" src={medal} alt="Medalla"/>
                </section>
                
                <section className="self-progress">
                    <div className="self-progress-item budget">
                        <Link className="a" to="/"><h4>Manejo de presupuesto</h4></Link>
                    </div>
                    <div className="self-progress-item self-test">
                        <Link className="a" to="/"><h4>Test de auto-evaluación</h4></Link>
                    </div>
                </section>
                <img src={orangeBusinessPlan} alt="Business man"/>
                <section className="helpus">
                    <div className="helpus-item quiz">
                        <h4 className="h4">¿Ya completaste la segunda encuesta?</h4>
                    </div>
                    <div className="helpus-item community">
                        <h4 className="h4">Aporta a la comunidad. Lograrás acceder a más funciones</h4>
                    </div>
                    <div className="helpus-item link-q">
                        <Link className="a" to="/"><h4>Link</h4></Link>
                    </div>
                </section>
                <div className="helpus-item entries">
                    <h4 className="h4">Ultimas entradas del Blog</h4>
                </div>
                <img className="down" src={waveorange} alt="Orange waves"/>
        </section>
        <FloatButtons/>
        </div>
    )
}

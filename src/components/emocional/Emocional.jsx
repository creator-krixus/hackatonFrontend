import React from 'react'
import './Emocional.css'
import curl from '../../assets/borders/curlpinkinverted.png'
import pink from '../../assets/images/pinkBusinessPlan.png'
import girls from '../../assets/images/girls.png'
import pinkCall from '../../assets/images/pinkCallService.png'
import curlPink from '../../assets/borders/curlpink.png'

export default function Emocional() {
    return (
        <div className="main">
            <img src={curl} alt="Blue peaks" className="up" />
            
            <img className="hero" src={pink} alt="Girl in a computer" />

            <h3 className="principal-title" >Herramientas y recursos para:</h3>

            <section className="main-test">
                <h4 className="test--title title">Test de autoevaluación</h4>
                <p className="test--prg paragraph">Reconocer lo que sabemos y no sabemos es el primer caso.</p>
                <img className="test--img image" src={girls} alt="Work from home" />
            </section>
            
            <section className="main-free">
                <h4 className="free--title title">Recursos educativos gratuitos para mejorar o  pedir asistencia</h4>
                <p className="free--prg paragraph">Las emociones como pilar hacer parte de nuestro día a día.</p>
            </section>
            <section className="main-learn">
                <h4 className="learn--title title">Modulo de enseñanza.</h4>
                <img className="learn--img image" src={pinkCall} alt="" />
                <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
            </section>

            <div className="register-container">
                <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
                <button className="secondary-button register"><a href="/">Regístrate</a></button>
            </div>
            
            <img src={curlPink} alt="Blue peaks" className="down"></img> 
        </div>
    )
}

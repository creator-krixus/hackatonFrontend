import React from 'react'
import './Emocional.css'
import curl from '../../assets/borders/curlpinkinverted.png'
import pink from '../../assets/images/pinkBusinessPlan.png'
import girls from '../../assets/images/girls.png'
import pinkCall from '../../assets/images/pinkCallService.png'
import curlPink from '../../assets/borders/curlpink.png'

export default function Emocional() {
    return (
        <div class="main">
            <img src={curl} alt="Blue peaks" class="up" />
            
            <img class="hero" src={pink} alt="Girl in a computer" />

            <h3 class="principal-title" >Herramientas y recursos para:</h3>

            <section class="main-test">
                <h4 class="test--title title">Test de autoevaluación</h4>
                <p class="test--prg paragraph">Reconocer lo que sabemos y no sabemos es el primer caso.</p>
                <img class="test--img image" src={girls} alt="Work from home" />
            </section>
            
            <section class="main-free">
                <h4 class="free--title title">Recursos educativos gratuitos para mejorar o  pedir asistencia</h4>
                <p class="free--prg paragraph">Las emociones como pilar hacer parte de nuestro día a día.</p>
            </section>
            <section class="main-learn">
                <h4 class="learn--title title">Modulo de enseñanza.</h4>
                <img class="learn--img image" src={pinkCall} alt="" />
                <p class="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                <p class="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                <p class="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
            </section>

            <div class="register-container">
                <h3 class="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
                <button class="secondary-button register"><a href="/">Regístrate</a></button>
            </div>
            
            <img src={curlPink} alt="Blue peaks" class="down"></img> 
        </div>
    )
}

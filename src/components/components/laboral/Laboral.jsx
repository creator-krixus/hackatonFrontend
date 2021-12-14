import react from "react"
import 'Laboral.css';
import '../'

import './images/squareblueinverted.png';

import './images/blueBusinessPlan.png';
import './images/bluepersoncalendar.png';
import './images/bluepersonboard.png';
import './images/blueCallService.png';
import ".images/squareblue.png";
import "./assets/icons/meteor-solid.svg";

export default function Laboral(){
    return(
        <section classname="body">
           <div className="header">
                <img src="meteor-solid.svg" alt="Logo" /> 
                <h1>Pilar Laboral</h1>
                <a href="/"><img src="meteor-solid.svg" alt="Logo" class="navbar-logo"/> 
                </a>
                <img src="bars-solid.svg" alt="menu" /> 
            </div>
            <div className="servicios">
                <h3 class="principal-title" >Herramientas y recursos para:</h3>
                <h4 class="rights--title title">Conocer tus derechos</h4>
                <p class="rights--prg paragraph">Te contamos sobre tus días libres, horas extras y ambiente laboral</p>
                <img src="./assets/images/bluepersoncalendar.png" alt="Work from home"/>
            </div>    
            <div>
                <h4 class="free--title title">Recursos educativos gratuitos para mejorar</h4>
                <p class="free--prg paragraph">Seleccionamos mensualmente los mejores contenidos en un solo lugar.</p>
            </div>
            <div>
                <h4 class="conflict--title title">Aprende a manejar los conflictos de manera acertada</h4>
                <p class="conflict--prg paragraph">De la mano de coaches daremos guias y consejos.</p>
                <img class="conflict--img image" src="bluepersonboard.png" alt=""/>
            </div>

            <div>
                <h4 class="learn--title title">Modulo de enseñanza.</h4>
                <img class="learn--img image" src="blueCallService.png" alt=""/>
                <p class="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                <p class="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                <p class="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
            </div>

            <div class="register-container">
                <h3 class="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
                <button class="secondary-button register"><a href="/">Regístrate</a></button>
            </div>
            <img src="./assets/components/squareblue.png" alt="Blue peaks" class="down"/>
    
        </section>
    );
}

    

      
       

        
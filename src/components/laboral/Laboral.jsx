import squareblueinverted from '../../assets/borders/squareblueinverted.png';
import blueBusinessPlan from'../../assets/images/blueBusinessPlan.png';
import bluepersoncalendar from '../../assets/images/bluepersoncalendar.png';
import bluepersonboard from '../../assets/images/bluepersonboard.png';
import blueCallService from '../../assets/images/blueCallService.png';
import squareblue from '../../assets/borders/squareblue.png';

export default function Laboral(){
    return(
     <section className="main">
        <img src={squareblueinverted} alt="Blue peaks" className="up"/>
        <img className="hero" src={blueBusinessPlan} alt="Girl in a computer"/>
        <h3 className="principal-title" >Herramientas y recursos para:</h3>
        <section className="main-rights">
            <h4 className="rights--title title">Conocer tus derechos</h4>
            <p className="rights--prg paragraph">Te contamos sobre tus días libres, horas extras y ambiente laboral</p>
            <img className="rights--img image" src={bluepersoncalendar} alt="Work from home"/>
        </section>
        <section className="main-free">
            <h4 className="free--title title">Recursos educativos gratuitos para mejorar</h4>
            <p className="free--prg paragraph">Seleccionamos mensualmente los mejores contenidos en un solo lugar.</p>
        </section>
        <section className="main-conflict">
            <h4 className="conflict--title title">Aprende a manejar los conflictos de manera acertada</h4>
            <p className="conflict--prg paragraph">De la mano de coaches daremos guias y consejos.</p>
            <img className="conflict--img image" src={bluepersonboard} alt=""/>
        </section>
        <section className="main-learn">
            <h4 className="learn--title title">Modulo de enseñanza.</h4>
            <img className="learn--img image" src={blueCallService} alt=""/>
            <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
            <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
            <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
        </section>

        <div className="register-container">
            <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
            <button type="button" className="secondary-button register"></button>
        </div>
        
        <img src={squareblue} alt="Blue peaks" className="down"/>
     
    </section>
       );
    }


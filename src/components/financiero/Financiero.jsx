import React from 'react'
import './Financiero.css';
import menu from '../../assets/icons/bars-solid.svg'
import icon from '../../assets/icons/meteor-solid.svg'
import peaksgreeninverted from '../../assets/components/peaksgreeninverted.png'
import BusinessPlan from '../../assets/images/Business Plan.svg'
import Work from '../../assets/images//Work From Home.png'
import Finances from '../../assets/images/Finances.png'
import GreenPeaks from '../../assets/components/peaksgreen.png'
import CallService from '../../assets/images/Call Service.png'


export default function Financiero() {
    return (
       <div>
           <main className='main'>
                    <img src={peaksgreeninverted}  alt= "Green peaks" className="up" />
                    <img className='hero' src={BusinessPlan} alt="Girl in a computer" />
                    <h3 className="principal-title" >Herramientas y recursos para:</h3>
                <section className="main-tools">
                    <h4 className="tools--title title">Manejar tu presupuesto</h4>
                    <p className="tools--prg paragraph">Saber en que lo gastamos es el primer paso</p>
                    <img className="tools--img image" src={Work}  alt="Work from home" />
                </section>
                <section className="main-calculators">
                    <h4 className="calculators--title title">Acceder a calculadoras para tu día a día</h4>
                    <p className="calculators--prg paragraph">Enlazamos recursos oficiales del Ministerio de Trabajo para que lo tengas a la mano.</p>
                    <img className="calculators--img image" src={Finances} alt="Finances" />
                    <p className="calculators--prg paragraph">De la mano de los datos anomizados de nuestros usuarios ofrecemos rangos salariales.</p>
                </section>
                <section className="main-spends">
                    <h4 className="spends--title title">Te contamos cuanto cobrar por un trabajo</h4>
                    <p className="spends--prg paragraph">Es sano hablar del dinero, nosotros te apoyamos.</p>
                    <p className="spends--prg paragraph">Una comunidad que se ayuda, se informa.</p>
                </section>
                <section className="main-learn">
                    <h4 className="learn--title title">Modulo de enseñanza.</h4>
                    <img className="learn--img image" src={CallService} alt="Call service" />
                    <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                    <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                    <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
                </section>

                    <h3 className="last-title">Entre muchas otras herramientas. ¡Regístrate!</h3>
        
                    <img src= {GreenPeaks} alt="Green peaks" className="down" />
            </main>
      </div>
   )
}

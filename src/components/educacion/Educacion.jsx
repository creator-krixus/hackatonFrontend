import React from 'react'
import './Educacion.css';
import GreenPeaks from '../../assets/components/peaksgreen.png'
import CallService from '../../assets/images/Call Service.png'


export default function Educacion() {
    return (
       <div>
           <main className='main'>
              <section className="main-learn">
                    <h4 className="learn--title title">Modulo de enseñanza.</h4>
                    <img className="learn--img image" src={CallService} alt="Call service" />
                    <p className="learn--prg paragraph">Aprende con nosotros, gana puntos y diviértete.</p>
                    <p className="learn--prg paragraph">Recorremos los principios básicos, que la deuda no lo ahogue.</p>
                    <p className="learn--prg paragraph">Cambia tus puntos por expreriencias en la plataforma</p>
                </section>
            </main>
      </div>
   )
}

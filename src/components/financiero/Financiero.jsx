import React, {useRef, useEffect } from 'react'
import { TweenMax,Power3 } from 'gsap';
import './Financiero.css';
import peaksgreeninverted from '../../assets/components/peaksgreeninverted.png'
import peaksgreen from '../../assets/borders/peaksgreen.png'
import BusinessPlan from '../../assets/images/Business Plan.svg'
import Work from '../../assets/images//Work From Home.png'
import Finances from '../../assets/images/Finances.png'
import Educacion from '../educacion/Educacion';
import Registrate from '../registrate/Registrate';

export default function Financiero() {
    let main = useRef(null);
    let girl = useRef(null);
    let finances = useRef(null);
    let work = useRef(null);
    

    // const reducir = () =>{
    //     TweenMax.to(work,.8,{duration: 2,
    //         x: 300,
    //         backgroundColor: 'green',
    //         borderRadius: '20%',
    //         border: '5px solid blue',
    //         ease: 'linear',width:100, height:100, rotate: 360, ease:Power3.easeOut})
    //     setState(true);
    // }    
    // const ampliar = () =>{
    //     TweenMax.to(work,.8,{duration: 2, x: -5,rotate: 360, backgroundColor: 'blue', borderRadius: '0%',width:200, height:200, ease:Power3.easeOut})
    //     setState(false);
   

    useEffect(() =>{
        TweenMax.to(main, 0, {css:{visibility:'visible'}}) 
       TweenMax.staggerFrom([girl, finances, work], 0.8, {opacity:0, y:-540, ease:Power3.easeOut, delay:1})}, [])

    return (
       <div >
           <div ref={el => main = el} className='container-fin'>
                <img src={peaksgreeninverted}  alt= "Green peaks" className="up" />
                <img ref={el => girl = el} className='hero' src={BusinessPlan} alt="Girl in a computer" />
                <h3 className="principal-title" >Herramientas y recursos para:</h3>
                <section className="main-tools">
                    <h4 className="tools--title title">Manejar tu presupuesto</h4>
                    <p className="tools--prg paragraph">Saber en que lo gastamos es el primer paso</p>
                    <img ref={el =>work = el} className="tools--img image" src={Work}  alt="Work from home" />
                </section>
                <section className="main-calculators">
                    <h4 className="calculators--title title">Acceder a calculadoras para tu día a día</h4>
                    <p className="calculators--prg paragraph">Enlazamos recursos oficiales del Ministerio de Trabajo para que lo tengas a la mano.</p>
                    <img ref={el => finances = el} className="calculators--img image" src={Finances} alt="Finances" />
                    <p className="calculators--prg paragraph">De la mano de los datos anomizados de nuestros usuarios ofrecemos rangos salariales.</p>
                </section>
                <section className="main-spends">
                    <h4 className="spends--title title">Te contamos cuanto cobrar por un trabajo</h4>
                    <p className="spends--prg paragraph">Es sano hablar del dinero, nosotros te apoyamos.</p>
                    <p className="spends--prg paragraph">Una comunidad que se ayuda, se informa.</p>
                </section>    
                <Educacion/>
                <Registrate/>
                <img src={peaksgreen} alt="Blue peaks" className="down"/>

            </div>
      </div>
   )
}

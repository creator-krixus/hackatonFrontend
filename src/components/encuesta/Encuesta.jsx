import React from 'react';
import wavepurpleinverted from '../../assets/borders/wavepurpleinverted.png';
import wavepurple from '../../assets/borders/wavepurple.png';
import './Encuesta.css'

export default function Encuesta() {
    return (
        <div>
            <div className="container">
                <img className="up" src={wavepurpleinverted} alt="Inverted purple waves"/>
                <h1 className="container-title">Titulo de la encuesta</h1>
                <h2 className="financiero-title subtitle ">Preguntas Financieras</h2>
                <section className="container-financiera">
                    <div className="question-container">
                        <p className="question">¿Tiene usted ahorros?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                     </div>
                    
                    <div className="question-container">
                        <p className="question">¿TIene usted ingresos?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                      </div>
                    
                    <div className="question-container">
                        <p className="question">¿Puede afrontar pagos inesperados?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                  
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Está atrasado en deudas?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="0" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                  
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Le sobra dinero al terminar el mes?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                 
                    </div>   

  
                </section>
                <h2 className="financiero-title subtitle ">Preguntas Laboral</h2>
                <section className="container-laboral">
                    <div className="question-container">
                        <p className="question">¿Esta satisfecho con su trabajo?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
               
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Tiene oportunidades de crecimiento ?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                  
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Le respetan el tiempo libre?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="0"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                      
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Tiene posibilidades de ascender?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="1" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                    
                    </div>
                    
                    <div className="question-container">
                        <p className="question">¿Lu gusta su trabajo actual?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Si</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">No</label>
                        </div>
                        
                
                    </div>   
           
                </section>
                <h2 className="financiero-title subtitle ">Preguntas Emocional</h2>
                <section className="container-emocional">
                    <div className="question-container">
                        <p className="question">¿Considera que conoce sus emociones?</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Respuesta</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">Respuesta 2</label>
                        </div>
                        
                
                    </div>
                    
                    <div className="question-container">
                        <p className="question">Pregunta 2</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Respuesta</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">Respuesta 2</label>
                        </div>
              
                    </div>
                    
                    <div className="question-container">
                        <p className="question">Pregunta 3</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Respuesta</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">Respuesta 2</label>
                        </div>
                        
                   
                    </div>
                    
                    <div className="question-container">
                        <p className="question">Pregunta 4</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Respuesta</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">Respuesta 2</label>
                        </div>
                        
                 
                    </div>
                    
                    <div className="question-container">
                        <p className="question">Pregunta 5</p>
                        <div className="question-container-options">
                            <input className="input" id="r1" type="radio" value="a" checked/>
                            <label className="label" hrmlFor="r1">Respuesta</label>
                        </div>
                        
                        <div className="question-container-options">
                            <input className="input" id="r2" type="radio" value="b"/>
                            <label className="label" hrmlFor="r2">Respuesta 2</label>
                        </div>
                        
               
                    </div>   
            
                </section>

                <input className="secondary-button encuesta" type="submit" value="Calcular resultados"/>
            
            
                <img className="down" src={wavepurple} alt="Purple waves"/>
            </div>
        </div>
    )
}

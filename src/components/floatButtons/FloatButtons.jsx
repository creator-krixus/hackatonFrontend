import React from 'react'
import { Link } from 'react-router-dom'
import './FloatButtons.css'

export default function FloatButtons() {
    return (
        <div>
            <section className="down-buttons">
                <section className="down-buttons-container">
                    <div className="down-buttons-pilar-container pilar-financiero">
                        <Link className="down-buttons-pilar-container__text a" to="/"> Financiero</Link>
                    </div>
                    
                    <div className="down-buttons-pilar-container pilar-laboral">
                        <Link className="down-buttons-pilar-container__text a" to="/"> Laboral</Link>
                    </div>
                    
                    <div className="down-buttons-pilar-container pilar-emocional">
                        <Link className="down-buttons-pilar-container__text a" to="/"> Emocional</Link>
                    </div>
                </section>
            </section>
        </div>
    )
}

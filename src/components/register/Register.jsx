import React from 'react'
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png'
import waveorange from '../../assets/borders/waveorange.png'
import './Register.css'

export default function Register() {
    return (
        <div>
            <main className="main">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>
                <form className="main-form" action="">
                    <div className="main-form-fields">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" placeholder="Nombre completo"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input type="email" name="mail" placeholder="Correo electrónico"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input type="password" name="passw" placeholder="Contraseña"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="cpassw"></label>
                        <input type="password" name="cpassw" placeholder="Confirmar contraseña"/>
                    </div>
                    <input className="secondary-button register" type="submit" value="Enviar"/>
                </form>
                <a href="./login.html">¿Ya tienes cuenta? Inicia sesión</a>
                <img className="down" src={waveorange} alt="Orange waves"/>

                
            </main>
        </div>
    )
}

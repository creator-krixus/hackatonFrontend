import React from 'react'
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png'
import waveorange from '../../assets/borders/waveorange.png'
import './Login.css'

export default function Login() {
    return (
        <div>
            <main className="main">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>
                
                <form className="main-form" action="">
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input type="email" name="mail" placeholder="Correo electrónico"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input type="password" name="passw" placeholder="Contraseña"/>
                    </div>
                    <input className="secondary-button register" type="submit" value="Enviar"/>
                </form>
                <a href="register.html">¿No tienes cuenta? Crea una cuenta</a>
                <img className="down" src={waveorange} alt="Orange waves"/>

                
            </main>
        </div>
    )
}

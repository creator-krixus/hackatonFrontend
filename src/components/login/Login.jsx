import React from 'react';
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png';
import waveorange from '../../assets/borders/waveorange.png';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    return (
        <div>
            <main className="main">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>
                
                <form className="main-form" action="">
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input className="input" type="email" name="mail" placeholder="Correo electrónico"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input className="input" type="password" name="passw" placeholder="Contraseña"/>
                    </div>
                    <input className="input" className="secondary-button register" type="submit" value="Enviar"/>
                </form>
                <Link className="a" to="register.html">¿No tienes cuenta? Crea una cuenta</Link>
                <img className="down" src={waveorange} alt="Orange waves"/>

                
            </main>
        </div>
    )
}

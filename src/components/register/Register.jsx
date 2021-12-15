import React from 'react';
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png';
import waveorange from '../../assets/borders/waveorange.png';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    return (
        <div>
            <div className="container-register">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>

                <form className="main-form" action="">
                    <div className="main-form-fields">
                        <label htmlFor="name"></label>
                        <input className="input-reg" type="text" name="name" placeholder="Nombre completo"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input className="input" type="email" name="mail" placeholder="Correo electrónico"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input className="input" type="password" name="passw" placeholder="Contraseña"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="cpassw"></label>
                        <input className="input" type="password" name="cpassw" placeholder="Confirmar contraseña"/>
                    </div>
                    <input className="secondary-button register-reg" type="submit" value="Enviar"/>
                </form>
                

                <Link className="a-register" to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
                <img className="down" src={waveorange} alt="Orange waves"/> 

                
            </div>
        </div>
    )
}

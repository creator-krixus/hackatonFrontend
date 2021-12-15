import React, {useState} from 'react';
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png';
import waveorange from '../../assets/borders/waveorange.png';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Login.css'

export default function Login() {

    const [state, setstate] = useState({
        email: "",
        password: ""
      });
    
      const data = (e) => {
        setstate({
          ...state,
          [e.target.name]: e.target.value,
          [e.target.name]: e.target.value
        })
      }
    
      const iniciarSesion = (e) => {
        e.preventDefault();
        axios.post('https://backend-hackaton2021.herokuapp.com/api/v1/users/login', state)
          .then(res => {
            console.log(res.data.token)
            window.location.href='/'})
          .catch(error => console.log(error))
      }
    return (
        <div>
            <div className="container-log">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>
                
                <form className="main-form">
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input className="input" type="email" name="email" placeholder="Correo electrónico" onChange={data}/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input className="input" type="password" name="password" placeholder="Contraseña" onChange={data}/>
                    </div>
                    <input className="secondary-button register input" type="submit" value="Enviar" onClick={iniciarSesion}/>
                </form>
                <Link className="a" to="register">¿No tienes cuenta? Crea una cuenta</Link>
                <img className="down" src={waveorange} alt="Orange waves"/>

                
            </div>
        </div>
    )
}

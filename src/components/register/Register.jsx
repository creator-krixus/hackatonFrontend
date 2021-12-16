import React, { useState }  from 'react';
import waveorangeinverted from '../../assets/borders/waveorangeinverted.png';
import waveorange from '../../assets/borders/waveorange.png';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import axios from 'axios'
import './Register.css'

export default function Register() {
    const [state, setstate] = useState({
        nombre:"",
        email: "",
        password: "",
        confirmPassword:""
    })

    const clear = () => { 
        document.getElementById("form").reset();
        window.location.reload();
      }

    const data = (e) => {
        setstate({
          ...state,
          [e.target.name]: e.target.value,
          [e.target.name]: e.target.value,
          [e.target.name]: e.target.value,
          [e.target.name]: e.target.value
        })
        console.log(state)
      }

      const enviarDatos = (e) => {
        e.preventDefault();
        if(state.nombre === "" || state.email === "" || state.password === "" || state.password !== state.confirmPassword){
            swal({
              title: 'Error',
              text: 'Uno o varios campos mal diligenciados',
              icon: 'error',
              button: 'Aceptar'
          })
        setTimeout(clear, 2500)
        }else{
          axios.post('https://backend-hackaton2021.herokuapp.com/api/v1/users/register', state)
            .then(res => {
              if(res.data.code === 11000){
                swal({
                  title: 'Error',
                  text: 'Email ya registrado',
                  icon: 'error',
                  button: 'Aceptar'
              })
              setTimeout(clear, 2500)
              }else{
                swal({
                  title: 'Registro exitoso',
                  text: 'Ahora puedes ingresar',
                  icon: 'success',
                  button: 'Aceptar'
              })
              setTimeout(clear, 2500)
              }
            })
            .catch(error => console.log(error))
            setTimeout(clear, 2500)
        }
      }

    return (
        <div>
            <div className="container-register">
                <img className="up" src={waveorangeinverted} alt="Inverted orange waves"/>

                <form className="main-form" id='form'>
                    <div className="main-form-fields">
                        <label htmlFor="name"></label>
                        <input className="input" type="text" name="nombre" onChange={data} placeholder="Nombre"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="mail"></label>
                        <input className="input" type="email" name="email" onChange={data} placeholder="Correo electrónico"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="passw"></label>
                        <input className="input" type="password" name="password" onChange={data} placeholder="Contraseña"/>
                    </div>
                    
                    <div className="main-form-fields">
                        <label htmlFor="cpassw"></label>
                        <input className="input" type="password" name="confirmPassword" onChange={data} placeholder="Confirmar contraseña"/>
                    </div>
                    <input className="secondary-button register-reg" type="submit" value="Enviar" onClick={enviarDatos}/>
                </form>
                

                <Link className="a-register" to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
                <img className="down" src={waveorange} alt="Orange waves"/> 

                
            </div>
        </div>
    )
}

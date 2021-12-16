import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import './footer.css'


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

  const location = useLocation();
  const ruta = location.pathname
  const idRuta = ruta.substring(1,20)
  let color = {}

  if(idRuta === 'emocional'){
      color = {background: '#FF7878'}
  }
  if(idRuta === 'financiero'){
      color = {background: '#507445'}
  }
  if(idRuta === 'laboral'){
    color = {background: '#517EA6'}
  }
  if(idRuta === 'register' || idRuta === 'login'){
    color = {background: '#F2994B'}
  }
  if(idRuta === 'dlogin'){
    color = {background: '#F2994B'}
}

    return (
  <div>
      <div className="footer-distributed" style={color}>
            <div className="footer-left">
                <h3 className="h3-footer">Company<span className="span">name</span></h3>
                <p className="footer-links">
                    <Link to="/" className="a link-1">Home</Link>
                    <Link className="a" to="financiero">Pilar Financiero</Link>
                    <Link className="a" to="laboral">Pilar Laboral</Link>          
                    <Link className="a" to="emocional">Pilar Emocional</Link>
                    <Link className="a" to="/">Faq</Link>
                    <Link className="a" to="/">Contacto</Link>
                    <Link className="a" to="/">Sobre nosotros</Link>
                </p>

                <p className="footer-company-name">Company Name © {year}</p>
            </div>

            <div className="footer-center">
                <div>
                <FontAwesomeIcon icon={faMapMarked}/>
                    <p className="p"><span className="span"></span> Colombia</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faPhone}/>
                    <p className="p">+1.555.555.5555</p>
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope}/>
                    <p className="p"><Link className="a" to="mailto:support@company.com">support@company.com</Link></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span className="span">About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <Link className="a" to="#"> <FontAwesomeIcon icon={faFacebook}/> </Link>
                    <Link className="a" to="#"><FontAwesomeIcon icon={faTwitter}/></Link>
                    <Link className="a" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                    <Link className="a" to="#"><FontAwesomeIcon icon={faInstagram}/></Link>
                </div>
            </div>
        </div>
        <Link to='https://www.freepik.com/vectors/people' className='a'>People vector created by stories - www.freepik.com</Link>
    </div>
 )   
}

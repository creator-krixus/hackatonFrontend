import React from 'react'
import "./footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone,  faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
  <div>
      <footer className="footer-distributed">
            <div className="footer-left">
                <h3 className="h3">Company<span>name</span></h3>
                <p className="footer-links">
                    <Link to="#" className="link-1">Home</Link>
                    <Link to="#">Pilar Laboral</Link>
                    <Link to="#">Pilar Financiero</Link>          
                    <Link to="#">Pilar Emocional</Link>
                    <Link to="#">Faq</Link>
                    <Link to="#">Contacto</Link>
                    <Link to="#">Sobre nosotros</Link>
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
                    <p className="p"><Link to="mailto:support@company.com">support@company.com</Link></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <Link to="#"> <FontAwesomeIcon icon={faFacebook}/> </Link>
                    <Link to="#"><FontAwesomeIcon icon={faTwitter}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                    <Link to="#"><FontAwesomeIcon icon={faInstagram}/></Link>
                </div>
            </div>
        </footer>
    </div>
 )   
}

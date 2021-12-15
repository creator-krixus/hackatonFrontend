import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import "./footer.css"
>>>>>>> a6afa5ec18213e58e9a6e81ac5998c3f973c72bd


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
  <div>
<<<<<<< HEAD
      <footer class="footer-distributed">

<div class="footer-left">

    <h3>Company<span>name</span></h3>

    <p class="footer-links">
        <Link to="#" class="link-1">Home</Link>
        
        <Link to="#">Pilar Laboral</Link>
    
        <Link to="#">Pilar Financiero</Link>
    
        <Link to="#">Pilar Emocional</Link>
        
        <Link to="#">Faq</Link>
        
        <Link to="#">Contacto</Link>
        <Link to="#">Sobre nosotros</Link>
    </p>

    <p class="footer-company-name">Company Name © {year}</p>
</div>

<div class="footer-center">

    <div>
    <FontAwesomeIcon icon={faMapMarked}/>
        <p><span></span> Colombia</p>
    </div>

    <div>
    <FontAwesomeIcon icon={faPhone}/>
        <p>+1.555.555.5555</p>
    </div>

    <div>
    <FontAwesomeIcon icon={faEnvelope}/>
        <p><Link to="mailto:support@company.com">support@company.com</Link></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

        <Link to="#"> <FontAwesomeIcon icon={faFacebook}/> </Link>
        <Link to="#"><FontAwesomeIcon icon={faTwitter}/></Link>
        <Link to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
        <Link to="#"><FontAwesomeIcon icon={faInstagram}/></Link>
        

    </div>

</div>

</footer>
=======
      <div className="footer-distributed">
            <div className="footer-left">
                <h3 className="h3-footer">Company<span className="span">name</span></h3>
                <p className="footer-links">
                    <Link to="#" className="a link-1">Home</Link>
                    <Link className="a" to="#">Pilar Laboral</Link>
                    <Link className="a" to="#">Pilar Financiero</Link>          
                    <Link className="a" to="#">Pilar Emocional</Link>
                    <Link className="a" to="#">Faq</Link>
                    <Link className="a" to="#">Contacto</Link>
                    <Link className="a" to="#">Sobre nosotros</Link>
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
>>>>>>> a6afa5ec18213e58e9a6e81ac5998c3f973c72bd
    </div>
 )   
}

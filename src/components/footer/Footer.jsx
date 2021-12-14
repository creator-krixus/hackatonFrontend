import React from 'react'
import "./footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone,  faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
  <div>
      <footer class="footer-distributed">

<div class="footer-left">

    <h3>Company<span>name</span></h3>

    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
        
        <a href="#">Pilar Laboral</a>
    
        <a href="#">Pilar Financiero</a>
    
        <a href="#">Pilar Emocional</a>
        
        <a href="#">Faq</a>
        
        <a href="#">Contacto</a>
        <a href="#">Sobre nosotros</a>
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
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

        <a href="#"> <FontAwesomeIcon icon={faFacebook}/> </a>
        <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
        

    </div>

</div>

</footer>
    </div>
 )   
}

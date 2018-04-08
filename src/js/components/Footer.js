import React, { Component } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faMobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faClock from '@fortawesome/fontawesome-free-regular/faClock'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'

fontawesome.library.add(faEnvelope, faPhone, faMobileAlt, faWhatsapp, faMapMarkerAlt, faClock, faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn)

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3 className="title">Registrados en</h3>
              <ul>
                <li>Superintendencia de Banca, Seguros y AFP</li>
                <li>SUNAT REXTIE S.A.C RUC: 20601030013</li>
              </ul>
            </div>
            <div className="col-4">
              <h3 className="title">Enlaces</h3>
              <ul>
                <li>Ayuda</li>
                <li>Términos y Condiciones de Uso</li>
                <li>Política de Privacidad</li>
                <li>Libro de Reclamaciones</li>
              </ul>
            </div>
            <div className="col-4">
              <h3 className="title">Contáctenos</h3>
              <ul>
                <li><i className="fas fa-envelope mr-2"></i><span>info@rextie.com</span></li>
                <li><i className="fas fa-phone mr-2"></i><span>(+51) (01) 642 9617 | (01) 342 2571</span></li>
                <li><i className="fas fa-mobile-alt mr-2"></i><i className="fab fa-whatsapp mr-2"></i><span>(+51) 963 896 793</span></li>
                <li><i className="fas fa-map-marker-alt mr-2"></i><span>Ricardo Angulo 745, Oficina 402
                Urb. Corpac, San Isidro, Lima, Peru</span></li>
                <li><i className="far fa-clock mr-2"></i><span>Lunes a Sábado de 9 AM a 6 PM</span></li>
              </ul>
              <ul className="social">
                <li className=""><a ><i className="fab fa-facebook-f "></i></a></li>
                <li className=""><a ><i className="fab fa-twitter"></i></a></li>
                <li className=""><a ><i className="fab fa-google-plus-g"></i></a></li>
                <li className=""><a ><i className="fab fa-linkedin-in "></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="post-fooo">
          <p> 2016-2017 REXTIE SAC Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }
}

export default Footer

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <h4>Bóra Pescar, sediado em Curitiba/PR.</h4>
                    <p>Política de Cookies - Termos e Condições</p>
                    <hr />
                    <h4>Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h4>Contato</h4>
                    <p>(041) 99676-5837</p>
                    <p>(041) 99252-7272</p>
                    <hr />
                    <p>contato.borapescar@gmail.com</p>
                    <p>anuncie.borapescar@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Bóra Pescar - © 2024 - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <p>Bóra Pescar, sediado em Curitiba/PR.</p>
                    <p>
                        <a href="#">Política de Cookies</a> - <a href="#">Termos e Condições</a>
                    </p>
                    <hr />
                    <p>Redes Sociais</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h4>Contato</h4>
                    <p>(041) 99676-5837</p>
                    <p>(041) 99252-7272</p>
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
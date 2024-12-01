import ContactForm from "../../components/ContactForm/contactForm";
import marPescadoresBackground from '/images/mar_pescadores_background_subtract.png'
import logo from '/images/logo_borapescar_url.png'
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <img className="img-background" src={marPescadoresBackground} alt="Imagem de dois pescadores com varinhas estendidas na areia que estão olhando para o mar" />
            <img className="logo-bora-pescar" src={logo} alt="Logo do Bora Pescar" />
            <div className="contact-container">
                <div className="contact-text">
                    <p>Possui uma dúvida, sugestão ou reclamação a fazer? Quer publicar em nosso blog um vídeo de sua pescaria, divulgar uma novidade, um campeonato de pesca ou uma informação relevante para o mundo da pesca?</p>
                    <p>Então contate-nos enviando um e-mail para: contato.borapescar@gmail.com.</p>
                    <p>Se preferir, você também pode ligar para o Bóra Pescar pelos telefones (041) 99676-5837 e (041) 99252-7272.</p>
                    <p>Não hesite em nos dizer como podemos ajudá-lo! Ademais, você ainda tem a opção de preencher o formulário abaixo que nós o responderemos com a maior brevidade possível.</p>
                    <p>Bóra Pescar: o maior e melhor site de anúncios de pesca do Brasil.</p>   
                </div>
                <h2>Contato</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
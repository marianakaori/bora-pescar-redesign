import ContactForm from "../../components/ContactForm/contactForm";
import marPescadoresBackground from '../../assets/mar_pescadores_background_subtract.png'
import './contact.css';

const Contact = () => {
    return (
        <div>
            <img className="img-background" src={marPescadoresBackground} alt="Imagem de dois pescadores com varinhas estendidas na areia que estão olhando para o mar" />
            <div className="contact-container">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
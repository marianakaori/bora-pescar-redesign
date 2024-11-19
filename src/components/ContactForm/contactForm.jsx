import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    advertiser: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex.: João da Silva"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ex.: nome@email.com.br"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Ex.: (14) 12345-6789"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ex.: Pederneiras"
          value={formData.city}
          onChange={handleChange}
        />

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="advertiser"
            name="advertiser"
            checked={formData.advertiser}
            onChange={handleChange}
          />
          <label htmlFor="advertiser">Contato é sobre um de nossos anunciantes?</label>
        </div>

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Ex.: Gostaria de obter mais informações."
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;

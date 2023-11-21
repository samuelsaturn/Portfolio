import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Crie o link 'mailto' com os parâmetros necessários
    const mailtoLink = `mailto:samuelmathias033@gmail.com?subject=${encodeURIComponent(
      formData.assunto
    )}&body=${encodeURIComponent(
      `${formData.mensagem}`
    )}`;

    // Abra o link 'mailto' em uma nova janela ou guia
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 className="h2 text-center mb-12">
            Entre em <span className="text-accent">Contato</span>
          </motion.h2>
          <motion.form
            className="flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleFormSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Nome"
                className="input"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleInputChange}
              placeholder="Assunto"
              className="input"
            />
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Mensagem"
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react'


const ContactForm = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre.length < 5 || !validateEmail(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      setExito('');
    } else {
      setError('');
      setExito(`Gracias ${formData.nombre}, te contactaremos cuando antes vía mail.`);
      console.log('Datos enviados:', formData);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className='container form'>
      <form onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>
        <div>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button className="favsBtn" type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {exito && <p style={{ color: 'green' }}>{exito}</p>}
    </div>
  )
}

export default ContactForm
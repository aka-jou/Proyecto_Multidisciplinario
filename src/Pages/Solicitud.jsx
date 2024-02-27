import React, { useState } from 'react';
import '../Pages/Styles.css'

function Solicitud() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [skills, setSkills] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cv, setCv] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1 className='soliem'>Solicitud de empleo</h1>
      <form onSubmit={handleSubmit} className='card-form'>
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="phone">Número de teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <label htmlFor="institution">Institución académica</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={institution}
          onChange={(event) => setInstitution(event.target.value)}
        />
        <label htmlFor="skills">Habilidades técnicas</label>
        <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
        />
        <label htmlFor="coverLetter">Carta de presentación</label>
        <input
          type="file"
          id="coverLetter"
          name="coverLetter"
          onChange={(event) => setCoverLetter(event.target.files[0])}
        />
        <label htmlFor="cv">Curriculum vitae (CV)</label>
        <input
          type="file"
          id="cv"
          name="cv"
          onChange={(event) => setCv(event.target.files[0])}
        />
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  );
};

export default Solicitud;

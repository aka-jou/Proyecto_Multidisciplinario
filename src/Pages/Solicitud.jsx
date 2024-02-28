import React, { useState } from "react";
import NavbarX from "../Atoms/Navbar";
import reclu from "../assets/reclu.jpg";
import image7 from "../assets/image7.jpg";
import "../Pages/Styles.css";

function Solicitud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [skills, setSkills] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cv, setCv] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <NavbarX />
      <img src={reclu} className="reclu-img"/>
      <div className="info-1">
        <h2 className="h2">
          ¡Únete a nuestro equipo y construyamos juntos el futuro!
        </h2>
        <p className="h3">
          ¿Eres un apasionado de tu trabajo y buscas un lugar donde crecer
          profesionalmente?
        </p>
        <p className="p">
          En Eolic Power, creemos que el talento es la clave del éxito. <br />
          Por eso, buscamos personas como tú, con talento, compromiso <br />y
          ganas de formar parte de una empresa en constante crecimiento.
        </p>
        <img src={image7} className="img7"/>
      </div>

      <form onSubmit={handleSubmit} className="card-form">
        <label htmlFor="name" className="la-nom">
          Nombre completo
        </label>
        <input
          className="input-nom"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email" className="la-ema">
          Correo electrónico
        </label>
        <input
          className="in-email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="phone" className="la-number">
          Número de teléfono
        </label>
        <input
          className="in-number"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <label htmlFor="institution" className="la-academy">
          Institución académica
        </label>
        <input
          className="in-academy"
          type="text"
          id="institution"
          name="institution"
          value={institution}
          onChange={(event) => setInstitution(event.target.value)}
        />
        <label htmlFor="skills" className="la-skills">Habilidades técnicas</label>
        <textarea
        className="tex-skills"
          id="skills"
          name="skills"
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
        />
        <label htmlFor="coverLetter" className="la-cart">Carta de presentación</label>
        <input
        className="in-cart"
          type="file"
          id="coverLetter"
          name="coverLetter"
          onChange={(event) => setCoverLetter(event.target.files[0])}
        />
        <label htmlFor="cv" className="la-cv">Curriculum vitae (CV)</label>
        <input
        className="in-cv"
          type="file"
          id="cv"
          name="cv"
          onChange={(event) => setCv(event.target.files[0])}
        />
        <button type="submit" className="send">
          Enviar solicitud
        </button>
      </form>
    </div>
  );
}

export default Solicitud;

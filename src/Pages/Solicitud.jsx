import React, { useState } from "react";
import InfoContainer from "../Organismes/infoContainer";
import NavbarX from "../Atoms/Navbar";
import reclu from "../assets/reclu.jpg";
import Cuestionario from "../Organismes/cuestionario";
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
      
      <InfoContainer/>
      
      <Cuestionario/>
      
    </div>
  );
}

export default Solicitud;

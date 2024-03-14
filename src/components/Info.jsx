import React from "react";
import img2 from "../assets/image2.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";

function Info() {
  return (
    <div className="info">
      <h1 className="tittle">QUIENES SOMOS</h1>
      <p className="text">
        Empresa dedicada al sector eólico y civil que tienen como objetivo
        <br />
        desarrollar un equipo de profesionales altamente cualificados y
        experimentados <br />
        ofreciendo servicios de alta calidad y eficiencia, incorporar últimas
        tecnologías y técnicas de mantenimiento.
      </p>
      <div className="container-img">
        <img src={img2} className="img1"/>
        <img src={img4} className="img2"/>
        <img src={img5} className="img3"/>
      </div>
    </div>
  );
}

export default Info;

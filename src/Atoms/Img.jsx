import React from "react";
import fondo from "../assets/background.jpg";
import '../Atoms/Styles.atoms.css'

function ImgX() {
  return (
    <div>
      <img src={fondo} className="fondo" />
    </div>
  );
}

export default ImgX;

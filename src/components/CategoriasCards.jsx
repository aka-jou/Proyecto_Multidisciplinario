import React from "react";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import '../components/CategoriasCards'
function CategoriasCards() {
    return(
        <div className="CategoriasCards">
            <div className="iconos">
                <img src={img1} alt="" />
                <p>Solicitudes</p>
            </div>
            <div className="iconos">
                <img src={img2} alt="" />
                <p>Empleados</p>
            </div>
            <div className="iconos">
                <img src={img3} alt="" />
                <p>Asociados</p>
            </div>
        </div>
    );
}
export  default CategoriasCards;
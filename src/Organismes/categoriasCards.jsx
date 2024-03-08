import React from "react";
import iconos from "../Atomos/iconos";
import'./CategoriasCards.css'
function CategoriasCards() {
    return(
        <div className="CategoriasCards">
            <div className="iconos">
                <img src={iconos.img1} alt="" />
                <p>Solicitudes</p>
            </div>
            <div className="iconos">
                <img src={iconos.img2} alt="" />
                <p>Empleados</p>
            </div>
            <div className="iconos">
                <img src={iconos.img3} alt="" />
                <p>Asociados</p>
            </div>
        </div>
    );
}
export  default CategoriasCards;
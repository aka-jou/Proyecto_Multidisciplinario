import React from "react";
import CuestionarioIniciSecion from "../Moleculas/cuestionarioInicioSecion";
import logo from "../assets/logo.png"
import './IniciSesion.css'
function IniciSesion(){
    return(
        <div className="boxIniciSecion">
            <div className="imgIniciSecion">
                <img src={logo} alt="logo" />
            </div>
            <div className="boxCuestionarioIniciSecion">
             <CuestionarioIniciSecion/>
            </div>
        </div>
        
    );
}
export default IniciSesion;
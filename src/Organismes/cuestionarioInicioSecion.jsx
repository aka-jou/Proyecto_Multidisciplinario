import React from "react";
import InputIniciSecion from "../Atomos/inputInicioSecion";
import "./CuestionarioIniciSecion.css"
function CuestionarioIniciSecion(){
    return(
        <div  className="CuestionarioIniciSecion">
            <h1 className="tituloIS">Inicio Secion</h1>
            <InputIniciSecion type="text" nombre="Usuario"/>
            <InputIniciSecion type="password" nombre="Contraseña"/>
            <button className="botonis">Iniciar Secíon</button>
        </div>
        
        
    );
}
export default CuestionarioIniciSecion;
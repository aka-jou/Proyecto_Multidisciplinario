import React from "react";
import InputIniciSecion from '../components/InputInicioSesion'
import { Link } from "react-router-dom";
import '../components/CuestionarioInicioSecion.css'

function CuestionarioIniciSecion(){
    return(
        <div  className="CuestionarioIniciSecion">
            <h1 className="tituloIS">Inicio Sesion</h1>
            <InputIniciSecion type="text" nombre="Usuario"/>
            <InputIniciSecion type="password" nombre="Contraseña"/>
            <Link to="/categories">
            <button className="botonis">Iniciar Sesion</button>
            </Link>
            
        </div>
        
        
    );
}
export default CuestionarioIniciSecion;
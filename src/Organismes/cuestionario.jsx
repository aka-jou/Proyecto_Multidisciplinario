import React from "react";
import Campos from "../Atoms/cuestionario/campos";
import File from "../Atoms/cuestionario/file";
import Text from "../Atoms/cuestionario/textoGrande";
import'./cuestionario.css'
function Cuestionario(){
    return(
        <div className="Cuestionario">
            <div className="containerCuestionario">
                <p className="titleR">Registrate aqui</p>
                <Campos type="text" Info="NOMBRE COMPLETO"/>
                <Campos type="text" Info="Numero telefono"/>
                <Campos type="text" Info="E-Mail"/>
                <Campos type="text" Info="Institucion Academica"/>
                <Text/>
                <div className="ContainerFile">
                    <File name="curriculum vitae (CV)" id="CV"/>
                    <File name="Carta de presentacion" id="presentacion"/>
                    
                </div>
                <button type="submit" className="send">Enviar solicitud</button>
            </div>
            
        </div>
    );
}
export default Cuestionario;
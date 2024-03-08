import React from "react";
import Header from "../Organismes/header";
import CategoriasCards from "../Moleculas/categoriasCards";
import './Categorias.css'
function Categorias(){
    return(
        <div className="Categorias">
            <div className="boxHeader">
                <Header/>
            </div>
            <div className="boxCategoriasCards">
                <CategoriasCards/>
            </div>
        </div>     
    );
}
export default Categorias;
import React from "react";
import './campos.css'
function Campos(props){
    return(
       
            <input className="campos" type={props.type} placeholder={props.Info} />
        
    );
}
export default Campos;
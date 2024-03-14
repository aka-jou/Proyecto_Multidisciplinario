import React from "react";
import logo from "../assets/LOGOEP.jpg"
import './Header.css'

function Header (){
    return(
        <div className="Header">
            <img className="logoHeader" src={logo} alt="logo" />
        </div>
    );
}
export default Header;
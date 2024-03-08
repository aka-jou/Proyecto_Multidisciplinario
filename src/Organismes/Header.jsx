import React from "react";
import logo from '../assets/logo.png'
import './header.css'

function Header (){
    return(
        <div className="Header">
            <img className="logoHeader" src={logo} alt="logo" />
        </div>
    );
}
export default Header;
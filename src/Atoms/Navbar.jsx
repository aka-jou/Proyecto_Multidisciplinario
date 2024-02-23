import React from 'react';
import logo from '../assets/LOGOEP.jpg';
import '../Atoms/Styles.atoms.css'

const NavbarX = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="img" />
      <ul className="nav-links">
        <li><a href="/reclutamiento" className='reclu'>Reclutamiento</a></li>
        <li><a href="/contactos" className='contac'>Contactos</a></li>
      </ul>
    </nav>
  );
};

export default NavbarX;

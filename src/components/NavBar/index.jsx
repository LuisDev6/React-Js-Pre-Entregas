import React from "react";
import CardWidget from "../CardWidget";
import './style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="topnav">
      <li className='nav-element'><Link className="a active" to='/'>Inicio</Link></li>
      <li className='nav-element'><Link className="a" to='/category/turbinas'>Turbinas</Link></li>
      <li className='nav-element'><Link className="a" to='/category/micro motores'>Micro Motores</Link></li>
      <li className='nav-element'><Link className="a" to="/category/contra angulos">Contra Angulos</Link></li>
      <li className='nav-element'><Link className="a" to="/category/tornos">Tornos</Link></li>
      <li className="cardWidget"><CardWidget/></li>
    </ul>

  )
}
export default NavBar
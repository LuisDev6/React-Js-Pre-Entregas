import CardWidget from "../CardWidget";
import './style.css';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <ul className="topnav">
      <li className='nav-element'><Link className="a active" to='/'>Inicio</Link></li>
      <li className='nav-element'><Link className="a" to='/category/Turbinas'>Turbinas</Link></li>
      <li className='nav-element'><Link className="a" to='/category/Micro Motores'>Micro Motores</Link></li>
      <li className='nav-element'><Link className="a" to="/category/Contra Angulos">Contra Angulos</Link></li>
      <li className='nav-element'><Link className="a" to="/category/Tornos">Tornos</Link></li>
      <li className="cardWidget"><Link className="a-cart" to="/cart"><CardWidget/></Link></li>
    </ul>

  )
}
export default NavBar
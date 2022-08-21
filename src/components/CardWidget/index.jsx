import React, { useContext } from 'react'
import {HiShoppingCart} from 'react-icons/hi';
import { Shop } from '../../context/ShopContext';
import "./style.css"


export const CardWidget = () => {

  const {cart} = useContext(Shop);
  let articulosTotales = 0;

    cart.map( (producto) =>{
    return (articulosTotales += producto.quantity)
    })
      
  return (
    
    <div>
    {articulosTotales && <span>({articulosTotales})</span>}
    <HiShoppingCart/>
    </div>
  )
}

export default CardWidget
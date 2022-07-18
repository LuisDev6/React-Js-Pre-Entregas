import React from 'react'
import ItemCount from '../ItemCount'
import "./style.css"

const handleAdd = () =>{
    console.log("Se Agrego al Carrito");
    alert("Producto agregado al carrito")
  }

const ItemDetail = ({product}) => {
  return (
    <div className="ItemDetail">
        <div className='div'>
        <h1>{product.title}</h1>
        <img src={product.image} alt="foto producto"/>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        <ItemCount handleAdd={handleAdd} initialStock={10}/> 
        </div>
    </div>
  )
}

export default ItemDetail
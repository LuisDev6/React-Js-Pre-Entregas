import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount'
import "./style.css"




const ItemDetail = ({ product }) => {

  const navigate = useNavigate();

  const [qtyAdded, setQtyAdded] = useState(0);

  const {addItem} = useContext(Shop);

  const handleAdd = (qty) => {
    setQtyAdded(qty);
    console.log("Se Agrego al Carrito " + qty);
  }
  const handleTerminate = () => {
    addItem(product, qtyAdded)
    navigate('/cart');
  }

  return (
    <div className="ItemDetail">
      <div className='div'>
        <h1>{product.title}</h1>
        <img src={product.image} alt="foto producto" />
        <p>Precio: ${product.price}</p>
        <p>Descripción:</p>
        <p>{product.description}</p>
        {!qtyAdded ?
          <ItemCount onConfirm={handleAdd} maxQuantity={product.stock}/>
          :
          <>
          <button className='btn_terminate' onClick={handleTerminate} >Finalizar Compra</button>
          <button className='btn-cart' onClick={() => navigate('/')}>Seguir Comprando</button>
          </>
        }
      </div>
    </div>
  )
}

export default ItemDetail
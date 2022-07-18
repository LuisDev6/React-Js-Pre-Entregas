import React from 'react'
import { useState } from 'react';
import './style.css';



function ItemCount({ handleAdd, initialStock }) {

    const [count, setCount] = useState(1);

    const onAdd = () => {
        if (count < initialStock) {
            setCount(count + 1);
        } else {
            alert("Se alcanzo el maximo de articulos disponible");
            console.log("Se alcanzo el maximo de articulos disponible");
        }

    };

    const onDecrement = () => {
        if ((count > 1) && (count <= initialStock)) {
            setCount(count - 1);
        } else {
            alert("Cantidad minima de producto 1");
            console.log("Cantidad minima de producto 1");
        }

    };
    return (
        <div className='div_count'>
            <p className='p_cantidad'>Cantidad: {count}</p>
            <button  className="btn_minus" onClick={onDecrement}>-</button>
            <button  className="btn_add" onClick={handleAdd}>Agregar al Carrito</button>
            <button className="btn_plus" onClick={onAdd}>+</button>
            

        </div>
    );
}

export default ItemCount
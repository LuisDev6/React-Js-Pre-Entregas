import React from 'react'
import Item from '../Item'
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className='cards'>
        {products.map( producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default ItemList
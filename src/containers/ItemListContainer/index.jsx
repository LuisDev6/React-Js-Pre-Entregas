import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import "./style.css"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  console.log(params);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data);

      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

    getProductos();

  }, [])

  useEffect(() => {

    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  return (
    <div className='item-list-container'>
      <div>
      <p className='p-greeting'>Catalogo de productos</p>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <p>Loading...</p>
      }
      </div>
    </div>
  )
}

export default ItemListContainer
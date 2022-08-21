import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import "./style.css"
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {

      /* guardadoAutomático(); */
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() });
        });
        setProductos(productos);
        setProductosFiltrados(productos); 

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
          <p>Cargando Productos...</p>
        }
      </div>
    </div>
  )
}

export default ItemListContainer
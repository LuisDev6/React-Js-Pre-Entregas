import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import "./style.css"
import { useParams } from 'react-router-dom';


//obtener los datos de un producto especifico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});

    const params = useParams()
    console.log("antes del params")
    console.log(params)

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                console.log("data")
                console.log(data)
                console.log("antes de params producid")
                console.log(params.productId)
                const result = data.find(data => data.id === parseInt(params.productId));
                console.log("console del params product id")
                console.log(params.productId)
                console.log("antes del result")
                console.log(result)
                setProductDetail(result);
            } catch (error) {
                console.log(error);
            }

        }
        getProductos();
    }, [params]);

    return (
        
        Object.keys(productDetail).length !== 0 ?
        
        <ItemDetail className="item-detail" product={productDetail}/>
        :
        <p>Loading...</p>
    )
}


export default ItemDetailContainer

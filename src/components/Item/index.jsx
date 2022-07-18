import React from 'react'
import "./style.css"
import 'materialize-css/dist/css/materialize.min.css'
import { useNavigate } from "react-router-dom";


const Item = ({ product }) => {

    const navigate = useNavigate();

    const handleDetail = () => {
        console.log("Navega hacia el detail");
        navigate(`/detail/${product.id}`)
    }

    return (
        <div className='item' onClick={handleDetail}>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={product.image} alt="foto producto" />
                            <span className="card-title"></span>
                        </div>
                        <div className="card-content">
                            <p className='title'>{product.title}</p>
                            <p>Precio: ${product.price}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
import React, { createContext, useState } from 'react'


export const Shop = createContext();

const ShopProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    //Agregar un item al carrito acorde a la cantidad
    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad)
        const productoRepetido = isIncart(producto);
        if (productoRepetido) {
            productoRepetido.quantity += cantidad;
            setCart([...cart]);
        } else {
            //Es util cuando el producto no esta presente en el carrito
            setCart([...cart, { ...producto, quantity: cantidad }]);
        }
    }

    const isIncart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }
    const removeItem = (id) => {
        const productosFiltrados = cart.filter(producto => producto.id !== id);
        setCart(productosFiltrados);
    }
    const clearCart = () =>{
        setCart([]);

    }
    

    return (
        <Shop.Provider value={{ addItem, removeItem, clearCart, cart, setCart, setTotalPrice, totalPrice }} >
            {children}
        </Shop.Provider >
    )
}

export default ShopProvider


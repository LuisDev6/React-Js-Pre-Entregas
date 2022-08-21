//Función auxiliar para generar la orden.
const ordenGenerada = (nombre, direccion, telefono, email, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;
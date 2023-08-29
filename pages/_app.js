import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (guitarra) => {
        if (carrito?.some(guitarraState => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            console.log(carritoActualizado)
            setCarrito([...carritoActualizado])
        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter(producto => producto.id !== id)
        setCarrito(carritoActualizado)
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = parseInt(guitarra.cantidad)
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    return <Component {...pageProps}
        carrito={carrito}
        agregarCarrito={agregarCarrito}
        eliminarProducto={eliminarProducto}
        actualizarCantidad={actualizarCantidad}
    />
}

export default MyApp

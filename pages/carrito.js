import { useState, useEffect } from "react"
import Layout from "../components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image"


export default function Carrito({ carrito, eliminarProducto, actualizarCantidad }) {


    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((acumulador, producto) => {
            return acumulador + (producto.price * producto.cantidad)
        }, 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <Layout
            title="Carrito"
            description="Carrito de compras"
        >
            <main className="contenedor">
                <h1 className="heading">Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Arituclos</h2>
                        {carrito.length === 0 ? "carrito Vacio" : (
                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto}>
                                    <div>
                                        <Image
                                            width={250}
                                            height={400}
                                            src={producto.imagen}
                                            alt={`imagen de ${producto.nombre}`}
                                        />
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>
                                            {producto.title}
                                        </p>
                                        <div className={styles.cantidad}>
                                            <p>Cantidad {producto.cantidad}</p>

                                            <select
                                                className={styles.select}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value
                                                })}
                                                value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <p className={styles.precio}>
                                            <span>${producto.price}</span>
                                        </p>
                                        <p className={styles.subtotal}>
                                            SubTotal: ${producto.price * producto.cantidad}
                                        </p>
                                    </div>
                                    <button
                                        className={styles.eliminar}
                                        type="button"
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Resumen del pedido :{total} </p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"

export default function Producto({ guitarra, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0)
    const { title, description, price, image } = guitarra

    const handleSubmit = e => {
        e.preventDefault()
        if (cantidad < 1) {
            console.log("cantidad no valida")
            return
        }

        const guitarraSeleccionada = {
            id: guitarra.id,
            imagen: guitarra.image,
            title: guitarra.title,
            price: guitarra.price,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <Layout
            title={`Guitarra ${title}`}
            description={`Guitarra de ${description}`}
        >
            <div className={styles.guitarra} >
                <Image src={image} alt={`imagen del producto ${title}`} width={400} height={400} />
                <div className={styles.contenido} >
                    <h3>{title}</h3>
                    <p className={styles.descripcion} >{description}</p>
                    <p className={styles.precio} >${price}</p>
                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad</label>
                        <select
                            value={cantidad}
                            onChange={e => setCantidad(+e.target.value)}
                            id="cantidad"
                        >
                            <option value="0" >-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input
                            type="submit"
                            value="Agregar al carrito"

                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

//export const getServerSideProps = async ({ query: { id } }) => {
//    const respuesta = await fetch(`${process.env.API_URL}/products/${id}`)
//    const resultado = await respuesta.json()
//    return {
//        props: {
//            guitarra: resultado
//        }
//    }
//}

export const getStaticPaths = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/products`)
    const resultado = await respuesta.json()
    const paths = resultado.map(guitarra => ({
        params: {
            id: guitarra.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { id } }) => {
    const respuesta = await fetch(`${process.env.API_URL}/products/${id}`)
    const resultado = await respuesta.json()
    return {
        props: {
            guitarra: resultado
        }
    }
}

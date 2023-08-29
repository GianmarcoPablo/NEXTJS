import React from 'react'
import Layout from '../components/layout'
import Guitarras from '../components/guitarras'
import styles from "../styles/grid.module.css"

export default function Tienda({ guitarras }) {
    return (
        <Layout
            title="Tienda"
            description="Esta es la descripción de la página de tienda"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nuestra Colección</h2>
                <div className={styles.grid} >
                    {guitarras?.map(guitarra => (
                        <Guitarras
                            key={guitarra.id}
                            guitarra={guitarra}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

//export const getStaticProps = async () => {
//    const respuesta = await fetch(`${process.env.API_URL}/products`)
//    const resultado = await respuesta.json()
//    return {
//        props: {
//            guitarras: resultado
//        }
//    }
//}

export const getServerSideProps = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/products`)
    const resultado = await respuesta.json()
    return {
        props: {
            guitarras: resultado
        }
    }
}

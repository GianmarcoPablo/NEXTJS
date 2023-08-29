import Layout from "../components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return (
        <Layout
            title="Nosotros"
            description="Esta es la descripción de la página de nosotros"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image
                        src="/img/nosotros.jpg"
                        alt="Imagen de nosotros"
                        width={1000}
                        height={800}
                    />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos harum eveniet possimus placeat voluptatem doloribus iste molestiae fuga obcaecati sed incidunt exercitationem veritatis magni qui consequatur reprehenderit, voluptatum velit impedit! Eius labore totam fuga explicabo 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos harum eveniet possimus placeat voluptatem doloribus iste molestiae fuga obcaecati sed incidunt exercitationem veritatis magni qui consequatur reprehenderit, voluptatum velit impedit! Eius labore totam fuga explicabo 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

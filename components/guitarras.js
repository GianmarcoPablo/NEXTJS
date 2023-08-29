import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

export default function Guitarras({ guitarra }) {

    const { description, image, price, id, category, title } = guitarra

    return (
        <div className={styles.guitarra} >
            <Image src={image} alt={`imagen del producto ${title}`} width={400} height={400} />
            <div className={styles.contenido} >
                <h3>{title}</h3>
                <p className={styles.descripcion} >{description}</p>
                <p className={styles.precio} >${price}</p>
                <Link
                    href={`/guitarras/${id}`}
                    className={styles.enlace}
                >
                    Ver Producto
                </Link>
            </div>
        </div>
    )
}

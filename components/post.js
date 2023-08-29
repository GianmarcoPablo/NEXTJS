import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"

export default function Post({ post }) {

    const { avatar, first_name, last_name, email } = post

    return (
        <article>
            <Image src={avatar} alt={`imagen de ${first_name}`} width={300} height={400} />
            <div className={styles.contenido}>
                <h3>{first_name} {last_name}</h3>
                <p className={styles.fecha} >{email}</p>
                <Link href={`/blog/${post.id}`} className={styles.enlace} >
                    Ver más
                </Link>
            </div>
        </article>
    )
}


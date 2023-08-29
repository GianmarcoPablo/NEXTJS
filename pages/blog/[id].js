import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"

export default function Post({ post }) {

    const { first_name, last_name, avatar, email } = post
    return (
        <Layout>
            <article className={`${styles.post} ${styles["mt-3"]}`}>
                <Image src={avatar} alt={`imagen de ${first_name}`} width={300} height={400} />
                <div className={styles.contenido}>
                    <h3>{first_name} {last_name}</h3>
                    <p className={styles.fecha} >{email}</p>
                </div>
            </article>
        </Layout>
    )
}

export const getServerSideProps = async ({ query: { id } }) => {
    const respuesta = await fetch(`https://reqres.in/api/users/${id}`)
    const { data } = await respuesta.json()
    return {
        props: {
            post: data
        }
    }
}
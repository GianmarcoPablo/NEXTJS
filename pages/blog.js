import Layout from "../components/layout"
import Post from "../components/Post"
import styles from "../styles/grid.module.css"

export default function Blog({ posts }) {
    return (
        <Layout
            title="Blog"
            description="Esta es la descripción de la página de blog"
        >
            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>
                    {posts?.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const respuesta = await fetch(`https://reqres.in/api/users`)
    const { data } = await respuesta.json()
    return {
        props: {
            // solo quiero un arreglo con un elemento
            posts: data.slice(0, 6)
        }
    }
}

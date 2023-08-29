import Layout from "../components/layout"
import Guitarras from "../components/guitarras"
import Post from "../components/Post"
import styles from "../styles/grid.module.css"

export default function Home({ guitarras, posts }) {

    return (
        <>
            <Layout
                title="Inicio"
                description="Esta es la descripción de la página de inicio"
            >
                <main className="contenedor">
                    <h1 className="heading">Nuestra coleccion</h1>
                    <div className={styles.grid} >
                        {guitarras?.map(guitarra => (
                            <Guitarras
                                key={guitarra.id}
                                guitarra={guitarra}
                            />
                        ))}
                    </div>
                </main>

                <section className="contenedor ">
                    <h2 className="heading">Blog</h2>
                    <div className={styles.grid}>
                        {posts?.map(post => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {

    const urlGuitarras = `${process.env.API_URL}/products`
    const urlPosts = `https://reqres.in/api/users`

    const [resGuitarras, resPosts] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlPosts)
    ])

    const [dataGuitarras, dataPosts] = await Promise.all([
        resGuitarras.json(),
        resPosts.json()
    ])

    return {
        props: {
            guitarras: dataGuitarras,
            posts: dataPosts.data.slice(0, 6)
        }
    }
}
import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
    return (
        <Layout
            title="Página no encontrada"
            description="Pagina 404 de la tienda de guitarras"
        >
            <p className="error">Pagina no encontrada</p>
            <Link className="error-enlace" href="/">
                Volver a la tienda
            </Link>
        </Layout>
    )
}

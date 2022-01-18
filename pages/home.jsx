import LayoutDefault from '../Layouts/index'
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <LayoutDefault>
            <h1 className={styles.container}>Pagina di apertura</h1>
            <p> Primo progetto in Next.js</p>
        </LayoutDefault>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}
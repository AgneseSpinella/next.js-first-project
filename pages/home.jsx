import LayoutDefault from '../Layouts/index'
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <LayoutDefault>
            <h1 className={styles.container}>Home</h1>
        </LayoutDefault>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}
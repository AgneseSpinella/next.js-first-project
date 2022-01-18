import styles from './index.module.scss'
import Link from "next/link"

export default function DefaultLayout({children}) {
    return (
        <>
            <h3 className={styles.nav}>Navbar</h3>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link> 
                </li>
                <li>
                    <Link href="/home">
                        <a>HomeBis</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery">
                        <a>gallery</a>
                    </Link>
                </li>
            </ul>
            {children}
            <h3 className={styles.foot}>Footer</h3>
        </>
    )
}
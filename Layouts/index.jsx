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
                    <Link href="/home">
                        <a>HomeBis</a>
                    </Link>
                </li>
            </ul>
            {children}
            <h3 className={styles.foot}>Footer</h3>
        </>
    )
}
import styles from './index.module.scss'
import Link from "next/link"

export default function DefaultLayout({children}) {
    return (
        <>
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/home">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery">
                        <a>Gallery</a>
                    </Link>
                </li>
            </ul>
        
        </div>
        <div className={styles.children}>
            {children}
        </div>
            <h3 className={styles.foot}>Footer</h3>
        </>
    )
}
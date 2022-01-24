import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => (
    <nav >
        <div className={styles.header}>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            <Link href="/cards">
                <a>
                    Cards
                </a>
            </Link>
            <Link href="/owners">
                <a>
                    Owners
                </a>
            </Link>
            <Link href="/charts">
                <a>
                    Charts
                </a>
            </Link>
            <Link href="/transfers">
                <a>
                    Transfers
                </a>
            </Link>
        </div>
    </nav>
)

export default Header
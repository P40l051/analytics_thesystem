import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <a>
            Powered by{' '}
            <span className={styles.span}>
                <h4>THE SYSTEM CREW</h4>
            </span>
        </a>
    </footer>
)

export default Footer
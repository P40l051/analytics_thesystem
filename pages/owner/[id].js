import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Owner = () => {
    const router = useRouter()
    const { id } = router.query

    if (router.isFallback) {
        return <div />
    } else return (
        <main className={styles.main}>
            <h1>Owner: {id}</h1>
        </main>

    )
}

export default Owner
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ReactLoading from 'react-loading';

const Loading = () => (
    <div className={styles.container}>
        <Head>
            <title>The System Analytics</title>
            <meta name="This is the loading page" />
        </Head>
        <main className={styles.main}>
            <ReactLoading type={"spinningBubbles"} color={"#000000"} height={'20%'} width={'20%'} />
        </main>
    </div>
)

export default Loading
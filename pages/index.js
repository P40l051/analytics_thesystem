import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The System Analytics</title>
        <meta name="This app shows TheSystem smart contract data." />
      </Head>
      <main className={styles.main}>
        <h1 >THE SYSTEM</h1>
      </main>
    </div>
  )
}





import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Overview from '../components/overview'
import Card from '../components/card'
import { getTokens, getMetadatas, getTransfers } from './api/getData';

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    const to = await getTokens()
    const tr = await getTransfers()
    data = { props: { metadatas: me, tokens: to, transfers: tr } }
    return data;
}
export default function Cards({ tokens, metadatas, transfers }) {
    const filtereds = transfers.filter(transfer => transfer.from == null);
    //console.log("filtereds:", filtereds);
    return (
        <div className={styles.container}>
            <Head>
                <title>The System Analytics</title>
                <meta name="This page shows TheSystem smart contract active tokens and statistics." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Overview transfers={transfers} tokens={tokens} />
                <div className={styles.grid}>
                    {tokens.map((token) => (
                        <Card token={token} metadata={metadatas[token.identifier - 1]} />
                    ))}
                </div>
            </main>
        </div>
    )
}


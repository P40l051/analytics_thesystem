/*this page is just a test list (to complete...) of possible charts.
 - Charts from tokens data are in components/charts/tokens
 - Charts from token data could be in components/charts/token
 - Charts from Owners data could be in components/charts/owners
 - Charts from Owner data could be in components/charts/owner
*/
import Head from 'next/head'

import React from 'react';
import styles from '../styles/Home.module.css'
import Chart from 'chart.js/auto';
import { getTransfers, getMetadatas } from './api/getData';
import { ValueOverTime } from '../components/charts/transfers';
// import getDate from './owners';
// getstaticpaths first
export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    // const to = await getTokens()
    const tr = await getTransfers()
    // data = { props: { metadatas: me, tokens: to, transfers: tr } }
    data = { props: { transfers: tr } }
    console.log(tr)
    return data;
}
export function getDate(_timestamp) {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(_timestamp * 1000)
    return date
}
// import { TokensBar, TokensDoughnut } from '../components/charts/tokens';

export default function Transfers({ transfers, metadata }) {
    // { console.log(getDate(tx.timestamp * 1000)) }
    { console.log(transfers[0])
        // var date = getDate(transfers[0].timestamp * 1000) 
        console.log(transfers[0].timestamp)
        console.log(getDate(transfers[0].timestamp))
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>The System Transfer Analytics</title>
                <meta name="This page shows transfers in the System." />
            </Head>
            <main className={styles.trasfers}>
                <h1>Transfers</h1>
                <ValueOverTime transfers={ transfers } />
                    {/* // transfers.map((tx, idx) => (
                        // console.log('logging from console', tx)
                        // {tx.id}
                        // <div key={idx}>
                        //     <p>Id {tx.id}</p>
                        //     <p>Token {tx.token.id}</p>
                        //     <p>Timestamp {tx.timestamp}</p>
                        //     <p>Date {getDate(tx.timestamp)}</p>
                        //     <p>Value {tx.valueExact}</p>
                        // </div>

                    // )) */}
            </main>
        </div>
);
}
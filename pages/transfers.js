import Head from 'next/head'

import React from 'react';
import styles from '../styles/Home.module.css'
import Chart from 'chart.js/auto';
import { getTransfers, getMetadatas } from './api/getData';
import { ValueOverTime } from '../components/charts/transfers';
import getDate from '../utils/getdate';

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    // const to = await getTokens()
    const tr = await getTransfers()
    // data = { props: { metadatas: me, tokens: to, transfers: tr } }
    data = { props: { transfers: tr } }
    return data;
}

export default function Transfers({ transfers, metadata }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>The System Transfer Analytics</title>
                <meta name="This page shows transfers in the System." />
            </Head>
            <main className="py-32 w-2/3 min-h-screen mx-auto items-center justify-center">
                <h1>Transfers</h1>
                <ValueOverTime transfers={transfers} />
            </main>
        </div>
    );
}
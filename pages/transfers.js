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
import { getTransfers } from './api/getData';
import getStaticProps from '../utils/properties';

// import { TokensBar, TokensDoughnut } from '../components/charts/tokens';

export default function Transfers({ transfers }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>The System Transfer Analytics</title>
                <meta name="This page shows transfers in the System." />
            </Head>
            <main className={styles.trasfers}>
                <h1>Transfers</h1>
                <p>{"  "}</p>
            </main>
        </div>
);
}





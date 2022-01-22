/*this page is just a test list (to complete...) of possible charts.
 - Charts from tokens data are in components/charts/tokens
 - Charts from token data could be in components/charts/token
 - Charts from Owners data could be in components/charts/owners
 - Charts from Owner data could be in components/charts/owner
 - Charts from Transfers data could be in components/charts/transfers
*/

import React from 'react';
import styles from '../styles/Home.module.css'
import Chart from 'chart.js/auto';
import { getTokens, getMetadatas, getTransfers } from './api/getData';

import { TokensBar, TokensDoughnut } from '../components/charts/tokens';

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    const to = await getTokens()
    const tr = await getTransfers()
    data = { props: { metadatas: me, tokens: to, transfers: tr } }
    return data;
}

export default function Charts({ tokens }) {
    return (
        <main className={styles.main}>
            <div>
                <TokensBar tokens={tokens} />
            </div>
            <p>{"  "}</p>
            <div>
                <TokensDoughnut tokens={tokens} />
            </div>
        </main>
    );
}

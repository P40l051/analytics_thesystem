/*this page is just a test list (to complete...) of possible charts.
 - Charts from tokens data are in components/charts/tokens
 - Charts from token data could be in components/charts/token
 - Charts from Owners data could be in components/charts/owners
 - Charts from Owner data could be in components/charts/owner
 - Charts from Transfers data could be in components/charts/transfers
*/
import React from 'react';
import styles from '../styles/Home.module.css'
import { getTokens, getMetadatas, getTransfers } from './api/getData';
import { TokensBar, TokensBarMix, TokensDoughnut } from '../components/charts/tokens';

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
        <main className=" py-20 w-2/3 min-h-screen mx-auto items-center justify-center">
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <TokensBar tokens={tokens} />
            </div>
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                try to eliminate labels
                <TokensBarMix tokens={tokens} />
            </div>
            <div className="mt-10 w-2/3 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <TokensDoughnut tokens={tokens} />
            </div>
        </main>
    );
}

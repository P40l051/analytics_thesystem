import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getOwners, getMetadatas } from './api/getData';
import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"
import getStaticProps from '../utils/properties';


export function getDate(_timestamp) {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(_timestamp)
    return date
}

export default function Owners({ owners, metadata }) {
    //console.log(metadata);
    return (
        <div className={styles.container}>
            <Head>
                <title>The System Analytics</title>
                <meta name="This page shows TheSystem smart owners data." />
            </Head>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {owners.map((owner) => (
                        <div key={owner.id} className={styles.card}>
                            <Link href="/owner/[id]" as={`/owner/${owner.id}`}>
                                <h2> {owner.id}</h2>
                            </Link>
                            <div className={styles.card}>
                                {owner.balances.map((balance) => (
                                    <Image src={metadata[(balance.id.split("/")[0].split("x")[1] - 1)].image.toString()} width={80} height={80} />
                                ))}
                            </div>
                            {owner.balances.map((balance) => (
                                <div key={owner.id} className={styles.cardowner}>
                                    <div key={balance.id} className={styles.subList} >
                                        <h3>Card {balance.id.split("/")[0].split("x")[1]}</h3>
                                        <p>
                                            <Image src={metadata[(balance.id.split("/")[0].split("x")[1] - 1)].image.toString()} width={80} height={80} />
                                        </p>
                                        <div className={styles.subList}>
                                            <h4>Overview</h4>
                                            <p>Owned: {balance.valueExact}</p>
                                            <p>
                                                {"Mints: " + getMintsBurnsTransfers(balance.transferToEvent).mints}
                                            </p>
                                            <p>
                                                {"Burns: " + getMintsBurnsTransfers(balance.transferFromEvent).burns}
                                            </p>
                                            <p>
                                                {"Transfers IN : " + getMintsBurnsTransfers(balance.transferToEvent).transfers}
                                            </p>
                                            <p>
                                                {"Transfers OUT: " + getMintsBurnsTransfers(balance.transferFromEvent).transfers}
                                            </p>
                                        </div>
                                        <div className={styles.card}>
                                            <h3>Detalied transfers</h3>
                                            <div className={styles.card} >
                                                <p>
                                                    Transfers IN: {balance.transferToEvent.reduce(function (tot, arr) {
                                                        { return tot + parseInt(arr.valueExact) }
                                                    }, 0)}
                                                </p>
                                                {balance.transferToEvent.map((toEvent) => (
                                                    <div key={toEvent.id} className={styles.card} >
                                                        {toEvent.from == null && <p>MINT</p>}
                                                        {toEvent.from != null && <p>FROM:{" " + toEvent.from.id}</p>}
                                                        <p>{"Date: " + getDate(toEvent.timestamp * 1000)}</p>
                                                        <p> N° Tokens: {toEvent.valueExact}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={styles.card} >
                                                <p>
                                                    Transfers OUT: {balance.transferFromEvent.reduce(function (tot, arr) {
                                                        { return tot + parseInt(arr.valueExact) }
                                                    }, 0)}
                                                </p>
                                                {balance.transferFromEvent.map((fromEvent) => (
                                                    <div key={fromEvent.id} className={styles.card} >
                                                        {fromEvent.to == null && <p>BURN</p>}
                                                        {fromEvent.to != null && <p>TO:{" " + fromEvent.to.id}</p>}
                                                        <p>{"Date: " + getDate(fromEvent.timestamp * 1000)}</p>
                                                        <p>N° Tokens: {fromEvent.valueExact}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>


        </div>
    )
}
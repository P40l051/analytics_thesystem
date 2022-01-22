import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"

export default function Card({ token, metadata }) {
    const data = getMintsBurnsTransfers(token.transfers)
    return (
        <div key={token.id} className={styles.card}>

            <h2>
                Card {token.identifier}
            </h2>
            <p>
                <Link href="/card/[token.identifier]" as={`/card/${token.identifier}`}>
                    <Image src={metadata.image.toString()} width={150} height={150} />
                </Link>
            </p>
            <p>
                Current Supply: {token.totalSupply.valueExact}
            </p>
            <p>
                Transfers: {data.transfers}
            </p>
            <p>
                Minted: {data.mints}
            </p>
            <p>
                Burned: {data.burns}
            </p>
        </div>
    )
}
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"

export default function Card({ token, metadata }) {
    const data = getMintsBurnsTransfers(token.transfers)
    console.log(token.id)
    console.log(token.identifier)
    return (
        <Link href="/card/[token.identifier]" as={`/card/${token.identifier}`}>
            <div key={token.identifier} className="shadow-lg w-60 border max-w-sm mx-auto rounded-xl  p-2 bg-white  relative overflow-hidden">
                <p className="text-2xl text-black font-bold mb-1" >
                    Card {token.identifier}
                </p>
                <p className="flex py-1 bg-gray-100 items-center justify-center">
                    <Image src={metadata.image.toString()} width={150} height={150} />
                </p>
                <div className="mt-4" >
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
            </div>
        </Link>
    )
}
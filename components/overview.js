import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"

export default function Overview({ transfers, tokens }) {

    const data = getMintsBurnsTransfers(transfers)
    return (
        <div>
            <p>Active card: {tokens.length}</p>

            <p>
                Total Mints: {data.mints}
            </p>
            <p>
                Total Burns: {data.burns}
            </p>
            <p>
                Total Transfers: {data.transfers}
            </p>
        </div>
    )
}

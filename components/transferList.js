import getDate from "../utils/gettime"

export default function TransferList({ transfers }) {
    return (
        <div>
            {transfers.map((transfer) => (
                <div key={transfer.id}  >
                    {(transfer.from == null && transfer.to != null) && <p>MINT to{" " + transfer.to.id}</p>}
                    {(transfer.from != null && transfer.to == null) && <p>BURN from{" " + transfer.from.id}</p>}
                    {(transfer.from != null && transfer.to != null) && <p>TRANSFER from{" " + transfer.from.id + " to " + transfer.to.id}</p>}
                    <p>{"Date: " + getDate(transfer.timestamp * 1000)}</p>
                    <p> N° Tokens: {transfer.valueExact}</p>
                </div>
            ))}
        </div>
    )
}


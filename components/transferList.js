import getDate from "../utils/gettime"

export default function TransferList({ transfers }) {
    return (
        <div class="py-6 px-6 ">
            <a class=" px-4 font-bold text-2xl text-black" > Transactions: {transfers.length}</a>

            {transfers.map((transfer) => (
                <div key={transfer.id} class="py-2 mb-1 w-1/2 px-6" >
                    {(transfer.from == null && transfer.to != null) && <p className=" text-green-500 font-bold">MINT</p>}
                    {(transfer.from == null && transfer.to != null) && <p className="font-bold">to:{" " + transfer.to.id}</p>}
                    {(transfer.from != null && transfer.to == null) && <p className=" text-red-500 font-bold">BURN</p>}
                    {(transfer.from != null && transfer.to == null) && <p className="font-bold">from:{" " + transfer.from.id}</p>}
                    {(transfer.from != null && transfer.to != null) && <p className=" text-yellow-500 font-bold">TRANSFER</p>}
                    {(transfer.from != null && transfer.to != null) && <p className="font-bold">from:{" " + transfer.from.id}</p>}
                    {(transfer.from != null && transfer.to != null) && <p className="font-bold">to:{" " + transfer.to.id}</p>}
                    <p>{"Date: " + getDate(transfer.timestamp * 1000)}</p>
                    <p> N° Tokens: {transfer.valueExact}</p>
                </div>
            ))}
        </div>
    )
}


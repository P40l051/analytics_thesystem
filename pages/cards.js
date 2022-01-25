import Overview from '../components/overview'
import Card from '../components/card'
import { getTokens, getMetadatas, getTransfers } from './api/getData';

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    const to = await getTokens()
    const tr = await getTransfers()
    data = { props: { metadatas: me, tokens: to, transfers: tr } }
    return data;
}
export default function Cards({ tokens, metadatas, transfers }) {
    console.log("filtereds:");
    const filtereds = transfers.filter(transfer => transfer.from == null);
    // console.log("filtereds:", filtereds);
    return (

        <div className="py-20 min-h-screen">
            <Overview transfers={transfers} tokens={tokens} />
            <div className="mt-4 w-11/12 mx-auto shadow-lg border rounded-xl p-4 bg-white relative overflow-hidden">
                <p className="px-2 py-2 text-gray-800 text-xl font-medium">
                    Collection
                </p>
                <div className="mt-4 grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 ">
                    {tokens.map((token) => (
                        <div key={token.id}>
                            <Card token={token} metadata={metadatas[token.identifier - 1]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}


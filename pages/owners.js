import Image from 'next/image'

import { getOwners, getMetadatas } from './api/getData';
import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"
import Modal from '../components/modal';
import SearchBar from '../components/search';
import React, { useState } from 'react';

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    const ow = await getOwners()
    data = { props: { metadata: me, owners: ow } }
    return data;
}

export function getDate(_timestamp) {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(_timestamp)
    return date
}

export default function Owners({ owners, metadata }) {
    const [searchQuery, setSearchQuery] = useState('');
    const filterOwners = (owners, query) => {
        if (!query) {
            return owners;
        }
        return owners.filter((owner) => {
            const ownerID = owner.id.toLowerCase();
            return ownerID.includes(query.toLowerCase());
        });
    };
    const filteredOwners = filterOwners(owners, searchQuery);
    return (
        <main className="py-20 mx-auto min-h-screen">
            <div>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="mx-auto flex-col">
                {filteredOwners.map((owner) => (
                    <div key={owner.id} className=" py-6 mb-4 border rounded-xl mx-auto justify-center  w-11/12">
                        <p className="mx-auto flex justify-center text-2xl font-bold mb-4"> {owner.id}</p>
                        <div className=" w-full mx-auto grid grid-flex gap-y-4 gap-x-2 row-span-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
                            {owner.balances.map((balance) => (
                                <div className="border shadow-lg w-60 mx-auto max-w-sm rounded-xl  p-2 bg-white  relative overflow-hidden">
                                    <div className="flex justify-between">
                                        <p class="text-2xl text-black font-bold mb-1">Card {balance.id.split("/")[0].split("x")[1]}</p>
                                        <div className=" float-right leading-none font-semibold">
                                            <Modal balance={balance} />
                                        </div>
                                    </div>
                                    <p className="flex py-1 bg-gray-100 items-center justify-center">
                                        <Image src={metadata[(balance.id.split("/")[0].split("x")[1] - 1)].image.toString()} width={80} height={80} />
                                    </p>
                                    <div>
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
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </main>



    )
}
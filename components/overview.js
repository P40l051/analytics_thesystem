import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from '../styles/Home.module.css'

export default function Overview({ transfers, tokens }) {
    const data = getMintsBurnsTransfers(transfers)
    const dataset = {
        label: 'N° tokens', data: [data.mints, data.burns, data.transfers], borderWidth: 1
    }
    const datachart = {
        props: { labels: ["MINTS", "BURNS", "TRANSFERS"], datasets: [dataset] }
    }
    return (
        <div className="grid sm:grid-cols-2 max-w-xs justify-center items-center mx-auto col-2 space-y-2">
            <div class="shadow-lg border mx-auto rounded-xl w-32 h-20 p-4 bg-white  relative overflow-hidden">
                <p class="text-2xl text-black font-bold">
                    {tokens.length}
                </p>
                <p class="text-gray-400 text-sm">
                    Active Cards
                </p>
            </div>

            <div class="shadow-lg border rounded-xl mx-auto max-w-xs p-4 bg-white relative overflow-hidden">
                <div class=" flex w-60 items-center justify-between mb-6">
                    <p class="text-gray-800  text-xl font-medium">
                        Overview
                    </p>
                </div>
                <div class="flex items-center mb-2 rounded justify-between p-3 bg-green-100">
                    <span class="rounded-lg p-2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                    </span>
                    <div class="flex w-full ml-2 items-center justify-between">
                        <p>
                            Mints
                        </p>
                        <p>
                            {data.mints}
                        </p>
                    </div>
                </div>
                <div class="flex items-center mb-2 rounded justify-between p-3 bg-red-100">
                    <span class="rounded-lg p-2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <div class="flex w-full ml-2 items-center justify-between">
                        <p>
                            Burns
                        </p>
                        <p>
                            {data.burns}
                        </p>
                    </div>
                </div>
                <div class="flex items-center mb-2 rounded justify-between p-3 bg-yellow-100">
                    <span class="rounded-lg p-2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                    </span>
                    <div class="flex w-full ml-2 items-center justify-between">
                        <p>
                            Transfers
                        </p>
                        <p>
                            {data.transfers}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


import React from "react";
import getDate from "../utils/getdate"

export default function Modal({ balance }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-10 z-50 outline-none focus:outline-none"
                    >
                        <div className="mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg overflow-y-scroll relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between overflow-y-scroll p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <div className="grid grid-cols-1">
                                        <p className="text-3xl font-semibold">
                                            Card: {balance.id.split("/")[0].split("x")[1]}
                                        </p>
                                        <p className="text-gray-600 text-xl">

                                            Owner: {balance.id.split("/")[1]}
                                        </p>
                                        <p className="text-gray-600 text-xl">

                                            Transactions
                                        </p>
                                    </div>
                                    <button
                                        className="p-1 float-right text-3xl leading-none font-semibold"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="opacity-3 h-6 w-6 text-2xl block ">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative  border flex-auto">
                                    <div>
                                        <div className="items-start justify-between overflow-y-scroll p-5 border-b border-solid border-blueGray-200 " >
                                            <p className=" px-4 font-bold text-xl text-black">
                                                Transactions IN: {balance.transferToEvent.reduce(function (tot, arr) {
                                                    { return tot + parseInt(arr.valueExact) }
                                                }, 0)}
                                            </p>
                                            {balance.transferToEvent.map((toEvent) => (
                                                <div className="py-2 mb-1 w-1/2 px-6" key={toEvent.id}  >
                                                    {toEvent.from == null && <p className=" text-green-500 font-bold">MINT</p>}
                                                    {toEvent.from != null && <p className=" text-yellow-500 font-bold">FROM:{" " + toEvent.from.id}</p>}
                                                    <p>{"Date: " + getDate(toEvent.timestamp)}</p>
                                                    <p> N° Tokens: {toEvent.valueExact}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="items-start justify-between overflow-y-scroll p-5 border-b border-solid border-blueGray-200 " >
                                            <p className=" px-4 font-bold text-xl text-black">
                                                Transactions OUT: {balance.transferFromEvent.reduce(function (tot, arr) {
                                                    { return tot + parseInt(arr.valueExact) }
                                                }, 0)}
                                            </p>
                                            {balance.transferFromEvent.map((fromEvent) => (
                                                <div className="py-2 mb-1 w-1/2 px-6" key={fromEvent.id}  >
                                                    {fromEvent.to == null && <p className=" text-red-500 font-bold">BURN</p>}
                                                    {fromEvent.to != null && <p className=" text-yellow-500 font-bold">TO:{" " + fromEvent.to.id}</p>}
                                                    <p>{"Date: " + getDate(fromEvent.timestamp)}</p>
                                                    <p>N° Tokens: {fromEvent.valueExact}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

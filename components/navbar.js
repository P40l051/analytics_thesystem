import Link from 'next/link'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, providers } from 'ethers'
import { useState } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import TheSystem from '../artifacts/contracts/TheSystem.sol/TheSystem.json'

const INFURA_ID = 'a20c08a4c0e74ca4815897e4a48439cc'
const thesystemaddress = "0x31eda4066B6E258bf56e17A93f17D96DAcDA8cD8"

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID, // required
        },
    }
}

let web3Modal
if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true,
        providerOptions, // required
    })
}

export default function Navbar() {
    const [address, setAddress] = useState(false);
    const [provider, setProvider] = useState(null);
    async function connect() {
        const provider = await web3Modal.connect()
        const web3Provider = new providers.Web3Provider(provider)
        setProvider(web3Provider)
        const signer = web3Provider.getSigner()
        const address = await signer.getAddress()
        setAddress(address)
        const balance = await web3Provider.getBalance(address)
        console.log("balance is: ", balance.toString());
        const network = await web3Provider.getNetwork()
    }

    async function disconnect() {
        await web3Modal.clearCachedProvider()
        console.log("CachedProvider cleared!")
        setAddress(false)
        setProvider(null)
    }

    return (
        <nav >
            <div className="py-6 px-10 z-40 fixed bg-white flex font-mono border-b w-full justify-between ">
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <Link href="/cards">
                    <a>
                        Cards
                    </a>
                </Link>
                <Link href="/owners">
                    <a>
                        Owners
                    </a>
                </Link>
                <Link href="/charts">
                    <a>
                        Charts
                    </a>
                </Link>
                <Link href="/transfers">
                    <a>
                        Transfers
                    </a>
                </Link>
                <Link href="/modal">
                    <a>
                        Modal
                    </a>
                </Link>
                {provider ? (
                    <div>
                        <a className="px-2 font-extralight">{address}</a>
                        <button className="border bold rounded px-2 bg-red-400" onClick={disconnect}>
                            Disconnect
                        </button>
                    </div>
                ) : (
                    <button className="border bold rounded px-2 bg-gray-200" onClick={connect}>
                        Connect
                    </button>
                )}
            </div>
        </nav>
    )
}

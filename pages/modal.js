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

export default function Modal() {
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
    }

    async function askUri() {
        const contract = new ethers.Contract(thesystemaddress, TheSystem.abi, provider)
        const data = await contract.uri(1)
        console.log(data)
    }

    return (
        <div className="min-h-screen  flex items-center justify-center">

            <a className="font-mono align-middle text-xl">
                <p>
                    <button className="border rounded-xl mb-2 px-2 py-2" type="button" onClick={connect}>
                        Connect
                    </button>
                </p>
                <p>
                    <button className="border mb-2 rounded-xl px-2 py-2" type="button" onClick={disconnect}>
                        Disconnect
                    </button>
                </p>
                <p>
                    <button className="border mb-2 rounded-xl px-2 py-2" type="button" onClick={askUri}>
                        Uri
                    </button>
                </p>
                <p>{address}</p>
            </a>
        </div>
    )
}
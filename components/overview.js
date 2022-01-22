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
        <div className={styles.grid}>
            <div>
                <p>Active card: {tokens.length}</p>
                <p>Total Mints: {data.mints}</p>
                <p>Total Burns: {data.burns}</p>
                <p>Total Transfers: {data.transfers}</p>
            </div>
            <div>
                <Bar
                    data={datachart.props}
                    width={400}
                    height={200}
                />
            </div>
        </div>

    )
}


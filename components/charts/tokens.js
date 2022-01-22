import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import orderChartdata from "../../utils/orderchartdata"

export function TokensBar({ tokens }) {
    const data = orderChartdata(tokens)
    return (
        <div>
            <Bar
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}

export function TokensDoughnut({ tokens }) {
    const data = orderChartdata(tokens)
    return (
        <div >
            Total Supply
            <Doughnut data={data.props} />
        </div>
    );
}



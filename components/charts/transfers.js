import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import dynamicColors from "../../utils/dynamiccolors.js";
import getDate from "../../utils/getdate";

export default function timeData(transfers) {
    var _vt = [];
    var labels = [];
    var colors = [];
    var colorsborder = [];
    for (let i = 0; i < transfers.length; i++) {
        if (i == 0) {
            _vt.push(Number(transfers[i].valueExact))
            labels.push(getDate(transfers[i].timestamp));
        }
        else if (transfers[i].timestamp == transfers[i - 1].timestamp) {
            _vt[_vt.length - 1] = _vt[_vt.length - 1] + Number(transfers[i].valueExact)
        } else {
            _vt.push(Number(transfers[i].valueExact) + _vt[_vt.length - 1])
            labels.push(getDate(transfers[i].timestamp))
        }
        console.log(transfers[i])
        colors.push("red")
    }
    const dataset = {
        label: 'Value over time',
        data: _vt,
        backgroundColor: colors,
        borderColor: colorsborder,
        borderWidth: 1
    };
    console.log(_vt)
    return {
        props: { labels: labels, datasets: [dataset] }
    }
}
export function ValueOverTime({ transfers }) {
    const data = timeData(transfers)
    console.log(data.props.labels)
    return (
        <div>
            <Line
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}
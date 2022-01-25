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
        // totalS.push(transfers[i].totalSupply.valueExact);
        labels.push(getDate(transfers[i].timestamp));
        if (i == 0)
            _vt.push(Number(transfers[i].valueExact))
        else
            _vt.push(Number(_vt[i - 1]) + Number(transfers[i].valueExact))

        console.log(transfers[i])
        var color = dynamicColors(-10);
        colors.push(color[1])
        // colorsborder.push(color[0])
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
                // labels={ [1, 2, 3, 4, 5]}
                // data={ [1, 2, 3, 4, 5] }
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}
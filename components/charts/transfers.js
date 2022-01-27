import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import dynamicColors from "../../utils/dynamiccolors.js";
import getDate from "../../utils/getdate";

export default function timeData(transfers) {
    var _vt = [];
    var _vts = [];
    var _vm = [];
    var _vb = [];
    var _vtr = [];

    var labels = [];
    var colors_vt = [];
    var colors_vts = [];
    var colors_vm = [];
    var colors_vb = [];
    var colors_vtr = [];

    for (let i = 0; i < transfers.length; i++) {
        if (i == 0) {
            _vt.push(Number(transfers[i].valueExact))
            _vm.push(Number(transfers[i].valueExact))
            _vts.push(Number(transfers[i].valueExact))
            _vb.push(Number(0))
            _vtr.push(Number(0))
            labels.push(getDate(transfers[i].timestamp));
        }
        else if (transfers[i].timestamp == transfers[i - 1].timestamp) {
            _vt[_vt.length - 1] = _vt[_vt.length - 1] + Number(transfers[i].valueExact)
            if (transfers[i].from == null) {
                _vm[_vm.length - 1] = _vm[_vm.length - 1] + Number(transfers[i].valueExact)

            }
            if (transfers[i].to == null) {
                _vb[_vb.length - 1] = _vb[_vb.length - 1] + Number(transfers[i].valueExact)

            }
            if ((transfers[i].to != null) && (transfers[i].from != null)) { _vtr[_vtr.length - 1] = _vtr[_vtr.length - 1] + Number(transfers[i].valueExact) }
        } else {
            _vt.push(Number(transfers[i].valueExact) + _vt[_vt.length - 1])
            if (transfers[i].from == null) {
                _vm.push(Number(transfers[i].valueExact) + _vm[_vm.length - 1])

            } else {
                _vm.push(Number(_vm[_vm.length - 1]))

            }
            if (transfers[i].to == null) {
                _vb.push(Number(transfers[i].valueExact) + _vb[_vb.length - 1])

            } else {
                _vb.push(Number(_vb[_vb.length - 1]))

            }
            if ((transfers[i].to != null) && (transfers[i].from != null)) { _vtr.push(Number(transfers[i].valueExact) + _vtr[_vtr.length - 1]) } else { _vtr.push(Number(_vtr[_vtr.length - 1])) }
            labels.push(getDate(transfers[i].timestamp))
            _vts.push(Number(_vm[_vm.length - 1] - _vb[_vb.length - 1]))
        }
        colors_vt.push("blue")
        colors_vts.push("gray")
        colors_vm.push("green")
        colors_vb.push("red")
        colors_vtr.push("orange")
    }
    console.log("length vt:", _vt.length)
    console.log("vt:", _vt)
    console.log("length vm:", _vm.length)
    console.log("vm:", _vm)
    console.log("length vb:", _vb.length)
    console.log("vb:", _vb)
    console.log("length vtr:", _vtr.length)
    console.log("vtr:", _vtr)

    const dataset_vt = {
        label: 'Value over time',
        data: _vt,
        backgroundColor: colors_vt,
        borderColor: colors_vt,
        borderWidth: 1
    };
    const dataset_vts = {
        label: 'Total Supply over time',
        data: _vts,
        backgroundColor: colors_vts,
        borderColor: colors_vts,
        borderWidth: 1
    };
    const dataset_vm = {
        label: 'Mints over time',
        data: _vm,
        backgroundColor: colors_vm,
        borderColor: colors_vm,
        borderWidth: 1
    };
    const dataset_vb = {
        label: 'Burns over time',
        data: _vb,
        backgroundColor: colors_vb,
        borderColor: colors_vb,
        borderWidth: 1
    };
    const dataset_vtr = {
        label: 'Transfers over time',
        data: _vtr,
        backgroundColor: colors_vtr,
        borderColor: colors_vtr,
        borderWidth: 1
    };

    console.log(_vt)
    return {
        props: { labels: labels, datasets: [dataset_vt, dataset_vts, dataset_vm, dataset_vb, dataset_vtr] }
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
                height={220}
            />
        </div>
    );
}
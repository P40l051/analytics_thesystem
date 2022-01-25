import dynamicColors from "./dynamiccolors";
import getMintsBurnsTransfers from "./getMintsBurnsTransfers";

export default function orderChartdatadue(tokens) {
    var totmints = [];
    var totburns = [];
    var tottransfers = [];
    var labels = [];
    var colors = [];
    var colorsborder = [];
    for (let i = 0; i < tokens.length; i++) {
        var totdata = getMintsBurnsTransfers(tokens[i].transfers)
        totmints.push(totdata.mints);
        totburns.push(totdata.burns);
        tottransfers.push(totdata.transfers);
        labels.push("Card " + (i + 1));
        var color = dynamicColors(-10);
        colors.push(color[1])
        colorsborder.push(color[0])
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Mints',
                data: totmints,
                borderColor: colors,
                backgroundColor: colorsborder,

            },
            {
                label: 'Burns',
                data: totburns,
                borderColor: colors,
                backgroundColor: colorsborder,
            },
            {
                label: 'Transfers',
                data: tottransfers,
                borderColor: colors,
                backgroundColor: colorsborder,
            }
        ]
    };
    return {
        props: {
            labels: data.labels, datasets: data.datasets, options: { legend: { display: false }, }
        }
    }
}
import dynamicColors from "./dynamiccolors";

export default function orderChartdata(tokens) {
    var totalS = [];
    var labels = [];
    var colors = [];
    var colorsborder = [];
    for (let i = 0; i < tokens.length; i++) {
        totalS.push(tokens[i].totalSupply.valueExact);
        labels.push("Card " + (i + 1));
        var color = dynamicColors(-10);
        colors.push(color[1])
        colorsborder.push(color[0])
    }
    const dataset = {
        label: 'Total Supply', data: totalS, backgroundColor: colors, borderColor: colorsborder, borderWidth: 1
    };
    return {
        props: { labels: labels, datasets: [dataset] }
    }
}
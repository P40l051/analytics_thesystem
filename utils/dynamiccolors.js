export default function dynamicColors(percent) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var R = parseInt(r * (100 + percent) / 100);
    var G = parseInt(g * (100 + percent) / 100);
    var B = parseInt(b * (100 + percent) / 100);
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;
    return ["rgb(" + r + "," + g + "," + b + ")", "rgb(" + R + "," + G + "," + B + ")"];
};
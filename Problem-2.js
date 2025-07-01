function generateSeries(a) {
    const series = [];
    for (let i = 0; i <a; i++) {
        series.push(2*i +1);
    }
    return series;
}
const seriesLength = 3;
console.log(generateSeries(seriesLength)); // output: [1,3,5]
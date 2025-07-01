function generateSeries(a) {
    const series = [];
    let num =1;
    while (num <= a) {
        series.push(num);
        num += 2;
        
    }
    return series;
}
console.log(generateSeries(5));




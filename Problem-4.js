function countMultiples(arr){
    const multiples = {};
    for (let i = 1; i <= 9; i++) {
        multiples[i] =0;
        for (let num of arr) {
            if (num % i === 0){
                multiples[i]++;
            }
        }
    }
    return multiples;
}
const arr = [1,2,4,3,5,7,6,9,8,2,3,5];
console.log(countMultiples(arr));
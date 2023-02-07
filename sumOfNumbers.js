function sumOfNumbers(number) {
    let sum = 0 ;
    for (let i = 1; i <= number; i++) {
        sum = sum +i;
        console.log(i, sum);
    }
    return sum;
}
const mySum = sumOfNumbers(8);
console.log("Result :",mySum);
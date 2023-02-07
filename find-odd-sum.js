function getSumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray (numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element)
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [51, 32, 54, 45, 96, 25, 14];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log("odd Numbers", oddNumbers);
getSumOfArray(myNumbers);
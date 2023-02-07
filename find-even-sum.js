function getSumOfArray (numbers){
    for(let i = 1; i < numbers.length ; i++){
    let sum = 1;
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element,sum);
    }
}
const myNumbers = [5,3,5,45,5,25,54];
getSumOfArray(myNumbers);
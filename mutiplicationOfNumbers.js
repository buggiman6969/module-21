function multiOfNum(number){
    let multiplication = 1;
    for(let i = 9; i >= number; i--){
        multiplication = multiplication * i;
        console.log(i , multiplication);
    }
    return multiplication;
}
const myNumber = multiOfNum (6);
console.log("result :", myNumber);
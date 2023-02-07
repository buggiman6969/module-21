function isOdd (number){
    const chacker = number % 2;
    if (chacker !== 0){
        return true;
    }
    else{
        return false;
    }
}

const myNum = isOdd (548742);
console.log(myNum);
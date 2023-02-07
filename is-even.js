function isEven (number){
    const reminder  = number % 2;
    if (reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const numberchack = isEven (554367);
console.log(numberchack);
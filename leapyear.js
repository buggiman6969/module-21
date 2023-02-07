function leapYear(year){
    calender = year % 4;
    if(calender === 0){
        return "this is leapyear.";
    }
    else{
        return "Sorry, its not leapyear.";
    }
}
const chackYear = leapYear (1987);
console.log(chackYear);
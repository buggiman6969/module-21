// ================================Conveter=======================


function inchToFeet (inches){
    const feet = inches / 12 ;
    return feet;
}

const jonInch = 70;
const jonfeet = inchToFeet(jonInch);
console.log(jonfeet);

// 2nd one practice

function meterToKilometer (meter){
    const kilometer = meter / 1000;
    return kilometer; 
}

const myCampusMeter = 4000;
const myCampusKilometer = meterToKilometer (myCampusMeter);
console.log(myCampusKilometer);

// problem 3 practice

function kilometerToMeter (kilometer) {
    const meter = kilometer * 1000 ;
    return meter;
}

const distanceKilometer = 14; 
const distanceMeter = kilometerToMeter(distanceKilometer);
console.log(distanceMeter,'m');

// problem 4

function centimeterToMeter (centimeter){
    const meter = centimeter / 100;
    return meter;
}

const myHightCm = 178;
const myHightMeter = centimeterToMeter(myHightCm);
console.log("My hight in meter is",myHightMeter,"m");
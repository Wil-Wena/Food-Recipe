'use script';

/* let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;


const calMarkBmi = markMass/markHeight **2;
const calJohnBmi = johnMass/(johnHeight**2);
let markHigherBMI = calMarkBmi>calJohnBmi;

console.log(calJohnBmi,calMarkBmi,markHigherBMI); */

//Template Literals
/* const ageWilson =14
const firstName = 'Wilson'

const printDetails = `I'm ${firstName} and I'm ${ageWilson} years of age.`

console.log(printDetails) */


//Boolean
/* const hasDrivers = true;
const hasGoodVision = true;

console.log(hasDrivers && hasGoodVision); */

/* let scoreDol1 = Number(prompt('Enter dolphin score 1'));
const scoreDol2 = Number(prompt('Enter dolphin score 2'));
const scoreDol3 = Number(prompt('Enter dolphin score 3'));

const scoreKo1 = Number(prompt('Enter Koalas score 1'));
const scoreKo2 = Number(prompt('Enter Koalas score 2'));
const scoreKo3 = Number(prompt('Enter Koalas score 3'));

let averageDolphin = (scoreDol1 + scoreDol2 + scoreDol3) / 3;
let averageKoalas = (scoreKo1 + scoreKo2 + scoreKo3) / 3;

/* if (averageDolphin>averageKoalas) {
    console.log('Dolphins are the winners');
}else{
    console.log('Koalas are the winners');
} */
/* console.log(averageDolphin);
console.log(averageKoalas);

if (averageDolphin > averageKoalas && averageDolphin >= 100) {
    console.log('Dolphins are the winners');
} else if (averageDolphin === averageKoalas && averageDolphin >= 100 && averageKoalas >= 100) {
    console.log('It was a draw');
} else if (averageKoalas > averageDolphin && averageKoalas >= 100) {
    console.log("Koalas are the winners");
} else {
    console.log("No team wins");
}
  */


/* const age = 19;

age>18 ? console.log('What time is it?') : console.log('Fuck off Moron'); */

/* let bill = Numbe(prompt('Enter the bill amount'));
let tip;
(bill >= 50 || bill <= 300) ? tip = 0.15 * bill : tip = 0.20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip} and total value is ${bill + tip}`); */


//Functions

function calMarkBmi(mass, height) {
    const formula = mass* height **2;
    console.log(`Mark is ${mass}kg and ${height} of height. His BMI is ${formula}.`);
    return 0;
}

calMarkBmi(34,1.7)
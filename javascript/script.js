"use script"; /* const dolAverage = calcAverage(44,23,71);

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

/* function calMarkBmi(mass, height) {
    const formula = mass* height **2;
    console.log(`Mark is ${mass}kg and ${height} of height. His BMI is ${formula}.`);
    return 0;
}

calMarkBmi(34,1.7) */

/* const calMarkBmi = function (mass, height) {
    const formula = mass * height ** 2;
    console.log(`Mark is ${mass}kg and ${height} of height. His BMI is ${formula}.`);
    return 0;
}

calMarkBmi(34, 11) */

//Arrow expression
/* const calMarkBmi = (mass, height) => mass * height ** 2;

console.log(calMarkBmi(23,23)); */

//Functions Project

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
 */
// console.log(dolAverage);

// const koalasAverage = calcAverage(65,54,49);
// console.log(koalasAverage);

/* function checkWinner() {
    const dataDol1 = calcAverage(44, 23, 71);
    const dataDol2 = calcAverage(85, 54, 41);
    const dataKo1 = calcAverage(65, 54, 49);
    const dataKo2 = calcAverage(23, 24, 27);


    if (dataDol1 > dataKo1) {
        console.log(`Dolphin win (${dataDol1} vs ${dataKo1}.)`);
    } else if (dataDol1 < dataKo1) {
        console.log(`Koals win (${dataKo1} vs ${dataDol1}.)`);
    }
    if (dataDol2 < dataKo2) {
        console.log(`Koalas win (${dataKo2} vs ${dataDol2}.)`);
    }
    else if (dataDol2 > dataKo2) {
        console.log(`Dophin win (${dataDol2} vs ${dataKo1}.)`);
    }
    if (dataDol1 === dataKo1 || dataDol2 === dataKo2) {
        console.log(`Dophin draw with Koala (${dataDol2} vs ${dataKo1}.)`);
    
    }
}

checkWinner(); */

//Arrays
/* const friends = ['Mike','Wil','Frank','Bro'];

const newLength = friends.push('Willy Wallet');
console.log(newLength)


friends.unshift('Michael')
const m = friends.pop();
console.log(m)

friends.unshift('Sinner')

console.log(friends.indexOf('Bro'));

console.log(friends);

console.log(friends.includes('Frank'))
console.log(friends.includes('Bobby'))
 */

//Array Project

/* function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const m = bill * 0.15
        console.log(`Wilson has a bill of ${bill} and a tip of ${m}`)
        //console.log(m)
        return m;
    } else {
        const m = bill * 0.20
        console.log(`Wilson has a bill of ${bill} and a tip of ${m}`)
        return m;
    }
}

const bills = [125,555,44];
const tips = [calcTip(bills[0])]
const totals = [bills[0] + tips[0]]

/* const billsData = [calcTip(125), calcTip(555), calcTip(44)]

const tipsData = [billsData[0],billsData[1],billsData[billsData.length-1]]
const totals = [billsData[0]+tipsData[0]] */
//console.log(tips, totals) */

//Objects

/* const wilson ={
    firstName: 'Wilson',
    lastName: 'Aballey',
    age: 25,
    friends: ['Kofi','Biggie']
};

console.log(wilson.friends[0])
//const interestIn = prompt("What do you want to know?");

console.log(`${wilson.firstName} has ${wilson.friends.length}, and his bestfriend is ${wilson.friends[0]}`)
 */

//Objects Methods
/* const wilson = {
    firstName: 'Wilson',
    lastName: 'Aballey',
    birthYear: 2000,
    job: 'programmer',
    friends: ['Kofi', 'Biggie'],
    hasDriverLincense: true,
    /* calAge: function () {
        return 2025 - this.birthYear;
    } */
/*  calAge: function () {
     this.age = 2025 - this.birthYear
     return this.age;
 },
 getSummary: function () {
     console.log(`${this.firstName} is a ${this.calAge()} year old ${this.job} and he ${this.hasDriverLincense === true ? 'has a drivers lincense' : 'has no drivers lincense'}
`)
 }

};

wilson.getSummary() */

/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

const wilson = {
    fullName: 'Wilson Aballey',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}
console.log(mark.calcBMI(), wilson.calcBMI());

if (mark.bmi > wilson.bmi) {
    console.log(`Marks weights ${mark.mass} kg and is ${mark.height}m tall 
Wilson weights ${wilson.mass} kg and is ${wilson.height}m tall`)
} else if (wilson.bmi > mark.bmi) {
    console.log(`Wilson weights ${wilson.mass} kg and is ${wilson.height}m tall`)

} else {
    console.log('N/A')
}
 */

//LOOPS
/* for (let rep = 1; rep <= 10; rep += 1) {
    console.log(`${++rep} 🫡🫡🫡🫡`)
} */
/* const wilson = [
    'Wilson',
    'Aballey',
    25,
    ['Kofi', 'Biggie']
] */
/* const types = [];
for (let i = 0; i < wilson.length; i++) {
    console.log(wilson[i]);

    types.push(typeof wilson[i])
}

console.log(types) */

/* 
for (let i = wilson.length - 1; i >= 0; --i) {
    console.log(i, wilson[i])
} */

/* let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !==6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
} */

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   let m = calcTip(bills[i]);
//   tips.push(m);
//   totals.push(m + bills[i]);
// }

// console.log(tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(totals));
// console.log();
// const testData1 = [17, 21, 23];
// const testData2 = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     const m = `...${arr[i]}C in ${i + 1} days`;
//     str += m;
//   }
//   console.log(str);
// };
// printForecast(testData1);
// printForecast(testData2);

const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
function receiveHours(arr) {
  //Total Hours
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  if (sum >= 35) {
    console.log("The person worked full time");
  } else {
    console.log("The person worked part-time");
  }
  //Average Hours
  const averageHours = Math.round(sum / arr.length);
  console.log(averageHours);
  //Day with Highest Hour
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);

  //Number of days worked
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       count++;
  //       console.log(arr[i]);
  //     }
  //   }
  let count = arr.filter((item) => item > 0).length;
  console.log(count);

  return { sum, averageHours, max, count };
}

receiveHours(testData);

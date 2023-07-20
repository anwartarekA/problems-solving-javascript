let mybirth = new Date('2001-11-17');
let date = new Date();
let seconds = (date - mybirth) / 1000; // get seconds
console.log(`${Math.round(seconds)} seconds`);
let minutes = seconds / 60;  // get minutes
console.log(`${Math.round(minutes)} minutes`);
let hours = minutes / 60;   // get hours
console.log(`${Math.round(hours)} hours`);
let days = hours / 24   // get days
console.log(`${Math.round(days)} days`);
let months = days / 30;  // get months
console.log(`${Math.round(months)} months`);
let years = months / 12  // get years
console.log(`${Math.round(years)} years`);
//////////////////////////////////////////
console.log('='.repeat(60));


let date2 = new Date(null);
// let setyears = date2.setFullYear(1980);
// let setseconds = date2.setSeconds(1);
console.log(date2);
///////////////////////////////////////////
console.log('='.repeat(60));
let array = ['January','Febrewary','March','April','Mai','June','July','Augest','September','October','November','December'];
let date3= new Date(2022, 4, 1, 18, 13, 20);
let settime = date3.setMonth(4,0);
console.log(date3);
console.log(`previous Month Is ${array[date3.getMonth()]} And Last Day Is ${date3.getDate()}`)
///////////////////////////////////////////
console.log('='.repeat(60));

let mydate1 =new Date('2001 11 17');
let mydate2 = new Date(2001,10,17);
let currentDate = new Date();
currentDate.setFullYear(2001);
currentDate.setMonth(10,17);
currentDate.setHours(0);
currentDate.setMinutes(0);
currentDate.setSeconds(0);

console.log(mydate1);
console.log(mydate2);
console.log(currentDate);
///////////////////////////////////////////
console.log('='.repeat(60));
let performanceNow = performance.now();
for(let i =1; i<=99999 ; i++)
{
    console.log(i);
}
let endperformance = performance.now();
// "Loop Took 1921 Milliseconds."
console.log(`Loop Took ${(endperformance - performanceNow).toFixed(0)} Milliseconds.`);
////////////////////////////////////////////
console.log('='.repeat(60));
// Write Your Generator Function Here

function* gen()
{
    let firstEle = 14;
    let secondEle = 140;
    let sum = firstEle + secondEle;
    yield firstEle;
    while(true)
    {
       yield sum;
       sum += secondEle += 200;
    }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false }
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
//////////////////////////////////////////
console.log('='.repeat(60));



function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
 function* genAll(){
    yield* Array.from(new Set(genNumbers()));
    yield* Array.from(new Set(genLetters()));
 }
  
  let generator2 = genAll();
  
  console.log(generator2.next()); // {value: 1, done: false}
  console.log(generator2.next()); // {value: 2, done: false}
  console.log(generator2.next()); // {value: 3, done: false}
  console.log(generator2.next()); // {value: 4, done: false}
  console.log(generator2.next()); // {value: 5, done: false}
  console.log(generator2.next()); // {value: "A", done: false}
  console.log(generator2.next()); // {value: "B", done: false}
  console.log(generator2.next()); // {value: "C", done: false}
  console.log(generator2.next()); // {value: "D", done: false}
////////////////////////////////////////////////////
console.log('='.repeat(60));
import calc from "./mod-one.js";
import * as modOne from './mod-one.js';
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));
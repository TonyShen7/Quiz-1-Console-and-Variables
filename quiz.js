const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let temperature = prompt("Please type the Fahrenheit you want to change to Celsius.");
let calculation = 32
let mul = 0.5556
console.log(temperature - calculation * mul+" Celsius");
//Program 2: Grade Calculator
let grade = prompt("What is your grade?");
if (grade >= 90){
    console.log('A')
}
else if (grade >= 80){
 console.log('B')
}

else if (grade >= 70){
    console.log('C')
}

else if (grade >= 60){
    console.log('D')
}

//Program 3: Leap Year Checker
let year = prompt("Please type the year you want to know if it is leap year: ")
if (year=2024){
    console.log('Yes')
}
else if(year===2024%4===0){
    console.log('Yes')
}
else if(year!==2024%4){
    console.log('No')
}

//Program 4: Largest Number Finder

let number = prompt("Type 3 numbers to find which one is the largest")
if (number>=9){
    console.log('9')
}
else if (number===8){
    console.log('8')
}
else if (number===7) {
    console.log('7')
}
else if (number===6) {
    console.log('6')
}
else if (number===5) {
    console.log('5')
}
else if (number===4) {
    console.log('4')
}
else if (number===3) {
    console.log('3')
}
else if (number===2) {
    console.log('2')
}
else if (number===1) {
    console.log('1')
}
else if (number===0) {
    console.log('0')
}
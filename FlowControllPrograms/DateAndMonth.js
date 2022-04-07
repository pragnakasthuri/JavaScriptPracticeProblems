/**
* Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/

const { read } = require("fs");

//Taking input from user

const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Reading inout from user

readl.question("Enter  number from 1 - 12 ", (month) => {
    readl.question("Enter number from 1 - 31: ", (date) => {

//Printing true or false according to number
console.log(month+','+date);
if ( (month >= 3 && date >= 20) || (month <= 6 && date <=20) ) {
    console.log(true)
} else {
    console.log(false)
}
readl.close();
    });
});
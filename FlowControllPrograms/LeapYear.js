/**
 * Leap Year program
 */

 const readline = require("readline");
 const readInput = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 readInput.question("Please enter a Year: ",(year) => {
     console.log(year)
     readInput.close()

        if (year % 4 == 0 && year % 400 == 0) {
            console.log("The entered number is a leap year")        
        } else{
            console.log("The entered number is not a leap year")        
    } 
});
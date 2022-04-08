/**
 * Performing magic number problem.
 */

// Taking the input from user
console.log("Think a number Between 1 to 100");
 /**
  * Initializing the variable
  */
 let min = 0;
 let max = 100;
 /**
  * while loop is continue till min is equal to max
  */
 while (min != max) {
     
     let digit = require("readline").createInterface ({
     input: process.stdin,
     output: process.stdout
 });
    //finding the average
    let avg = (min + max) / 2;      
    inputNumber = parseInt(digit.question("If Number is Less than " + avg + " then put 1 and if greater then put 2 else Enter: "));

    /**
     * finding out the maximum and minimum number.
     */
    if (inputNumber == 1) {
        max = Math.floor((min + max) / 2);
    }
    else if (inputNumber == 2) {
        min = Math.floor((min + max) / 2);
    }
    else {
        min = avg;
        max = avg;
    }
 }
 //Printing the value
 console.log("Magic Number is: " + avg);     
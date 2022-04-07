/**
 * Read a Number and Display the week day (Sunday, Monday,...) using switch case
 */

 const readline = require("readline");
 const readInput = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 readInput.question("Please enter a single digit number: ",(number) => { 

    switch (number) {
        case '0':
          console.log("Sunday")
          break;
        case '1':
          console.log("Monday")
          break;
        case '2':
           console.log("Tuesday")
          break;
        case '3':
          console.log("Wednesday")
          break;
        case '4':
          console.log("Thursday")
          break;
        case '5':
          console.log("Friday")
          break;
        case '6':
          console.log("Saturday")
          break;
        default:
          console.log("Invalid")
      }
      readInput.close()
    });
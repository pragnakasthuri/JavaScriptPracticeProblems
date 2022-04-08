/**
 * Take a range from 0 – 100, find the digits that are repeated twice like 
 * 33, 77,etc and store them in an array
 */

//Taking input from user
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
//Reading inputs of user
readl.question("Enter range of numbers (give space after entering each number): ", (number) => {
    
    //Spliting the input by space(" ") to give to an array
    let numberArray = number.split(" ");

    console.log(numberArray);

    let min = parseInt(numberArray[0]);

    let max = parseInt(numberArray[1]);

    console.log("Entered minimum number of your range : " + min);

    console.log("Entered maximum number of your range : " + max);

    //Created a new Array
    let repeatedNumInRange = new Array();

    let counter = 0;

    //Checking for divisibility with 11
    while (min > 0 && min < max) {
        let check = ( min % 11 );
            if (check == 0) {
                repeatedNumInRange[counter++] = min;
                (min++);
            } else {
                (min++);
            }
    }
        
    console.log("[" + repeatedNumInRange + "]");

    readl.close();
});
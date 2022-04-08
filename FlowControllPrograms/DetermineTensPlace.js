/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 */

//Taking input from user
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Reading input from user
readl.question("Enter numbers like 1,10,100,1000......100000000: ", (number) => {

    //Printing the output according to the number
    if (number == 1){
        console.log("Units");
    } else if (number == 10) {
        console.log("Ten's");
    } else if (number == 100) {
        console.log("Hundred's");
    } else if (number == 1000) {
        console.log("Thousand's");
    }else if (number == 10000) {
        console.log("Ten Thousand's");
    }else if (number == 100000){
        console.log("Lakh's");
    }else if (number == 1000000){
        console.log("Ten Lakh's");
    }else if (number == 10000000){
        console.log("Crore's");
    } else if (number == 100000000){
        console.log("Ten Crore's");
    } else {
        console.log("Invalid Number");
    }

    readl.close();
});
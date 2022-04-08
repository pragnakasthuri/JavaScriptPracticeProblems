/**
 * Write a Program to show Sum of three Integer adds to ZERO
 */

 const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  
  readl.question("Enter 3 numbers (give space after each number): ", (num) => {

    //Spliting the input by space(" ") to give to an array
    let numArray = num.split(" ")

    let add = 0

    //Priting an Array
    console.log("Your array is :[" + numArray + "]")
    
    //Loop for adding all elements of array
    for (let i = 0; i < 3; i++) {
        add = (parseInt(numArray[i]) + add)
    }
    
    //Printing addition of array
    console.log("Addition of three numbers: " + add)
    
    if (add == 0) {
        console.log("Sum of the integer array is 0")
    }else {
        console.log("Sum of the integer array is not 0")
    }
    readl.close()
  })
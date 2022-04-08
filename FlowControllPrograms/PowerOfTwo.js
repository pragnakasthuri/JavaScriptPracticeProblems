/**
 * This code is wrriten to write a program that takes a command-line 
 * argument n and prints a table of the powers of 2 that are less than or equal 
 * to 2^n till 256 is reached..
 */

/**
 * including input output library.
 */
 const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question("Enter the number : ",num => {      
    console.log(`The number is:  ${num}`)             
    number = parseInt(num)
    readline.close()                             
console.log("Limit Of Table is 256")
const RESULT = 256;
let table = 0;
console.log("Table Of Power Of Two")
let count = 1
/**
 * loop continue till count is equal to the number
 */
while (count != number) {
    if (table != RESULT) {
        table = 2 ** count;
        count++
        console.log(table)
    } else {
        break;
    }
}
})
/**
 * Extend the Prime Factorization Program to store all the Prime Factors of a
 * number n into an array and finally display the output.
 */

//Taking input from command line
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Reading input from command line
readl.question("Enter any number: ", (n) => {
    
    // created an array
    let primeFactorsArr = new Array();

    let counter = 0;

    let isPrime;

    //loop to check for prime factors
    for (let c = 2; c <= n; c++) {
        for (let d = 2; d < c; d++) {
            if (( c % d ) == 0 ) {
                isPrime = 0;
                break;
            } else{
                isPrime = 1;
            }
        }
        if (isPrime == 1) {
            if (( n % c ) == 0 ) {
                primeFactorsArr[counter++] = c;
            }
        }
    }

    //Printing a array of prime factors
    console.log("[" + primeFactorsArr + "]");
    readl.close();
  });
/*
* Creating maxNumber function to calculate the maximum number for the 5 random generated numbers
*/
function maxNumber() {
    const num1 = Math.floor(Math.random()*(999-100+1)+100);
    const num2 = Math.floor(Math.random()*(999-100+1)+100);
    const num3 = Math.floor(Math.random()*(999-100+1)+100);
    const num4 = Math.floor(Math.random()*(999-100+1)+100);
    const num5 = Math.floor(Math.random()*(999-100+1)+100);

    console.log(num1+','+num2+','+num3+','+num4+','+num5)

    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        console.log("Max is : "+num1);
    } else if (num2 > num3 && num2 > num4 && num2 > num5 && num2 > num1) {
        console.log("Max is : "+num2);
    } else if (num3 > num4 && num3 > num5 && num3 > num1 && num2 > num2) {
        console.log("Max is : "+num3);
    } else if (num4 > num5 && num4 > num1 && num4 > num2 && num4 > num3) {
        console.log("Max is : "+num4);
    } else {
        console.log("Max is : "+num5);
    }
}

maxNumber();
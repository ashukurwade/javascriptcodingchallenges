// write a function which takes an array of number and
// returns all positive number in an array.

function getPositiveNumber(numbers) {
    let positiveNumbers = [];
    for (let i=0; i<numbers.length; i++) {
        if(numbers[i]>0) {
            positiveNumbers.push(numbers[i]);    
        }
    }
    return positiveNumbers;
}

console.log(getPositiveNumber([1,2,4,6,7,0,-9,-8,-7]));

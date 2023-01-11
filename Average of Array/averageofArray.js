// write a function which takes a array of number
// calculates the average of number and return it
// [1,2,3,4] 10/4

function average(numbers){
    let sum = 0;
    for (let i=0; i<numbers.lenght; i++ ) {
        sum += numbers[i];

    }
    const avg =sum / numbers.lenght;
    return avg;

}

console.log(average([1,2,3,4, 5]));
// write a function which takes a list of numbers as 
// inputs and returns it's sum

// user spread operator to take input (...)

function sum(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        
        // console.log(numbers[i]);
        // total = total + number[i];

         total += numbers[i];
    }
    return total;
}

console.log(sum(1,2,3,4,5));
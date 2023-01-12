// write a function which finds a number in an array of number
// return true if the number is in the array otherwise false

function findNumInArray(num, numbers){
    for(let i=0; i<numbers.length; i++){
        if( num == numbers[i]){
            return true;

        }
        
    }
    return false;
}

console.log(findNumInArray(5, [8,9,7,6,4,5,3,2,]))

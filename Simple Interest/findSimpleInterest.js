console.log("Simple Interest");

// write a function which takes principal, rate of
// interest and time as input and return the simple
// interest

// hint: ( principal * rate of interest * time) / 100

function simpleInterest (p,r,t){
    const simpleInterest = (p*r*t) / 100;
    return simpleInterest;

}
console.log(simpleInterest(10000, 8, 1));

"use strict";
// let greet : Function;
let greet;
// example 1
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};

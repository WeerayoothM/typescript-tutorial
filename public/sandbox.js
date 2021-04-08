"use strict";
// let greet : Function;
var greet;
// example 1
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};

// let greet : Function;

let greet: (a: string, b: string) => void;

// example 1
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let greet: Function;

greet = () => {
  console.log("hello, again");
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

console.log(add(5, 10, 20));

const minus = (a: string, b: string): string => {
  return a + b;
};

let result = minus("10", "7");
result = "10";

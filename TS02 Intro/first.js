"use strict";
console.log("hello Typescript");
const numbers = [0, 1, 2, 3, 4];
const gt2 = numbers.filter((number) => number > 2);
console.log(gt2);
const even = numbers.filter((number) => number % 2 == 0);
console.log(even);

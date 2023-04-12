// ------------------------------- Immediately invokable function expressions--------------------------------

var greet = function (name) {
  console.log("Hello " + name);
};

greet("Tom");

var greeting = (function (name) {
  console.log("Hello " + name);
})("smith");

console.log(greeting);

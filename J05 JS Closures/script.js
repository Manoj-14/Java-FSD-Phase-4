function greet(greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
}

var sayhello = greet("hello");
sayhello("Tony");

greet("Hii")("Torry");

//  -------------- Application of closure ----------------------------

function sayHiiLater() {
  var greeting = "Hii";
  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiiLater();

//------------------------ execution context-----------------------

// function a() {
//   console.log("from a");
// }

// var b = "from b";

// console.log(b);
// a();

// function b() {
//   var x;
//   console.log(x);
// }

// function a() {
//   var x = 2;
//   console.log(x);
//   b();
// }

// var x = 1;
// console.log(x);

// a();
// console.log(x);

//-------------------------- scope chain ------------------------

// function b() {
//     console.log(x);
// }

// function a() {
//     var x = 2;
//     b();
// }

// var x = 1;
// a(); // output is 1 because b will access the outer environment

// function a() {
//   var x = 2;
//   function b() {
//     console.log(x);
//   }
//   b();
// }

// var x = 1;
// a(); // output is 2 because b access the var in aout env of a;

function a() {
  function b() {
    console.log(x);
  }
  b();
}

var x = 1;
a(); // output is 1 because a's outer enev points to global outer env hence it is one

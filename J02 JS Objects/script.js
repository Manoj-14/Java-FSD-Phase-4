// ----------------------Objects -----------------------------//

student = new Object();

student.firstname = "Manoj";
student.usn = "4VV19IS045";

console.log(student);

// ----------------------Using Objects litrals-----------------------------//

person = {
  firstname: "Manoj",
  lastname: "M",
  age: 21,
};
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);

person.address = {
  city: "Mysore",
  state: "karnataka",
};

// console.log(person.address);

// console.log(person.address.hasOwnProperty(person));

const greet = (person) => {
  console.log("Hello " + person.firstname);
};

greet(person);

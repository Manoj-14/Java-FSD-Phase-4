const person = {
  name: "Manoj",
  age: 5,
};

const { name, age } = person;

console.log(name, age);

function nameMe(name) {
  return {
    [name.toLowerCase()]: {
      message: `My name is ${name}`,
    },
  };
}
console.log(nameMe("Manoj M"));

//-----------------Arrow Functions -----------------------------
//this - legsically boundded

const num = [0, 1, 2, 3];

num.map((nums) => {
  console.log(nums);
});

const quotient = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  results: [],
  divideFn: function (divisor) {
    let that = this;
    return this.numbers.map((divident) => {
      // legsically buunded
      if (divident % divisor === 0) {
        return this.results.push(divident);
      }
    });
  },
};

quotient.divideFn(3);
console.log(quotient.results);

const greet = (name, age) => ({
  name,
  age,
});

console.log(greet("manoj", 21));

// ----------------- ... syntex -------------------

function x(...numbers) {
  console.log(numbers);
}

x(1, 2, 3); // give lists

//----------------------------Template literls ----------------------------

const name1 = "Manoj";
console.log(`Hello ${name1}`);

// ---------------------------Clases---------------------------

class Car {
  constructor(make, color, speed) {
    this.make = make;
    this.color = color;
    this.speed = speed;
  }

  getMaxSpped() {
    return `Max spaaed is ${this.speed} km/h`;
  }
}

class Truck extends Car {
  getMaxSpped() {
    return super.getMaxSpped();
  }

  getMake() {
    return `This truck is a ${this.make}`;
  }
}

const car = new Car("BMW", "Black", 250);
const truck = new Truck("MAN", "Black", 80);

console.log(truck.getMaxSpped());
console.log(truck.getMake());

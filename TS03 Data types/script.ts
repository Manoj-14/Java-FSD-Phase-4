// Boolean
const admin: boolean = true;

// Number
const age: number = 33;
const hexa: number = 0xa00f;
const bin: number = 0b1101;

const x = 1;

// String

const firstname: String = "Manoj M";
const lastname = "M";

// Example

let welcome: string;

if (admin) {
  welcome = `Hello admin`;
} else {
  welcome = `Hello ${firstname} ${lastname}`;
}
console.log(welcome);

// ----------Arrays-----------
const num = [1, 2, 3, 4, 5];
num.push(9);

const num2: number[] = [3, 4, 5, 1, 2, 4];

const strs: String[] = ["TOm", "Jerry"];
strs.push("Tina");

const num3: Array<number> = [0, 1];

const mixed: (string | number)[] = [1, 2, "M", "A"];

const mixed2: Array<number | string> = [1, 2, "M", "A"];

const mixed3 = [1, 2, "M", "A"];

// --------------tuples-----------------

let mix: [string, number];
mix = ["John", 35];
console.log(mix[0]); //String

// --------------Enum-------------------
enum cards {
  Hearts = 1,
  Diamond,
  Spades,
  Clubs,
}

let myCard: cards = cards.Clubs;

let cardName: string = cards[2];

// --------------- Any------------------------

let anyOne: any = "4";
let any2: any[] = [1, "M", false];

// ---------------Never---------------------

function error(): never {
  throw new Error();
}

function infinite(): never {
  while (true) {}
}

// -----------------functions----------------------

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// -----------------type-----------------------

type User = {
  name: string;
  age: number;
};

const myUser: User = {
  name: "Manoj",
  age: 21,
};

//------------------type assertion--------------------

const user1: User = { name: "Manoj", age: 32 };

const user2 = {};

(<User>user2).age = 31;

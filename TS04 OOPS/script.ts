// -----------------------------interfaces ------------------------------
interface IUser {
  name: string;
  readonly age: number;
  address?: string; //optional
}

let myUser: IUser = {
  name: "Manoj",
  age: 21,
  address: "",
};

// myUser.age = 21; not alloed because it is readonly

interface IGuest {
  (name: string, language: string): string; //function of parameters name and language and returns string (Constructor)
}

let hello: IGuest;

hello = function (n: string, lang: string) {
  if ((lang = "en")) {
    return `hello ${n}`;
  } else {
    return `hola ${n}`;
  }
};

console.log(hello("Manoj", "en"));

// ------------------Type v/s interfaces -------------------------------------

// type User = {
//   name: string;
//   age: number;
// };

interface User {
  name: string;
  age: number;
}

interface User {
  address?: string;
}

let userX: User = {
  //----- ts merges the to interface with same name but not type not
  name: "Manoj",
  age: 21,
  address: "Mysore",
};
// interface extedns but type not

// -------------------using extends key word -----------------
interface ECHero extends User {
  superPower: string;
}

let regUser: IUser = {
  name: "Manoj",
  age: 21,
};

let hero: ECHero = {
  name: "Manoj",
  age: 21,
  superPower: "",
};

// --------Indexing----------------

interface Man {
  name: string;
  readonly age: number;
  address?: string;
  [property: string]: any; // the implementation can have any othe rproperties
}

let man1: Man = {
  name: "Tom",
  age: 30,
  dob: "14/08/1990",
  x: 1,
};

//  ----- functions with optional parameters

function product(name: string, lang: string = "en", disc?: string): string {
  return `${name} ${lang} ${disc}`;
}

console.log(product("lap", "en", "Dic"));

// ------------------classes---------------------------
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello ${this.name}`;
  }
}

let myperson = new Person("Jerry");
console.log(myperson.greet());

class Hero extends Person {
  superPowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addPower(power: string): void {
    this.superPowers.push(power);
  }

  getPower(): string[] {
    return this.superPowers;
  }
}

let hero1 = new Hero("Avtar");
hero1.addPower("Water");
console.log(hero1.getPower());

// ----------------- Access Modeifiers-----------------------
class Person1 {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  protected greet(): string {
    return `Hello ${this.name}`;
  }
}
// -------------clas and interfeac------------------

interface UPerson {
  name: string;
}

class Cperson implements UPerson {
  name: string;
  constructor(nam: string) {
    this.name = nam;
  }
}
//------------------------------abstruct class---------------------------
abstract class AHuman {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract greet(): void;
}

// let abimpl = new AHuman(); // cannot create a insatance of abstract class

class APerson extends AHuman {
  constructor(name: string, age: number) {
    super(name, age);
  }
  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}

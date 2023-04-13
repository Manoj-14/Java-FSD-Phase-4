import EPerson from "./EPerson";
export default abstract class EHuman implements EPerson {
  age: number;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract showAge(): number;
}

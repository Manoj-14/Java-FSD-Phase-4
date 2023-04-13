import EHuman from "./EHuman";
export default class CPerson extends EHuman {
  constructor(name: string) {
    super(name);
  }
  showAge(): number {
    return this.age;
  }
}

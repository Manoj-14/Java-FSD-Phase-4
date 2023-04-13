import CPerson from "./CPerson";
import EHeroo from "./EHero";

export default class ECHero extends CPerson implements EHeroo {
  superPowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addSuperPower(power: string): void {
    this.superPowers.push(power);
  }
  listSuperPower(): String[] {
    return this.superPowers;
  }
}

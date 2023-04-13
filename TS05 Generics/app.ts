function picker<T>(args: T[]): T {
  const randomIndex = Math.floor(Math.random() * args.length);
  return args[randomIndex];
}

const suits = ["diamonds", "clubs", "hearts", "spades"];
const numbers = [...Array(13).keys()];
const pickNumber: number = picker(numbers);
const pickSuit: string = picker(suits);
console.log(pickNumber);
console.log(pickSuit);

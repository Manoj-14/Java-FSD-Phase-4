function* Favourites() {
  var pizza = yield "What is your fav pizza?";
  var game = yield "What is your fav game?";
  var movie = yield "What is your fav movie?";
}

var q = Favourites();
let x;

console.log(q.next());
console.log(q.next());
console.log(q.next());

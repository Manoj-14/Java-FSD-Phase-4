console.log(this);

//  ---------------- function statement --------------------------
function x() {
  // console.log(this);
  return this;
}

x();

//  ---------------- function expression --------------------------
var y = function () {
  // console.log(this);
  return this;
};

y();

console.log(x() == y());

// ----------------- object -----------------------------

var z = {
  name: "new Object",
  log: function () {
    // console.log(this);
    return this;
  },
};

console.log((x() == y()) == z.log());

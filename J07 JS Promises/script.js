function divide(n1, n2) {
  var promise = new Promise(function (resolve, reject) {
    if (n2 != 0) {
      resolve(n1 / n2);
    } else {
      reject("No zeroes allowred");
    }
  });

  return promise;
}

divide(1, 4)
  .then(
    function (result) {
      console.log(result);
      return divide(1, 0);
    },
    function (err) {
      console.log(err);
    }
  )
  .then(
    function (res) {
      console.log(res);
    },
    function (error) {
      console.log(error);
    }
  );

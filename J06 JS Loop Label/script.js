outsideTheLoop: for (let z = 0; z < 100; z++) {
  // if (i == 80) {
  //   break outsideTheLoop;
  // }
  for (let j = 0; j < 5; j++) {
    if (z == 10) {
      break outsideTheLoop;
    }
    console.log(z + "->" + j);
  }
  console.log(z);
}

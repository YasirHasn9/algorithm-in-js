// // It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
// // Each person wears a sticker indicating their initial position in the queue from  to .
// // Any person can bribe the person directly in front of them to swap positions,
// // but they still wear their original sticker. One person can bribe at most two others.
// // Determine the minimum number of bribes that took place to get to a given queue order.
// // Print the number of bribes, or, if anyone has bribed more than two people,

// function minimumBribe(q) {
//   // i would choose the first ele and compare it to the next
//   // each time we find it its bigger than the next
//   // than increment the number of bribe
//   // and also would choose another temp vat to hold the value
//   // for number of bribes as whole
//   let bribe = 0,
//     curIndex = 0,
//     temp = 0;
//   for (let i = 1; i < q.length; i++) {
//     let cur = q[curIndex];
//     if (cur > q[i]) {
//       bribe++;
//       temp++;
//       if (bribe > 2) return "Too chaotic";
//     }
//     if (cur < q[i]) {
//       curIndex = i;
//       bribe = 0;
//     }
//   }
//   bribe = temp;
//   return bribe;
// }

// console.log(minimumBribe([1,2,3, 7, 8, 6]));

function SeriesSum(n) {
  if (n === 0 || n === 1) {
    return String(n.toFixed(2));
  } else {
    let sum = 1;
    let count = 1;
    for (let i = 1; i < n; i++) {
      count += 3;
      let frac = "1/" + count.toString().split("/");
      let split = frac.split("/");
      let result = parseInt(split[0]) / parseInt(split[1]);

      console.log("frac", frac, "split", split, "result", result);
      sum += Number(result);
    }
    return sum.toFixed(2);
  }
}

function SeriesSumO(n) {
  let sum = 0;
  for (let i = 1; i < n * 3; i += 3) {
    sum += 1 / i;
  }
  return sum.toFixed(2);
}
console.log(SeriesSumO(4));

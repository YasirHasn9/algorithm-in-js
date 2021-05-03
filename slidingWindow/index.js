// Sliding window is the process of creating a window.
// the window is either an array or number form one position to another
// on certain condition
// the window is either increase or closes and new window is opening

// function findLongestSubStr(str) {
//   let max = 0;
//   let i = 0;
//   let res = "";
//   let arr = str.split("");
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       i = j;
//     }
//   }
// }
// findLongestSubStr("hellothere");
// [h   e    l   l   o    t   h    e     r    e]
//  i        j

// let str = "hellothere";
// console.log(str.slice(3, 9));

function findSubArrays(arr, num) {
  // brute-force
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(findSubArrays([2, 6, 9, 2, 1, 8, 5, 6], 3));
// console.log("hello");

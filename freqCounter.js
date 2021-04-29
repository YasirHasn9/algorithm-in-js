// write a function that accepts 2 arrays of number. The function should return 'true'
// if every value in the first array has its corresponding value in the second array.

// for example
let arr1 = [1, 2, 3];
let arr2 = [9, 4, 1];
// brute-force
// loop over the first array
//    double each item
//    check if the doubled number is not exited in the second array
//    return false
//  return true
function countFreq(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let num = Math.sqrt(arr2[i]);
    if (arr1.indexOf(num) < 0) {
      return false;
    }
  }
  return true;
}
console.log(countFreq(arr1, arr2));

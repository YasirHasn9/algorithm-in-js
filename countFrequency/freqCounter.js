// write a function that accepts 2 arrays of number. The function should return 'true'
// if every value in the first array has its corresponding value in the second array.

// for example
let arr1 = [1, 2, 3, 2];
let arr2 = [9, 4, 1, 4];
// brute-force
// loop over the first array
//    double each item
//    check if the doubled number is not exited in the second array
//    return false
//  return true
function countFreq_1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr2.length; i++) {
    let num = Math.sqrt(arr2[i]);
    if (arr1.indexOf(num) < 0) {
      return false;
    }
  }
  return true;
}

function countFreq_2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let found = arr2.indexOf(arr1[i] ** 2);
    if (found < 0) {
      return false;
    }
    arr2.splice(found, 1);
  }
  return true;
}
// console.log(countFreq_2(arr1, arr2));

function countFreq_3(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (arr1[i] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    obj2[Math.sqrt(arr2[i])] = (arr2[i] || 0) + 1;
  }
  for (let key in obj1) {
    if (!obj2[key]) return false;
  }
  return true;
}

console.log(countFreq_3(arr1, arr2));
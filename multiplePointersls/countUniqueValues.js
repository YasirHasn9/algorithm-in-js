// write a function that takes any kind of data and return a number of unique values

function countUniqueValue_0(data) {
  // create an object
  let res = {};
  // loop over the data
  for (let item of data) {
    // add each item as a key
    res[item] = (res[item] || 0) + 1;
  }
  // return the length of the keys in the object
  return Object.keys(res).length;
}

// console.log(countUniqueValue_0("yasirrrr"));

// with numbers
function countUniqueValue_1(arr) {
  if (arr.length < 1) return 0;
  // create 2 pointer
  let i = 0;
  // loop over the array
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValue_1([]));
// [1,   1,   2,    3,   3  ,4]
//                  i,             j
// [1,   2,   3,     4]

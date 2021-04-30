// write a function that accepts an arrays of numbers
// the array should return the first paris that the sum of them are zero
// or undefined if they are not
// brute-force
function sumZero_0(arr) {
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // hold a cur number
    let cur = arr[i];
    // iterate over the array again
    for (let j = i + 1; j < arr.length; j++) {
      // compare the cur number to another but start from the second num
      if (cur + arr[j] === 0) {
        //   return pair
        return [cur, arr[j]];
      }
    }
  }
  return undefined;
}

// console.log(sumZero_0([-3, -2, -1, 3]));
// optimized code

function sumZero_1(arr) {
  // sort the array
  let sorted = arr.sort((a, b) => a - b);
  // create 2 pointers: left and right
  //   left start at index 0, right at the end
  let left = 0,
    right = arr.length - 1;
  //   iterate over the arr
  while (left < right) {
    // get the sum of the 2 number at the left and right
    let sum = arr[left] + arr[right];
    // compare sum to zero
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // if sum > 0 , means the one on the right is bagger,
    //  we need to decrease the right index by 1
    if (sum > 0) {
      right--;
    }
    if (sum < 0) {
      left++;
    }
  }
  return undefined;
  // if sum < 0, means the one on the left is small we need increase left by 1
}
console.log(sumZero_1([-3, -2, -1, 1]));

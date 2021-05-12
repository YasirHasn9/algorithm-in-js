// Given two integers N and K, find the Kth permutation sequence of numbers from 1 to N without using STL function.
// Note: Assume that the inputs are such that Kth permutation of N number is always possible.

function findSmallestPermutation(s) {
  let len = s.length;
  s = s.split("");

  // sort the string
  s = s.sort();

  // check for leading zero
  // in string if there are
  // any leading zeroes,
  // swap the first zero with
  // first non-zero number
  let i = 0;
  while (s[i] == "0") {
    console.log(s[i]);
    console.log(i);
    i++;
  }

  let tmp = s[0];
  s[0] = s[i];
  s[i] = tmp;
  s = s.join("");
  return s;
}

// Driver Code

// take number
// input in string
let s = "5468001";
console.log(findSmallestPermutation(s));




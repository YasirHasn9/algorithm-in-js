/*
There is a string,s , of lowercase English letters that is repeated infinitely many times. 
Given an integer ,n, find and print the number of letter a's in the 
first letters of the infinite string.
*/

// function repeatedString(s, n) {
//   let numOfAInS = 0,
//     remainingOfCharInS = 0,
//     reminder = n % s.length;

//   for (let i = 0; i < s.length; i++) {
//     if (s.charAt(i) == "a") {
//       ++numOfAInS;

//       if (i < reminder) ++remainingOfCharInS;
//     }
//   }

//   return ((n - reminder) / s.length) * numOfAInS + remainingOfCharInS;
// }
// // console.log(repeatedString("aba", 10));
// console.log(10 % 7);

// 1. I need to know how many complete string we have
// 2. count the a in each complete
// 3. count the a in the rest
// if we have s = "aba" , n = 14 --> aba/aba/aba/aba/ab
// 4. create a function that count the a in a string
// 5. (4 * 2) + + 1 == 9
function countA(s) {
  let a = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      a++;
    }
  }
  return a;
}
function repeatedString(s, n) {
  let completeS = Math.floor(n / s.length);
  let restOfS = n % s.length;
  let rest = s.slice(0, restOfS);
  return completeS * countA(s) + countA(rest);
}
console.log(repeatedString("aba", 10));


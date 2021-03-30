let arr1 = [7, 15, 10, 2, 8, 1, 7, 0];
let arr2 = [0, 0, 0];

const foo = [...arr1]
  .filter((a) => a % 2 === 1)
  //   if we don't pass a cb function, it convert the values into string
  .sort((a, b) => a - b)
  .slice(0, 2)
  .map((a) => a + 5)
  .some((a) => a > 15);

const bar =
  arr1.concat(arr2) === [...arr1, ...arr2] ||
  arr1.reduce((a, b) => a * b, 1) === arr2.reduce((a, b) => a + b, 1);

console.log(bar);
console.log(foo);

// let t = [1, 2, 3];
// let r = [1, 2, 3];
// console.log(t === r);

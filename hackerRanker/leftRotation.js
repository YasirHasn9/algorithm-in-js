// A left rotation operation on an array shifts each of the array's elements
// unit to the left. For example, if  left rotations are performed on array ,
// then the array would become . Note that the lowest index item moves to the highest
// index in a rotation. This is called a circular array. Given an array  of
// integers and a number, , perform  left rotations on the array.
//  Return the updated array to be printed as a single line of space-separated integers.
function leftRotation(arr, d) {
  for (let i = 0; i < d; i++) {
    let itemToMove = arr.shift();
    arr.push(itemToMove);
  }
  return arr;
}
console.log(leftRotation([1, 2, 3, 4, 5], 3));

// it similar to the bubble sort but instead of first placing large values
// into sorted position, it places small values into sorted position.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }
  return arr;
}
// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort([34, 22, 10, 19, 17]));

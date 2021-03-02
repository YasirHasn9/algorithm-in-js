// SORTING BUBBLE
// It is the process to compare each 2 items in an array and if one
// of them is larger then the other then we swap it
// on first loop we will guarantee the larger item will be on the end

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function betterBubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
} // o(n^2)

function bubbleEs6(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // we can optimized our solution by adding a bool var
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    // we set it to true because we assume we have no swap
    // this is so useful when we have almost sorted array
    // because with bubble sorting checking will continue to the end of
    // array
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
} // almost O(n)

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(betterBubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleEs6([8, 1, 2, 3, 4]));

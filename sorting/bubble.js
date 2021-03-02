// SORTING BUBBLE
// It is the process to compare each 2 items in an array and if one
// of them is larger then the other then we swap it
// on first loop we will guarantee the larger item will be on the end

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = arr[j];
      }
    }
  }
  return arr;
}
console.log(betterBubbleSort([3, 2, 22, 1, 10, 0]));

// insertion is the process of sorting arrays, insertion is like working with arrays
// one is sorted already because it only contains one element and the other
// is not sorted. So, we pick one element from the unsorted part and compare
// it to the one in the sorted part.
// This is why, we started from the second element in the array

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (arr[j] > cur && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr);
    }
    arr[j + 1] = cur;
  }

  return arr;
}

// console.log(insertion([2, 1, 9, 76, 4]));
console.log(insertion([1, 2, 3, 4, -1]));
// [76, 4] ,we compare these elements, since they are in the wrong position
// we copy their values to move them
// we saved the 4 in temp var
// temp = arr[#index] = 4
// now, arr = [76, 76]

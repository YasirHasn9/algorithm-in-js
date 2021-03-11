// it similar to the bubble sort but instead of first placing large values
// into sorted position, it places small values into sorted position.

function selectionSort(arr) {
  // loo over the array
  for(let i = 0 ; i < arr.length ; i++){
    // assume the first element is the smallest ele
    let low = i 
    // loop agin over the array but start from the second one
    for(let j = i + 1 ; j < arr.length; j++){
      // check if there is a smallest item in the array than the assumed one
      if(arr[low] > arr[j]){
        // if so , do the following
        let temp = arr[j]
        arr[j] = arr[low]
        arr[low] = temp
      }
    }
  }
  return arr;
}
// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(selectionSort([34, 22, 10, 19, 17]));


// assume the first ele is the smallest one 
// loop again from the second item 
// check the if there is a smaller ele than the assumed one
const swap = (arr,idx1,idx2) => [ arr[idx1] , arr[idx2] ] = [arr[idx2] , arr[idx1] ]
function sele(arr){
  let idx = 0 
  for(let i = 0 ; i < arr.length ; i++){
    for(let j =  i + 1 ; j < arr.length ; j++){

      if(arr[idx] > arr[j]){
        // console.log(idx, j)
        // let temp = arr[idx]
        // arr[idx] = arr[j]
        // arr[j] = temp
        swap(arr, idx, j)
      }
    }
    idx++
  }
  return arr
}

console.log(sele([ 34, 22,0, 10, 19, 17]));
// Binary search is a form of faster search 
// it works only with sorted data 
// Rather than  eliminate one element at a time , we can eliminate haf
// of the remaining data at a time 


// how does it work
// since, it is sorted, then we are gonna try form the middle point 
// check the middle point, if target = middle point 
// great then we return i
// if not 
// check the middle point if it is > target 
// then cut all the element that are > target 
// start again and choose the middle point for the rest of element
// repeat the process




function binarySearch(arr , value){
    // add whatever parameters you deem necessary - good luck!
    let start = 0 
    let end = arr.length - 1
    while (start <= end ){
        let mid = Math.floor((end + start) / 2)
        if(arr[mid] === value) return mid 
        if(arr[mid] > value) end = mid - 1
        if(arr[mid] < value) start = mid + 1
    }

    return - 1
  }

let numbers = [1,2,3,4,5,6,7]
let t = 77
console.log(binarySearch(numbers,t))

// Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // Loop terminates when: left = right + 1
    while (left <= right) {
      let pivot = left + Math.floor((right - left) / 2);
      if (nums[pivot] === target) {
        return pivot;
      } else if (nums[pivot] < target) {
        left = pivot + 1;
      } else if (nums[pivot] > target) {
        right = pivot - 1;
      }
    }
  
    // The target number is larger than the numers in the list, append it
    if (left >= nums.length) return right + 1;
    // Didn't find the target number
    // Should replace at the left border position, because it's at the higher value position
    return left;
  
    // Time complexity O(logn)
    // Space complexity O(1)
  };
  let nums = [1, 2, 3, 5];
  let t = 10;
  console.log(searchInsert(nums, t));
  
  
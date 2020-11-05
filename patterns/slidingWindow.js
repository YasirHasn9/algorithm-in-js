// Sliding a window 
// this pattern involves creating a window ?
// what is window ?
//  good question, window can either be an array or number from one position to another
// note
// this window on certain condition either increases or closes and created a new window

// okay but where i can use this pattern?
// also it is a good question , it very useful for keeping the track of a subset of data from array/string 



// problem 
// write a function called  maxSubarraySum, accepts an array of integers and a number called n
// return the max sum of n consecutive elements in the array




// this is a naive solution
// @inputs  arr[numbers] , and n numbers
function maxSubarraySum_test(arr, n){
  // we check if the number is greater than the length of array 
  // in this case we across the length of it
  if(n > arr.length) return null

  // because we have no idea what number in the array 
  // they are maybe positive or negative 
  let max = -Infinity // this will calculate the max of the -numbers
  // iterate over the array
  for(let i = 0 ; i < arr.length - num + 1; i++){
    // arr.length - num + 1 this is kinda tricky because what if we want to add 3 consecutive elements in array
    // [1,2,3,4,4,5]
    // 1. 1 + 2 + 3 = [1,2,3]
    // 2. 2 + 3 + 4 = [2,3,4]
    // 3. 3 + 4 + 4 = [3,4,4]
    // 4. 4 + 4 + 5 = [4,4,5] stop because other wise will exceed the length of the array
    // arr.length = 6 , num 3
    // 6 - 3 + 1 = 4
    // we want the loop to stopped at i = 3 ; i < length
    let temp = 0 // this interchangeable var
    for(let j = 0 ; j < num ; j++){
      // on each iteration this loop will happen
      temp += arr[i+j]
    }
    // max will hold the pervious calculation 
    if(temp > max){
      max = temp
    }

  }
  return max
}


// better solution 
function maxSubarraySum(arr, num){
  // initialize 2 vars that we need to compare at the end to get the result
  // one gonna hold the sum of the first num element in the array 
  // and the other just a temp hold the value of it to compared to other num element
  let maxSum = 0
  let tempSum = 0
  // first loop going to be just for the num
  for(let i = 0 ; i < num ; i++){
    maxSum += arr[i]
  }
  // now lets say this is the array [20,1,2,10,4,5,6] and num = 3
  // maxSum = 20 + 1 + 2 = 23
  
  // to compare we need the maxSum be held by the tempSum
  tempSum = maxSum
  for(let i = num ; i < arr.length ; i++ ){
    // arr[i - num] will always subtract the first element 
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum , tempSum)
  }
  return maxSum
}
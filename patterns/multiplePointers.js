// multiple pointer 
// the idea that we have 2 pointer / values corresponding to index / position 
// then move them towards end , beginning or middle based on certain condition 
// useful for minimal space complexity 


/*
write a function called sumZero, accepts sorted array of integers 
mission
find the first pair that the sum of them is zero
return an array includes both values or undefined if a pair does not exist?
*/
// input [sorted numbers]
// output [num1 , num2] because num1 + num2 = 0 
// or
// there is no pair that the sum of it is 0


// naive solution
function naiveSumZero(arr){
  let output = []
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length ; j++){
      if(arr[i] + arr[j] === 0 ){
        output.push([arr[i],arr[j]])
        return output
      }
    }
  }
  return output
} // this is an expensive solution , time complexity is N^2


// another solution using 2 pointers 
function goodSumZero(arr){
  // first pointer start from the beginning and moving up
  // second pointer start from the end and moving down 
  let begin = 0
  let end = 0
  let output = []
  while (begin < end ){
    if(arr[begin] + arr[end] === 0) {
      output.push([arr[begin] , arr[end]])
      return output
    }
    // i have made mistake here because im incrementing and decrementing 
    // both of them at the same time which is not what we want
    begin++
    end--
  }
  return undefined
}

function betterSumZero(sortedArr){
  let begin = 0 
  let end = sortedArr.length -1
  while (begin < end){
    let found = sortedArr[begin] + sortedArr[end]
    if(found === 0){
      return [sortedArr[begin] , sortedArr[end]]
    }
    // because we have sorted arr , which means we have extra when we add them 
    // then , move it down we are looking for smaller number
    if(found > 0){
      end--
    }
    // move up we need bigger number 
    if(found < 0){
      begin ++
    }
  }
  return undefined
}

// time complexity O(n)
// space complexity O(1)
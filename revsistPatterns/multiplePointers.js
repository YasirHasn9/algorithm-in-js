// Multiple Pointers 
// I have no idea what is the official name for so , lets call multiple pointers 

// the idea behind that we have pointers, what is pointers  ?
//     They could be value, position or index, then we can move them towards the beginning, end or the middle
//     it depends on certain condition. They can go towards each other or the same directions

// To what problems it is efficient ?
//     problem with minimal space complexity.

//  since we have pointer, so usually we are looking for a pair of values.


//  challenge

// write a function that accepts a sorted array of integers. The function should find the first pair where the sum is 0. 
// Return  undefined in case they are not there 



// A naive solution 
function sumZeroN(arr){
    let res = []
    for(let i = 0 ; i < arr.length ; i++){
      let num1 = arr[i]
      for(let j = 1 ; j < arr.length ; j++){
        let num2 = arr[j]
        if(num1 + num2 === 0){
          res.push(num1,num2)
        }
      }
        return res
    }
  }
// time complexity is O(n^2)
// space complexity O(1)



function sumZero(arr){
    // assign 2 pointers , one starts at the beginning and the other at the end
    let left = 0 
    let right = arr.length -1
    // make them go against each other
    while (left < right){

        // get the sum of each 2 element and compare it to 0
        let sum = arr[left] + arr[right]
        if(sum === 0 ){
            return [arr[left], arr[right]]
        }
        // if sum is greater than 0 , it means the element at the end is bigger so we need to move the index towards the beginning
        // because the array is already sorted 
        if(sum > 0 ){
            right--
        }
        // do the opposite 
        if(sum < 0){
            left++ 
        }
    }
    return undefined
}





function sumWithMap(arr){
    let map = new Map()
    for(const num of arr){
        if(map.has(num)){
            return [num , map.get(num)]
        } else {
            return (-1*num , num)
        }
    }
    return []
}
let nums = [-1,1,2,3]
console.log(sumZero(nums))
console.log(sumZeroN(nums))
console.log(sumWithMap(nums))


















// challenge 
/*
implement a function named countUniqueValues which accepts sorted array of number count the unique values in the array.
They can be negative numbers in the array, but it will be sorted.
*/
// first method but this not for sorted array
function findU(arr){
    let obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }

    return Object.keys(obj).length
}


// for sorted array
function countUniqueValues(arr){
    let count = 0
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[count] !== arr[i]){
            count ++
            arr[count] = arr[i]
        }
    }
    return count + 1
}
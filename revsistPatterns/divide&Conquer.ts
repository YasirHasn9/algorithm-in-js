/*
Divide and Conquer is to divide a set of data into smaller chunk of 
data and then repeating the process with this subset of data

help to decrease the time complexity
*/

// Challenge
// you have given a function called search that takes sorted array of integers, and a target that should be located at some index in the array
// find the index of the target and return, return -1 if there is no value for the target in the array.

// first solution with for loop
function search_0(arr: number[] , target:number): number {

    // im gonna use a divide and conquer pattern
    let left = 0 
    let right = arr.length 
    for(let i = 0 ; i < arr.length ; i++){
        let mid = Math.floor((left + right ) / 2)
        let current = arr[mid]
        if(current === target){
            return mid
        } 
        if(current > target){
            right = mid 
        }
        if (current < target){
            left = mid
        }
    }


    // we don't have the target
    return -1
}


// second solution with while
function search_1(arr:number[] , target:number):number{

    let min = 0 ; 
    let max = arr.length -1
    while(min < max){
        let mid = Math.floor((min + max) / 2)
        let current = arr[mid]
        if(current === target){
            return mid
        } 
        if(current > target){
            min = mid + 1
        }
        if (current < target){
            max = mid -1
        }
    }
    return -1
}
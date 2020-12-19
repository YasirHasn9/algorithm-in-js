//   Sliding Window 
// it is a pattern that involves creating a window. This window, it could be an array
// or it could a number from one position to another 

// according to some rules, this window , either increases or closes.
// by closes, i mean a new window just gets created
                                                                        
// very useful for keeping track of a subset of data in an array or string

// challenge 
// write a function that accepts an arrays of integers and a number. The function should
// calculate the maximum sum of n consecutive elements in the array

// example 
let nums: number[] = [1,2,5,2,8,1,5]
let num1 : number = 2 
// this should return 10 because the larges 2 consecutive element are 2 , 8

let num2: number = 4
// should return 17 because 2 + 5 + 2 + 8 = 17

function maxSubarraySum(arr:number[] , num:number):number{
    let max:number = 0
    for(let i = 0 ; i < arr.length - num ; i ++){
        let temp:number = 0
        for(let j = 0 ; j < num ; j++){
            temp += arr[j + i]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}

// another way to solve 
function maxSum(arr:number[] , num:number):number {
    let maxSum = 0
    let temp = 0
    for(let i = 0 ; i < num ; i ++){
        temp += arr[i]
    }

    for(let i = num ; i < arr.length ; i++){
        temp = temp - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum , temp)
    }
    return temp
}
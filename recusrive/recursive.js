// when we use the recursive function , we are calling the same function with different inputs
// until we reach the case base

// base case is the condition when the recursive ends 
// it is when the condition is met , we have to stop at certain point otherwise we keep calling the function 
// over and over again , just like loop, has to stop.

function countDown(num){
    if(num === 0){
        return 0
    }
    console.log(num)
    num--
    return countDown(num)
}
countDown(3) 
/*
countDown(3) 3
       -> countDown(2) 2
           -> countDown(1)  1 
*/

function getTotal(num){
    if(num === 1) return 1
    return num + getTotal(num - 1)
}

getTotal(5)
/*
getTotal(5)  return 10 
   return getTotal(4) 4 + 6 = 10 --> popped --> there is no function to invoke in the call stack 
        return getTotal(3) 3 + 3 --> 6 popped
                return getTotal(2)  2 + 1 = 3 --> popped
                       return getTotal(1) --> 1 popped
                           

*/

// the function that we dealt with above are pure recursion , which a function called itself 
// now , we wanna a helper function that do the recursion work for us
// lets say we want to collect the odd number in array

function collectOddValues(arr){
    let res = [ ]
    function helper(inputValue){
        if(inputValue.length === 0){
            return res
        }
        if(inputValue[0] % 2 !== 0){
            res.push(inputValue[0])
        }
        inputValue.slice(1)
        helper(inputValue)
    }

    helper(arr)
    return res
}


// write a function called reverse that reverse a sting 
function reverse(str){
    // there is 2 parts in recursive function 
    // base case which where should the function stops called itself
    if(str.length === 1) return str
    // different input because this is how recursion works;  it is taking one problem and doing over again with different input
    return reverse(str.slice(1)) + str[0]
}
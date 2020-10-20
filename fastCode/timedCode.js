// to write better code , you have to focus on how long does our code take to get executed ?
// in this case we need a timer to tell us the period.
// luckily js has a built-in function that can help us with 


function addUpTo(n){
    let tot = 0 
    for (let i = 1 ; i <= n ; i ++){
        tot += 1
    }
    return tot
}
let t1 = performance.now()
console.log(addUpTo(10))
let t2 = performance.now()
// here we are gonna see how long it does take 

// let change our approach 
// same function with different name 
function add(n){
    return n * (n + 1) / 2
}


let t3 = performance.now()
console.log(addUpTo(10))
let t4 = performance.now()
// now see the different 


// problems with time 
/*
different machine record different times 
sometimes even the same machine will recode different time 
*/


// so what is it if not time ?
/*
all computers all having the same process for executing an algorithm.
so the number of operation is the same for all the machine 

so this line n * (n + 1) / 2
here is 3 operation regard the size of n 
we have 
operation 1 = * 
operation 2 = + 
operation 3 = /
 */


//  to simply put it , the number of the operation grows roughly proportionally with n
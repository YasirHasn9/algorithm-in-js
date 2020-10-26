/*
what are objects ?
they are unordered data structure, and everything inside them is stored in key/value paired 

when to use them?
1. when we don't need to order or data
2. when we need fast access, insertion and removal .
insertion O(1) there is no matter where do insert them because there is nowhere (i mean no order)
accessing O(1)
removal O(1)

searching O(n)

*/

// some built-in function of big O notation

// Object.keys() // O(n) it return an array that goes over all the key/ values in the object 
// Object.values()  // O(n) it return an array that goes over all the key/ values in the object 
// Object.entries()  // O(n) it return an array that goes over all the key/ values in the object 

// Object.hasOwnProperty()  // O(1) cuz to access them , you have a unique key  

let person = {
    name:"Yasir",
    age:29,
    grades:[1,2,3,4]
};
// the performance works in browser 
let t1 = performance.now()
console.log(Object.keys(person))
let t2 = performance.now()
console.log(t2 - t1)
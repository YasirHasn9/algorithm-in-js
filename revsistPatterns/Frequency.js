// Frequency Counters
// it is a term in algorithm that is used to describe the method of finding an element in array
// or string and then find or collect the frequencies/values of it

// how it works 
// this pattern uses objects or sets to collect the wanted values. By using objects or sets
// that allows us to avoid nested loop or O(n^2) operations with arrays/strings.

// when it useful
// this is useful when you have multiple inputs of data and you need to compare them 
// to see if they consist similar values like anagrams of one another or a value 
// contained inside another value


// challenge
// Write a function that accepts 2 arrays. The function should return true
// if every value in the array has its corresponding value squared 
// in the second array.

function same(arr1 , arr2){
    // edge cases that i think of for now ?
    // check the length of both arrays 
    if(arr1.length !== arr2.length) return false
    let feq1 = {}
    let feq2 = {}
    for(let num of arr1){
        feq1[num] = (feq1[num] || 0) + 1
    }

    for(let num of arr2){
        feq2[num] = (feq2[num] || 0) + 1
    }

    for(let key in feq1){
        if(feq2[key**2] !== feq1[key]){
            return false
        }
        if(key **2 in feq2){
            return false
        }
    }
    return true
}


// challenge 
/*
given 2 strings, write a function to determine if the second 
string is an anagram of the first
*/

function validAnagram(first , sec){
    // create a lookup object
    let lookup = {}
    // iterate over the first string 
       // add each string to the lookup object 
      // and count hom many does it occur in the string?
      for(let element of first){
          lookup[element] ? lookup[element] += 1 : lookup[element] = 1
      }    

    //   console.log(lookup)
    // iterate over the second string and compare it
    for(let element of sec){
        if(!lookup[element]){
            return false
        }
        // here set it to zero 
        lookup[element] -= 1
    }
    return true
}
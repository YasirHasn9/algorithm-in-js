// write a function that takes one argument and return counts of each char in it


// understanding
// 1. we have a function that take string and only string
// 2. output : number of each char: like how times have been repeated in the string


// plan 
// use the length of the str
// iterate over each char in the word
// check if each one them has been repeated
// how can i do that ?
// create empty object 
// add each char as a key with 1 value
// in case we have that char then increase the value and continue

function countChar(str){
  let count = {}
  for(let i = 0 ; i < str.length ; i++){
    if(Object.hasOwnProperty(str[i])){
      str[i] += 1
    }
    else {
      count[str[i]] = 1
    }
  }
  return count
}
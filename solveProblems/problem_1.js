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
// if we dont have the object then  add each char as a key with 1 value
// in case we have that char then increase the value and continue
// what is the edge cases ?
// in case the string has an empty spaces or periods , or something else that not a char
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

// now i wanna reflect back, and see if i can improve my solution or do different way

function countChar_2(str){
  let res = []
  // loop over each char
  for (let i = 0 ; i < str.length ; i++){
    // char is changeable var , and would different for each iteration
    let char  = str[i]
    // in case , we have the char in the obj , then increment its value by 1
    if(res[char] > 0){
      res[char] ++
    }
    // if we dont have the char as a key in res obj, then add is as key with value 1
    else {
      res[char] = 1
    }
  }
  return res
}

// after reflecting back at it again i have found edge case such as what if we have empty spaces or numbers 
// or something string in the str

function countChar_3(str){
  let res = {}
  // this loop will ignore the i and the headache of indexes 
  for(let char of str){
    // make every char as a lower case 
    char = char.toLowerCase()
    // make sure we dont have string chars
    if(/[a-z0-9]/.test(char)){
      // if(res[char] > 0){
      //   res[char] ++
      // } else {
      //   res[char] = 1
      // }
      // we write the if/else in one line of code
      res[char] = ++res[char] || 1
    }
  }
  return res
}


function countChar_4(str){
  let res = {}
  for(let char of str){
    if(isAlphaNumeric(char)){
      char = char.toLowerCase()
      res[char] = ++res[char] || 1
    }
  }
  return res
}

function isAlphaNumeric(str){
  let code = str.charCodeAt(0)
  if(!(code > 47 && code < 58) && // 0-9
     !(code > 64 && code < 91) && // a - z
     !(code > 96 && code < 123) // A_Z
     ) {
       return false
     }
     return true
}
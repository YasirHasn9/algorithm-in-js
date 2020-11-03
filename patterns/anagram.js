// given 2 strings, write a function to determine if the second string is anagram of the first
// string

// let see if we have [ice , ic] // true
// ['' , ''] true 
// every letter in the second string should be existed in the first element 

// i have no idea whats wrong with solution , it passes some cases but all of them
function anagram(str1, str2){
  // create 2 empty objects 
  // obj1 holds all the letters that occur in str1 and count it them 
  // obj2 holds all the letters that occur in str2 and count it them 
  // then check if every letter in the obj2 has been exited in the first str and also
  // has the same account 
  let obj1 = {}
  for(let char in str1.toLowerCase()){
    if(obj1[char]){
      obj1[char] += 1
    } else {
      obj1[char] = 1
    }
  }

  for(let char in str2.toLowerCase()){
    if(obj2[char]){
      obj2[char] += 1
    } else {
      obj2[char] = 1
    }
  }

  for (let key in obj2){
    if(!(obj1[key])){
      return false
    }
  }
  return true

}


// correct solution
function anagram_2(str1, str2){
  // create an object to hold all the letters and frequency of each one of them
  let lookup = {}
  for(let i = 0, len = str1.length ; i < len ; i++){
    let letter = str1[i]
    // increment it or assign 1 to it
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  for (let i = 0 , len = str2.length ; i < len ; i++){
    let letter = str2[i]
    // console.log(lookup) , you'll find the letters in the first str are keys 
    // to match them with the second word , the letter should be the same 
    // so im taking each letter in the second word and make as a key and compared to the keys 
    // in the lookup object
    if(!lookup[letter]){
      return false
    } else {
      // here we are making sure we have the exact number in both words
      // when we found it, subtract it
      lookup[letter] -= 1
    }
  }
  return true

}
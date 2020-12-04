// Frequency counter uses objects or sets to collect the value/frequencies of values 
// this often avoid nested loop or N^2  operations with array/strings
// this useful when you have multiple pieces of data and required to
//  find the frequencies when you compared them to find something that occurs 
// this approach avoid the need of O(n^2) through nested loops

// challenge 
// write a function called same, which accepts 2 arrays. 
// function should return true 
// if
//  every value  in the array has corresponding value 
// squared in the second array. 
// the frequency of values must be the same


// naive solution
function same_1(arr1, arr2){
  // making sure that both arrays have the same len
  if(arr1.length !== arr2.length){
    return false
  }
  // loop over each num in arr1 and compared to arr2 to find its squared value
  for(let i = 0 ; i < arr1.length ; i++){
    // we are gonna check the squared value of arr1[i] in arr2[i] by 
    // using built-in function called indexOf(value)
    // will return the index of the element
    // here like asking what is the index of the arr[i]**2 in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false
    }
    // splice to remove the element at the correctIndex
    arr2.splice(correctIndex , 1)
  }

  return true 
}




// refactor solution 
function same_2(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  // in these 2 objects , im gonna add each num as a key and count how many 
  // time has been occurred 
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let num of arr1){
    // add the num as a key
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
  }

  for(let num of arr2){
    // add the num as a key
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
  }

  for(let key in frequencyCounter1){
    // we check the keys value
    if(!(key **2 in frequencyCounter2)){
      return false
    }
    // here  is like checking how many times does it occur ?
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true

}
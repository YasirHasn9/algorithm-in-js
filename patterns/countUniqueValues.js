// count unique values 
// implement a function called countUniquesValues,
// accepts a sorted array
// count the unique values

// understanding
// input sorted array (the order does not matter)
// mission
// count how unique value in the array, count only the value that occur once in the arr

// planning 
// iterate over them
// create a count that hold the number of the unique values 

function countUniquesValues(sortedArr){
  let count = 0
  let currentIndex = 0
  let nextIndex = currentIndex + 1
  for(let i = 0 ; i < sortedArr.length ; i++){
    if(sortedArr[currentIndex] !== sortedArr[nextIndex]){
      count++
      currentIndex
    } else {
      nextIndex++
    }
  }
  return count + 1
}
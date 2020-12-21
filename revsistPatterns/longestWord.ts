// you have given a function that takes an array of strings.
//  it should return the longest word

function findLongestWord(arr:string[]) :string{
    let tempWord:string = arr[0]
    let longestWord:string = " "
    for(let i = 1 ; i< arr.length ; i++){
        if (tempWord.length > arr[i].length){
            longestWord = tempWord
        }
    }
    return longestWord
}
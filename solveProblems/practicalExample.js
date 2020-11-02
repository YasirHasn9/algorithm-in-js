// write a function that takes 2 numbers and return their sum 

// so now we have a problem and we need to ask ourselves some questions 
// 1. can i restate the problem to my own words
// -- our function is implementing addition


// 2. what is the inputs ?
//  two numbers, are they integers or floats ?


// 3. what is the outputs ? 
// one number which the product of the sum of them 


// 4. can the outputs determined from the inputs ?
// what if the function has got only one num , would that make the other numbers == 0
// ask the interviewer that


// 5. how should i label the important things ?
// so , what matters 

function add(num1 , num2){

    return num1 + num2
}



function charCount(str){
    let obj = {}
    for(let i = 0 ; i < str.length; i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]] += 1
        }
        else {
            obj[str[i]] = 1
        }
    }
}
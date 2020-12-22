/*
Write a function called sameFrequency. Given 2 positive intergers, find out if the two numbers have the same frequency of digits
Your solution must be : Time O(N)
*/

function sameFrequency(num1: number, num2: number): boolean {
    //   1. convert the number to string
    //   since we cannot iterate over a number
    //   we convert the numbers to string;
    num1 = String(num1);
    num2 = String(num2);
    //  2. create objects holding each number is a key and its frequency as a value
    let obj1 = {};
    let obj2 = {};
    for (let num of num1) {
      obj1[num] = (obj1[num] || 0) + 1;
    }
    for (let num of num2) {
      obj2[num] = (obj2[num] || 0) + 1;
    }
  
    // 3. loop over the properties of any of the objects
    //   a) compare each key if it is existed in the other object
    //   b) check the frequency of each one
    for (let key in obj1) {
      if (!obj2[key]) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(sameFrequency(13232, 1232));
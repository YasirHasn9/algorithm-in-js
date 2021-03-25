/* object is data structure in js, it contains properties.
 there properties could be anything as a key/value
 key is string and value could be anything
let obj = {
       key: value,
    }
*/
/* one of the common question that often asked in the js interviews is how to compare objects in js
in js there is 3 ways to compare values:
1. double equal == only --> compare only value
2. triple equal === ------> compare values and type
3. Object.is()

*/
let car1 = {
  name: "Tesla",
};
let car2 = {
  name: "Tesla",
};

console.log("*****************************");
console.log(car1);
console.log(car1 === car1); // true
console.log(car1 == car1); // true
console.log(Object.is(car1, car1)); // true
// they are all true because they are pointing to the same instance of the object

console.log("*****************************");
console.log(car2);
console.log(car1 == car2); // false
console.log(car1 === car2); // false
console.log(Object.is(car1, car2)); // false
// notice even though they are similar but js works in mysterious way both are pointing to different object that happen to have
// the key/values pair
/*
The question is how to compare them 
*/
console.log("*****************************");
console.log("*************Simple Equality ****************");
function simpleEquality(obj1, obj2) {
  if (obj1.name !== obj2.name) {
    return false;
  }
  return true;
}
console.log(simpleEquality(car1, car2));
// well , thats was easy, right ? because we have simple object that we know the keys of if
// what if we have more complex objects to compare. In this case, there is a term called shallow equality.
// we compare each key in one object and compare to same key name in the other object

console.log("*****************************");
console.log("*************Shallow Equality ****************");
function shallowEquality(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let animal1 = {
  name: "Doggie",
  age: 3,
};
let animal2 = {
  name: "Doggie",
  age: 3,
};
let animal3 = {
  name: "Doggie",
  age: 3,
  legs: 4,
};
console.log(shallowEquality(animal1, animal2));
console.log(shallowEquality(animal1, animal3));
console.log(shallowEquality(animal2, animal3));

// now, what if we have nested object inside the compared object, that is a nasty bug

let animal4 = {
  name: "Cow",
  age: 2,
  children: {
    child1: animal1,
    child2: animal2,
  },
};

let animal5 = {
  name: "Cow",
  age: 2,
  children: {
    child1: animal1,
    child2: animal2,
  },
};
console.log("test shallowEquality", shallowEquality(animal4, animal5)); // false

// to solve this problem, we are gonna make a deep equal using recursion

function deepEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];
    let areObject = isObject(val1) && isObject(val2);
    if ((areObject && !deepEqual(val1, val2)) || (!areObject && val1 !== val2))
      return false;
  }
  return true;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
console.log(deepEqual(animal4, animal5));

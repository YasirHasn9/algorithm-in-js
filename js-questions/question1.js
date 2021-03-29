const arr = [
  { x: "foo", y: 1 },
  { x: "bar", y: 2 },
  { x: "baz", y: 3 },
];

const output = arr.reduce(
  (acc, cur) => {
    return {
      // since its object, we assume the acc object has other properties and we dont wanna
      // mutate the original, so we use the spread operator
      // and then we add the new properties
      ...acc,
      [cur.x]: cur.y,
    };
  },
  /* this is the where is the acc */ {}
);
/*
The reducer method is an array method takes 2 argument accumulator and current 
the callback function of the reduce will execute on the current, which will initialize it after we close cb function 
*/
/*
output = {
    foo:1,
    bar:2,
    baz:3
}
*/

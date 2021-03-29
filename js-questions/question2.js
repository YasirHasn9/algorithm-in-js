const arr1 = [{ name: "foo" }, { name: "bar" }, { name: "baz" }];

// because we are using the fill method, this will not create new obj each iterate, this will create
// three object of the same one.
const arr2 = new Array(3).fill({});
arr2.forEach((obj, idx) => {
  // here we mutating the same object in the previous indices
  obj.name = arr1[idx].name;
  obj.position = idx;
}); // ??

const arr3 = arr1.map((obj, idx) => {
  return {
    ...obj,
    position: idx,
  };
});

const arr4 = arr1.slice();
arr4.forEach((obj, idx) => {
  obj.position = idx;
});

console.log("1", arr1);
console.log("2", arr2);
console.log("3", arr3);
console.log("4", arr4);

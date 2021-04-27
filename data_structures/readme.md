## Data Structure

you can think of it as a collections of values. Among these values there is `relationships` and also there is `operation/function` that applied to them.
for example, Array is one type of data structure. for example, it contains set of values that happen to be, let's say number

```js
let numbers = [1, 2, 3, 4];
number.length;
numbers[0];
```

the relationships among them that they are in order. `numbers.length` is built-in function that helps to know the length of the array. `number[0]` helps to get the first element in the array since the array in js a zero-based position

### Class

Simply, it is a blue print for creating an object and define properties with methods.
We can create one class and instantiate others from it.

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

#### The rules

1. class name should be capitalized.
2. it has a constructor method (gets called on each time we create a new class/object)

now, if we want to create a class for each student, we should use the `new` keyword

create new instances

```js
let firstStudent = new Student("John", "Travolta");
let secondStudent = new Student("Tom", "Hanks");
```

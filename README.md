# algorithm-in-js

understanding the big O notation
before we dive into the O(n) , we have couple things to dive into.
for instance , what is better code mean to you ?
faster ?
less memory?
more readable ?

faster & less memory

// to write better code , you have to focus on how long does our code take to get executed ?
// in this case we need a timer to tell us the period.
// luckily js has a built-in function that can help us with

// to simply put it , the number of the operation grows roughly proportionally with n

so , what is Big O notation ?
it is a way to normalize fuzzy counting for the number of the operation. it allows for to talk formally about how the runtime of the an algorithm grows as the inputs grow.

for now , we are gonna focus on 3 time complexity

liner O(n) which the number of operation grows as long as the n grows

# if we have n = 100 --> operations = 100

Quadratic O(n^2) the number of operations doubles the number of n

# if n = 100 --> operations = n^2 = 100000

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

Liner O(n) which the number of operation grows as long as the n grows

# if we have n = 100 --> operations = 100

Quadratic O(n^2) the number of operations doubles the number of n

# if n = 100 --> operations = n^2 = 100000

Constant O(1) the number of operations is stable no matter how big is the n

# if n = 100 ---> operations = constant number

some Big O shorthands but not true all the time

1. Arithmetic operations are constant
2. variable assignment is constant
3. accessing an element by index of an array of object by key is constant
4. in a loop , the complexity is the length of the loop times whatever happens inside the loop.

**\_ object are fast than array at pretty much everything but there is no order , arrays are great when you need to order stuff and its better to add and remove from the end \***

# To understand what is the big o notation , you need to understand what is algorithm ?

simply, it is a process or set of steps to solve a problem or accomplish a mission

but hey, why do we need to this ?
almost everything in programming is algorithm . and personally , i feel we don't only use algorithm in programming but in everything even when it comes to cook food , you have to do specific task to finish your cooking
and most importantly , you need it in interviews.

# how can i improve my skills at problems solving ?

1. try to understand the problems
2. explore concrete example
3. break it down
4. solve/ simply
5. look back and refactor

## Understand the Problem

1. can i restate the problem in my own words ?
2. what is the inputs ?
3. what is the output ?
4. can the outputs determined from the inputs ?
5. how could i label the important things ?

## Explore concrete example

give an example of the output like , if you are require to write a function
that adds 2 numbers
you can think of 2 + 3 = 5
and also think of the edge cases, wha will stop you from getting the results ?

## Break down

do not think of the problem as a whole thing but make it as small steps
and think it out as piece by piece

## Solve/simply

## solve

now , it is the time to execute . try to solve it and if you can't try to solve a simple problem.
this, mentally will help to show something for yourself and also it better than thinking of something
that makes doing zero progress

## simply

1. find the code difficulty in what are trying to do
2. temporarily ignore that difficulty
3. write a simplified solution
4. incorporate that difficulty back in

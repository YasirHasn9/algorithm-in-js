<h2>Recursion</h2>
We have to ways to solve a problem that has more than one input: Recursive or iterative.
what is Recursive ?
It is taking one problem and doing it over and over again on one piece or on a changing piece until we hit a base case.
example:
find the odd number in these numbers = (1234 , 456, 5678,678,7890)?
first we have to think of a base case which is when we have no numbers
so when the length of numbers is zero stop looking
 first recursive will go over (1234 , 456, 5678,678,7890) no odd
 second  (456, 5678,678,7890) no odd
 third        (5678,678,7890) no odd
 forth             (678,7890) no odd
 fifth                 (7890) no odd
 sixth                    ()  no odd --> stop the process

## ---

we have been using recursive all the time and we may don't know. Like document.getElementByID(id name)
because a dom is tree that we should traversal to find the id
or JSON.parse/ JSON.stringify

# --

There are 2 important parts in the recursive function, base case and different input

<h3>Base Case</h3>
It is the condition when the recursive ends. The function has to stop at some point other wise we are gonna overload the stack 
<h3>Different Inputs</h3>
We have to call the function with different input otherwise; we get the same result. What is the point of calling the same function with the same inputs every time? Get the same results.

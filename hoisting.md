one of the often asked question in js interview is what is hoisting?
simple enough, hoisting means your program hoisted/left your declarations to the top of their scope when compiling them
so what does that mean?
it means your program allocating memory location for your variable/function/class declaration in your code.

variable hoisting
all the variables declarations(var , let , const) get hoisted(not their values) but there some differences in the way they get hoisted.

when using var, its value is undefined until it gets the its actual value
when using let or const , if we try to use before initialize their values the programs throws ReferenceError.

function hoisting: types of function in js are Named function and Anonymous/expression
Named function
named function is hoisted with its inputs, argument and function body. hoist the whole function
in this case , we can call it before we define it.

Anonymous/expression
Anonymous/expression function which can be arrow or regular functions, they behave similar like variable declarations except with function
that declared with var will throw a TypeError

classes we have 2 types of classes Class Declarations and Class Expressions
Class Declarations behave similar to const and let even though js manages to fund a reference to them but we can't use them
before we define them in our code

Class Expressions
similar to function expression , once they assigned to a variable so only the variable declaration gets hoisted

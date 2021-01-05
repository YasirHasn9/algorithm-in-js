/*
Almost in every program languages, there is a built-in data structure . when ever a function gets invoked it is placed 
on the call stack (pushed)
when the js sees the return keyword or when the function ends, it will remove from the call stack (popped)
*/


function takeShower():string{
    return 'Showering'
}

function eatBreakfast():string{
    let meal = cooked()
    return `Eating ${meal}`
}

function cooked(): string{
    let items = ["Oatmeal", "Eggs" , "Protein Shake"]
    return items[Math.floor(Math.random()* items.length)]
}

function wakeUp():void{
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go work!")
}

wakeUp()

/*
we used to push and pop function on the call stack but with Recursion we  push and pop the same function over and over again

*/
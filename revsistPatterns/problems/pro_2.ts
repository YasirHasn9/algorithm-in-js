/*
implements a function called areThereDuplicate which accepts a number of argument, and check wether there be any duplicates amoung the the arguments passed. You can solve this using the frequency counter pattern or the multiple pointer pattern
*/

function areThereDuplicate(...args: any): boolean {
    let obj = {};
    for (let i = 0; i < args.length; i++) {
      obj[args[i]] ? (obj[args[i]] += 1) : (obj[args[i]] = 1);
    }
    for (let key in obj) {
      if (obj[key] > 1) {
        return true;
      }
    }
    return false;
  }
  
  console.log(areThereDuplicate("a", "b", "c", "d", "a"));
  
  // another solution
  function oneLine(...args: any): boolean {
    return new Set(args).size !== args.length;
  }
  console.log(oneLine("a", "b", "c", "d", "a"));
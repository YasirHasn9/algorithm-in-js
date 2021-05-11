/*
jumpingOnClouds
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds 
are thunderheads and others are cumulus. The player can jump on any cumulus cloud having
 a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. 
 Determine the minimum number of jumps it will take to jump from the starting position to the last cloud.
 x It is always possible to win the game.
For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
Example 
c = [0,1,0,0,0,1,0]
Index the array from 0, 6. The number on each cloud is its index in the list so the player
 must avoid the clouds at indices  1 and 5 . They could follow these two paths:  
 1. 0 -> 2 -> 4 -> 6 : jumps = 4
 2. 0 -> 2 -> 
 The first path takes  jumps while the second takes . Return .
Function Description
Complete the jumpingOnClouds function in the editor below.
jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers
Returns
int: the minimum number of jumps required
Input Format
The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
Constraints



*/
// cur = 0
// next = cur + 1

//      cur        next
// c =  0 ----->   0  ------> 0 -------> 1 ----------> 0

//                 cur -----> next
//                 0   ------> 0 -------> 1 ----------> 0

// if cur ===  next make cur === next if not not make the one next to next === cur and increament
/*
if cur === next
    cur = next
    jump++
*/

// function jumpingOnClouds(c) {
//   let n = 0;
//   for (let i = 0; i < c.length - 1; i += c[i + 2] ? 1 : 2) {
//     n++;
//   }
//   return n;
// }

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1]) {
        count++;
        i++;
      }
    } else {
      count++;
    }
  }

  return count;
}
// //          0 0 1 0 0 1 0                  i  n  +
// console.log(jumpingOnClouds([0, 0, 0, 0]));

// function jumpingOnClouds(clouds) {
//   let jump = 0;
//   for (let i = 1; i < clouds.length; i++) {
//     let cur = clouds[i];
//     if (cur === 0) {
//       if (cur === clouds[i + 1] && cur === clouds[i - 1]) {
//         jump++;
//         i++;
//       } else {
//         jump++;
//       }
//     }
//   }

//   return jump;
// }
console.log(jumpingOnClouds([0, 0, 0, 0]));

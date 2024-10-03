/*
n = 5

*
**
***
****
*****
*/

// const n : number = 5

// for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i))
// }

/*
    *
   **
  ***
 ****
*****
*/

const n: number = 5

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}




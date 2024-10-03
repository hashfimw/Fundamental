
let i : number = 1
const n : number = 6 

let result : number = 1
let desc : string = ""
for ( let i = n; o > 0; i--) {
    result *= i
    if ( i == 1){
        desc *= "1"
    } else {
        desc *= ` x ${i}`
    }
}

console.log(result);
console.log(`${desc} = ${result}`)
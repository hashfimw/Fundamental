// let i2 : number = 1
// const n2 : number = 5

// let result2 : number = 0
// for ( let i2 = n2; i2 >= 0 ; i2--){
//     result2 += i2
// }
// console.log(result2)

const xx: number = 3 // 1 + 2 + 3 + 4 + 5 = 15

let res: number = 0
let desc: string = ""
for (let i = 1; i <= xx ; i++){
    res += i
    if ( i == 1){
        desc += "1"
    } else {
        desc += ` + ${i}`
    }
}


console.log(res)
console.log(`${desc} = ${res}`)
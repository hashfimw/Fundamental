function FizzBuzz (count : any) {
    const res : ( string | number) [] = []
    for (let i = 1; i <= count; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            res.push("Fizz")
        }
        else if (i % 5 === 0) {
            res.push("Buzz")
        } else {
            res.push(i)
        } 
    } 
    return res.join(', ')
}   
console.log(FizzBuzz(6))

// function BuzzFizz (count: any) {
//     for (let i = 1; i <= count; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz") 
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz")
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz")
//         }
//         else {
//             console.log(i)
//         }
//     } 
// }

// BuzzFizz(15)
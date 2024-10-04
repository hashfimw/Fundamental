//fuction declaration // bisa dipanggil dimana aja
function reverseStr (input: string) {
    return  input.split("").reverse().join("")
}

console.log(reverseStr ("Hello Word"))
console.log(reverseStr ("Bandung"))
// membuat suatu fungsi yang bisa di panggil lagi

const namaterbalik :string = reverseStr("Jakarta")
console.log(namaterbalik)

//fuction expression
// const sum = function (a: number, b: number) { // a dan b adalah parameter
//     return a + b
// }
// console.log(sum(20, 2)) // (20, 2) = argumen

//fuction scope = tidak bisa memanggil variabel dari dalam function

//parameter default
//const sum = function (a: number, b: number = 0) { // =0 adalah default ketika parameter hanya di isi satu akan ditambahkan/diisi 0
//   return a + b
//}
//rest parameter
// const sum = function (a: number, b: number = 0, ...others: number[]){
//     console.log(others)
//     return a+b  
// }  
// console.log(sum(10, 3, 1, 2, 3, 4,))
    // untuk memanggil argumen yang lebih dari parameter tapi tidak ditambahkan dari perintah return

//Nested Function
// function yang di dalam nya ada function lagi
// function getMessage (firstName: string) {
//     function sayHello () {
//         return "Hello" + firstName
//     }
//     function welcomeMessage () {
//         return "Welcome to Purwadhika"
//     }

//     return sayHello() + " " + welcomeMessage()
// }
// console.log(getMessage(" David"))

//Closure Function

function greeting (name: string) {
    const defaultMsg: string = "Hallo "
    return function () {
        return defaultMsg + name
    }
}

const greetingDavid = greeting ("David")
console.log(greetingDavid())

// looping di dalem function
function capitalize (str: string) {
    let res: string = ""
    for ( let i=0;i < str.length; i++) {
        if (i == 0 || str.charAt(i - 1)== " ") {
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLocaleUpperCase()
        }
    }   
    return res
}
console.log(capitalize("Hello World"))
console.log(capitalize("David di sini"))

// ood number
function checkOddEven (num: number) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

//currying //
//
function multiplier (factor: number) {
    return function (num : number) {
        return factor * num
    }
}

const mul3 = multiplier(3)
const mul6 = multiplier(6)

console.log(mul6(6)) 
console.log(multiplier(10)(2))  // bisa juga langsung

//recursive function
function countDown (frontNumber: number) {
    console.log(frontNumber)

    let nextNumber : number = frontNumber - 1 

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
    //console.log(frontNumber)
}
countDown(3)

//Arrow Function
const square = (a:number, b: number) => a * b
console.log(square(4, 2))

//isFinite adalah mengecek angka yang infinite atau unfinite
//parseFloat() = mengubah string argument menjadi floating number
//parseInt() = mengubah string argument ke integer = defaultnya 10

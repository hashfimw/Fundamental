// const num: number = 1000

// console.log(num.toLocaleString("id-ID", { style: 'currency', currency: 'IDR'}))


// cara kedua
const num : number = 1000 // 123.346.789
const numStr: string = num.toString() //.lengbt .charAt
let count : number = 0 

let res : string = ""

for (let i = numStr.length - 1; i >= 0; i--) {
    if (count % 3 == 0 && count > 0) {
        res = "." + res
    }
    res = numStr.charAt(i) + res
    count++
}

console.log(`Rp ${res},00`)
//console.log(num.toLocaleString("id-ID", {style : 'currency', currency : 'IDR'}))

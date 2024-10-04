// tempat untuk menyimpan banyak data

const arr: string[] = ["A","B","C"] // [ ] index
const arr2: string[] = new Array("A", "B", "C")

// const arr : (number | string)[] = [2,"A","B","C"] untuk 2atau lebih jenis tipe data

console.log(arr)
console.log(arr[2])       //[]=index, index array dimulai dari 0 //(arr[2]) = mengambil index ke 2 
console.log(arr.length) //.length menghitung index


arr.push("D") // menambahkan value di belakang 
console.log(arr)

arr.unshift("E") // menambahkan value di depan 
console.log(arr)

arr.pop()   // menghapus value terakhir
console.log(arr)

arr.shift() // mengapus value pertama
console.log(arr)

arr.splice(1, 1) // mengahapus index ke ? sebanyak berapa

arr.splice(1, 0, "Z") // untuk menambahkan value


const numArr: number[] = [1,3,2,100,21]

// numArr.sort((a, b) => a - b) //sort ascending atau buat ngesorting nomer dari kecil ke besar
// numArr.sort((a, b) => b - a) //sort descending atau buat ngesorting nomer dari besar ke kecil
// console.log(numArr)

// arr.sort() // sort ascending alphabetic
// arr.sort() .reverse() // sort descending alphabetic

const oddNumber: number[] = numArr
    .filter((item) => item % 2 == 1 && item > 2)
    .sort((a, b) => b - a)  // mencari angka ganjil trs lalu ditampilakannya yg lebih dari 2 trs disorting dari besar ke kecil

// console.log(oddNumber)
// console.log(oddNumber.find((item) => item == 3)) // mencari item
// console.log(oddNumber.findIndex((item) => item == 3)) //mencari index keberapa
// console.log(oddNumber.includes(3))// hampir sama dengan .find


const str : string = "Purwadhika Bandung"

// console.log(str.split("").join("`")) 

const newArr : number [] = [10, 20, 30, 40, 50]
const newArr2: number [] = newArr.map((item) => item =+5)

console.log(newArr2)
// newArr.forEach ((item, idx) => {
//     console.log(item, idx);  //.forEach untuk looping bisa jg untuk mencari index ke berapa 
// })

// newArr.map ((item, idx) => {
//     console.log(item, idx) //sama dengan forEach tapi bisa untuk menambahkan value
// })

//loping for of (array)
// for (let item of newArr) {
//     console.log(item)
// }




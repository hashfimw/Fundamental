// const num : number = 9

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`)
// }


// const str : string = "madam"
// let reserveStr : string = ""

// for (let i = str.lenght -1; i >= 0; i--) {
//     reserveStr += str.charAt(i)
// }

// console.log(str == reserveStr ? "Palindrome" : "not Palindrome")

// if (reservename === nama) {
//     console.log(`${nama} Palindrome`)
// }
// else (reservename === nama) {
//     console.log(`${nama} Not Palindrome`)
// }


// //3 

const num : number = 100000
const numKm: number = num / 100000

console.log (`${num}`)
// console.log(km * cm)
// console.log( ) 


//4

// const formatCurrency = (number: number): string => {
//     // Langkah 1: Pastikan ada 2 tempat desimal
//     let [integerPart, decimalPart] = number.toFixed(2).split('.'); // Pisahkan bagian integer dan desimal

//     // Langkah 2: Format bagian integer menjadi ribuan
//     let formattedInteger = '';
//     let counter = 0;

//     // Loop dari belakang, tambahkan titik setiap 3 angka
//     for (let i = integerPart.length - 1; i >= 0; i--) {
//         formattedInteger = integerPart[i] + formattedInteger;
//         counter++;
//         if (counter === 3 && i !== 0) {  // Tambahkan titik jika 3 angka dan bukan di awal
//             formattedInteger = '.' + formattedInteger;
//             counter = 0;
//         }
//     }

//     // Langkah 3: Gabungkan kembali bagian integer dan desimal
//     return `Rp. ${formattedInteger},${decimalPart}`;
// }

// const num: number = 1000; // Contoh input angka
// console.log(formatCurrency(num)); // Output: Rp. 1.000,00

// const formatMatauang = (number: number): string => {
//     let [integerPart,desimalPart] = number.toFixed(2).split('.') //memisahkan integer dan desimal
//     let formattedInteger = ''
//     let counttigadikit = 0




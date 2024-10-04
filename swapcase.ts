const str : string = 'The QuiCk BrOwN Fox'
let res : string =''

for (let i = 0; i < str.length; i++){
    if (str.charAt(i) == str.charAt(i).toUpperCase()){
        res += str.charAt(i).toLowerCase ()
    } else {
            res += str.charAt(i).toUpperCase()
        }
    
}
console.log(res)


// const swapCase = (str: string) => {
//     let swapped = '';
    
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
        
//         // Cek apakah huruf uppercase
//         if (char === char.toUpperCase()) {
//             swapped += char.toLowerCase(); // Jika uppercase, ubah ke lowercase
//         } else {
//             swapped += char.toUpperCase(); // Jika lowercase, ubah ke uppercase
//         }
//     }

//     console.log(swapped); // Cetak hasil swap case
// }

// const input = 'The QuiCk BrOwN Fox';
// swapCase(input); // Output: 'tHE qUIcK bRoWn fOX'




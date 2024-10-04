const str : string = "motor"
let reserveStr : string = ""

for (let i = str.length -1; i >= 0; i--) {
    reserveStr += str.charAt(i)
}

console.log(str == reserveStr ? "Palindrome" : "not Palindrome")
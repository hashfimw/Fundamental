const str : string = "helllo student purwadhika bandung"

let res : string = ""

for (let i = 0; i < str.length; i++) {
    if (i == 0 || str.charAt(i - 1) == " ") {
        res += str.charAt(i).toUpperCase()
    } else {
        res += str.charAt(i).toLowerCase()
    }
    }

console.log(res)
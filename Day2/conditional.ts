const age : number = 11

if (age >= 17) {
    console.log("You can create ID card")
}
else {
    console.log("You are not old enough to create an ID Card")
}

let grade : string = "A"

if (grade == "A") {
    console.log("Excellent Result!")
} 
else if (grade == "B") {
    console.log("Great Result!")
}
else if (grade == "C") {
    console.log("Average Result!")
}
else {
    console.log("Invalid Grade!")
}


const date: Date = new Date ("2025-01-01")
const day: number = date.getDay()

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")    
        break
    default :
        console.log("Invalid Days")
}

const x: number = 6
const y: number = 3

console.log(x < 10 || y > 5)

console.log(!!(x < 10))

const str:string = "Typescript"

if (str == "Typescript"){
    console.log("Typescript")
}
else {
    console.log("Not Typescript")
}
   
// ternary
console.log(str == "Typescript" ? "Typescript" : "Not Typescript")


const value: string = ""

const resultx:string = value && "Purwadhika"
const result2x:string = value || "Purwadhika"

console.log(resultx)
console.log(result2x)
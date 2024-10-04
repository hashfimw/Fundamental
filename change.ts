const str: string = "An apple a day keeps the doctor away"
const res : string = str.replace(/a/gi, "*") //regEX

console.log(res)


//^ = selain dari contoh [^a-zA-Z\s]/g = selain dari a kecil z kecil a besar z besar /g= regEx

const letter: string = "Hello@ Stu?dent Purwadhika"
console.log(letter.replace(/[^a-zA-Z\s]/g, ""))
//1. Area of Rectangle
const rectangleLength : number = 5
const rectangleWidth: number = 3

const rectangleArea : number = rectangleLength * rectangleWidth

console.log(`Area of Rectangle = ${rectangleArea}`);

//2. Perimeter
const PerimeterLength : number = 5
const PerimeterWidth: number = 3 

const PerimeterArea: number = 2 * (PerimeterLength + PerimeterWidth)

console.log(`Perimeter of Rectangle = ${PerimeterArea}`)

//3. Diameter,circumference,area

const radius : number = 5
const pi : number = 3.14159 //nilai pi 3.14159


const diameter = 2 * radius;

const circumference = 2 * pi * radius;

const area = pi * radius * radius;


console.log(`Diameter of Circle = ${diameter}`)
console.log(`Circumference of Circle = ${circumference}`)
console.log(`Area of Circle = ${area}`)

//4. angles of triangle


const angleA : number = 80 
const angleB : number = 65

const angleC = 180 - (angleA + angleB); // jumlah semua sudut segitiga selalu 180 derajat

console.log(`Angles of Triangle = ${angleC}`);

//5

const totalDays1 : number = 400; 
const totalDays2 : number = 366; 

const daysinYear : number = 365;
const daysinMonth : number = 30;

const remainingd : number = totalDays1 % daysinYear

const Year : number = (totalDays1 - remainingd) / 365
const Month : number = (daysinYear - daysinMonth) / 30
const Day : number = daysinMonth

const result1 : string = `${Year} year, ${Month} month, ${Day} days`
console.log(result1)

// console.log(Math.floor(5.9)) //membulatkan ke bawah
// console.log(Math.ceil(5.01)) //membulatkan ke atas
// console.log(Math.round(5.4)) // membulatkan

//6

const date1: Date = new Date("2024-10-01")
const date2: Date = new Date("2024-10-05")

const diff: number = date2.getTime() - date1.getTime()

console.log(diff / (24 * 60 * 60 * 1000))
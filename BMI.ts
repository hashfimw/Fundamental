function BodyMassIndex (weight : number, height : number) {
    const score: number = weight / ((height / 100) **2)
    if (score < 18.5) {
        return "less weight"
    } if (score < 24.9) {
        return "ideal"
    } if (score < 29.9) {
        return "over weight" 
    } if (score < 39.9) {
        return "very over weight" 
    } if (score > 39.9) {
        return "obesity"
    }
     
}

console.log(BodyMassIndex(70,170))
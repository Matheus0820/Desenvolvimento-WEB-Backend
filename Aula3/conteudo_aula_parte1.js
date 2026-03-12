// Spread Operator
console.log("= Spread Operator =")

// 1 - Vetor
const cars = ['kwid', 'mobi']
const carsUpdate = [...cars, 'sandero']

console.log("Carros antes do Spread: " + cars)
console.log("Carros depois do Spread: " + carsUpdate)
// ===================================================

// Rest Operator
console.log("\n= Rest Operator =")

const vector = [1, 2, 3, 4]
const [primeiro, segundo, ...resto] = vector // Junto a desistruturação pega o resto dos valores que não foram atribuidos por meio da desistruturação
console.log(resto)
// ===================================================

// Operador ternário
console.log("\n= Operador ternário =")
// condition ? será execultado se a condição for verdadeira : será execultado caso contrário
flag = true

flag ? console.log("Flag é True") : console.log("Flag é False")
// ===================================================

// Exportação de modulos

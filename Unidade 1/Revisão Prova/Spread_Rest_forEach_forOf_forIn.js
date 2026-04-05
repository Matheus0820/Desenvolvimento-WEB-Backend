
const vector = [1, 2, 3, 4, 5, 6, 7]
console.log(`vector: ${vector}`)

// Operador Spread
const vector_update = [...vector, 8, 9]
console.log(`vector_update: ${vector_update}`)

// Operador Rest
const [value1, value2, ...resto] = vector
console.log(`value1: ${value1}`)
console.log(`value2: ${value2}`)
console.log(`resto: ${resto}`)

// ForEach
vector_update.forEach((value, index) => {
   console.log(`vactor -> Index: ${index}; Value: ${value}`)
});

// For of
for(value of vector_update) {
    console.log(`Valor: ${value}`)
}

// For in
for (let index in vector_update) {
    console.log(`Index: ${index}; Valor: ${vector_update[index]}`)
}
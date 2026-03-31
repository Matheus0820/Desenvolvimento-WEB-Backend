// Stack - Pilha -> A primeira que entra é a última que sai
console.log("= Stack - Pilha =")
function soma(a, b) {
    s = a + b
    return s
}

function soma3 (a, b, c) {
    s0 = soma(a, b)
    s1 = soma(s0, c)
    return s1
}

const somatorio = soma3(3, 9, 12)
console.log("Somatório de 3 números: " + somatorio)
// ===================================================

// Queue - Fila -> Primeira que entra é a primeira que sai
console.log("\n= Queue - Fila =")

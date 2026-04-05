// Função normal
function NormalFunction() {
    console.log("1 - Serei exibida primeiro")
}

// Arrow Function Assincrona
setTimeout(() => {
    console.log("2 - Serei a segunda a ser exibida")
}, 100)

// SetTimeout(Função ou arrow function, tempo de espera em milisegundo)

// Chamando a Normal Function
NormalFunction()
// async -> Retorna uma promisse 
// await -> Espera o resultado da promisse

// Função defininda com promisse
function myFunction() {
    return Promise.resolve("Hello")
}

// Função definida com Async/await -> Só retorna o Resolve -> Não tem o Reject
async function myFunction() {
    return "Hello"
}

/* OBS.:
* Uma função só pode usar o "await" se anteriormente ela for definida com o "async"
* O "await" -> Ele trava a execulção daquela função sem trava a thread principal -> Trava até houver um retorno da promisse
*/


// == Tratamendo de Erros ==
try {
    // Bloco de código principal -> Se houver um erro aqui dentro ele vai pro "catch"
    console.log("Código Principal")
} catch {
    // É execultado quando há um erro
    console.log("Retorno de erro")
}

// Exemplo de uso do Await
// const result = await promise;
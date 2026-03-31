/* PROMISES */

// Exemplo básico da estrutura da Promise

// let myPromise = new Promise(function(myResolve, myReject){
//     myResolve(); // é chamado se der certo
//     myReject(); // é chamado se der errado
// });

// myPromise.then(
//     function(value) { /* Código que será execultado se a promessa der certo */ }, // Essa vai ser a myResolve 
//     function(error) { /* Código que será execultado se a promessa der errado */ } // Essa vai ser a myReject
// );

// ===============================================================================================================

// Estados de uma Promise
// -> Peding: Está em processamento -> Estado inicial da Promise
// -> Fulfilled: A Promise deu certo
// -> Rejected: A Promise deu errado -> Retorna um erro

// ===============================================================================================================

// Exemplo de código funcional da uma Promise
let myPromise = new Promise(function(myResolve, myReject){
    let sucess = true; // Simulação do estado do processo do código aqui dentro da Promise

    if (sucess) {
        myResolve("✅ Deu certo")
    }
    else {
        myReject("❌ Deu errado")
    }
});

myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.error(error);}
)

// ===============================================================================================================

// Alternativas - Uso do .then() e .catch()

// .then(): Chama a função dentro dele quando a Promise deu certo -> São endadedados -> Pode ser chamados mais de um .then() em uma função
// .catch(): Chama a função dentro dele quando a Promise falha (dar erro) e retorna os erros

// -> Exemplo: myPromise.then(function(value) {code...}).catch(function(error) {code...})

// ===============================================================================================================

// Operações paralelas com o Promise.all

// -> Promise.all([array promiss]): Resebe um vetor de promises de só finaliza quando as promises do array acabar e retorna um array com os resultados

// -> Exemplo: Promise.all([promise01, promise02, promise03]).then((resultados) => {code success...}).catch((error) => {code error...})

// -> OBS.: "resultados" é uma vetor dos resultados de todas as promises do array passado no Promise.all()
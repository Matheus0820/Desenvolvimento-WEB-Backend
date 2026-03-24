// == Teste com o .then da promise
function myDisplay() {
 let myPromise = new Promise(function (resolve) {
 setTimeout(function () { resolve("Promise Assíncrona!!"); }, 3000);
 });
 console.log("Passou rápido por aqui!")
 myPromise.then(
 (value) => console.log(value)
 )
 console.log("Teste")
}
myDisplay();
console.log("Texto impresso antes da chamada da função!")

// Saida -> o Consolo.log abaixo da chamada da função só vai sair antes do consolo.log(value) dentro do .then, pois o .then criar uma micro tesk
// mas não para a execulção do resto da função


// == Teste com o Await ==

// function myDisplay() {
//  let myPromise = new Promise(function (resolve) {
//  setTimeout(function () { resolve("Promise Assíncrona!!"); }, 3000);
//  });
//  console.log("Passou rápido por aqui!")
//  console.log(await myPromise)
//  console.log("Teste")
// }
// myDisplay();
// console.log("Texto impresso antes da chamada da função!")

// Saida -> O console.log abaixo da função vai sair depois só do primeiro consolo.log() dentro da função async, pois o await vai travar o bloco de código 
// abaixo dele dentro da função sem travar a thread principal
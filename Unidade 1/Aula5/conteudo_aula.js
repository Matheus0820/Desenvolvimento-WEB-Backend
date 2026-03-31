// JavaScript Assincrono
setTimeout(myFunction, 3000); // Enfileira a função em na fila depois de no minimo 3 segundos

function myFunction() {
    console.log("Rodando código assincrono rodando fora da LibUV");

}

setInterval(() =>  {console.log("Rodando a cada 1s")}, 1000); // Chama a função a cada tempo definido no segundo parametro -> Nesse caso ele chama esse função a cada 1 segundo


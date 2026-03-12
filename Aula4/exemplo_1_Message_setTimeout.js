const seconds = new Date().getTime() / 1000;
setTimeout(() => {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
 
    if (new Date().getTime() / 1000 - seconds >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}

/* 
A mensagem do while será mostrada primeiro porque o código 
que está rodando é uma mensagem que já estava na fila, 
após disso ele execulta a próxima mensagem da fila que é a dentro do setTimeout
 */
// Criar 3 funções -> fazerPedido, prepararLanche e entregarLanche
// Essas funções devem ser encadeadas com o callback -> Callback deve seguir o padrão de first-err -> callback = (err, data) => {code...}
// Fazer um código de teste esse encadeamento de função -> Simulação do Callback Hell

function fazerPedido(pedido, func_callback1) {
    console.log("1. Fazendo pedido")
    setTimeout(() => {
        console.log(`Pedido de ${pedido} - Feito`)
        func_callback1(null, pedido)

    }, 2000);
}

function prepararLanche(pedido, func_callback2) {
    setTimeout(() => {
        console.log(`2. Preparando ${pedido}`)
        func_callback2(null, `Lanche - "${pedido}" - feito`)
    }, 4000)
}

function entregarLanche(pedido, func_callback3) {
    setTimeout(() => {
        console.log(`3. Saindo para entrega`)
        func_callback3(null, "Pedido entregue")
    }, 2000)
}


/* Código de teste */
fazerPedido("X-bacon", (err, data) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(`- ${data}`)
        prepararLanche(data, (err1, data1) => {
            if(err1) {
                console.error(err1)
            }
            else {
                console.log(`- ${data1}`)
                entregarLanche(data1, (err2, data2) => {
                    if (err2) {
                        console.error(err2)
                    }
                    else {
                        console.log(`- ${data2}`)
                    }
                })
            }
        })
    }
})
let myPromise = new Promise((resolver, reject) => {
    let sucess = false
    
    if (sucess) {
        resolver("Deu certo.")
    }
    else {
        reject("Deu errado!!")
    }
})

// Testando
myPromise.then((value) => {
        console.log(value)
    }).catch((value) => {
        console.log(value)
    })

//  == Exemplo 2 ==
const FazerPedido = (pedido) => {
    return new Promise((resolver, reject) => {
        const padidos_possiveis = ["X-Tudo", "X-Bacon"]
        exist = false
        
        for (pedidoP of padidos_possiveis) {
            if (pedido === pedidoP) {
                exist = true
            }
        }
        
        if (exist) {
            console.log("Fazendo pedido!")
            setTimeout(() => resolver(pedido), 2000)
        }
        else {
            return reject(new Error(`${pedido} Indisponível no momento`))
        }
    })
}

// Testando
FazerPedido("X-Tudo")
    .then((retorno) => {
        console.log(`O seu - ${retorno} - está sendo preparado`)
    })
    .catch((err) => {
        console.error(err)
    })

// Fazendo vários pedidos 
Promise.all([FazerPedido("X-Tudo"), FazerPedido("X-Bacon")])
    .then(retorno => console.log(`Seus pedidos - ${retorno} - Estão sendo preparados`))
    .catch(err => console.error(err))

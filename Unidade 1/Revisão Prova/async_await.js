const FazerPedido = pedido => {
    return new Promise((resolver, reject) => {
        const pedidos_num = [1, 2, 3, 4, 5]
        exist = false
        
        for (index in pedidos_num) {
            if(pedido == pedidos_num[index]) {
                exist = true
            }
        }
        
        if(!exist) {
            return reject(new Error(`O pedido - ${pedido} - não está disponível no cardápio`))
        }
        else {
            console.log("Fazendo pedido!")
            setTimeout(() => resolver(pedido), 2000)
        }
    });
}

// O await espera uma função assincrona terminar 
// Só pode usar o awiat em funções do tipo "async"

async function EsperaPedido(numPedido) {
    try {
        const retorno = await FazerPedido(numPedido);
        console.log(`O pedido de número ${retorno} está sendo preparado!`)
    }
    catch (err) {
        console.error(err.message);
    }
}

// Teste
EsperaPedido(1);
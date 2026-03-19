// Simular a busca de um usuário em um banco de dados de modo assincrono
// 1 - Criar uma função chamada buscarUsuario(id, callback) -> O callback deve receber o erro como primeiro parametro e os dados como segundo parametro
// 2 - Fazer um código para testar essa função


// Função
function buscarUsuario(id, callback) {
    console.log(`Buscando usuário com id = ${id}...`)

    setTimeout(() => {
        if (id < 0) {
            err_mensage = `ID inválido - Usuário não existe com o id = ${id}`
            callback(err_mensage, null);
            return;
        }

        // Criado um usuário - simulando consulta no banco
        const userConsulte = {
            id: id,
            name: "nameTeste",
            year: 20
        }

        callback(null, userConsulte)

    }, 2000)

}

/* Testando Função */

// Dar certo -> err = null
buscarUsuario(-1, (err, data) => {
    if(err) {
        console.error(err)
    }
    else {
        console.log("Consulta concluida - usuário encontrado")
        console.info(`O usuário que possui o id: ${data.id}, tem o nome de: ${data.name}`)
    }
})

// Dar errado - err != null
buscarUsuario(10, (err, data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("Consulta concluida - usuário encontrado")
        console.log(`O usuário que possui o id: ${data.id}, tem o nome de: ${data.name}`)
    }
})


function FuncNormal(n, FuncCallBack) {
    setTimeout(() => {
        if(n == 0) {
            FuncCallBack("Ocorreu um Erro", null)
            return
        }
        else {
            FuncCallBack(null, "Deu certo")
        }
    }, 500)
}

// Deu certo -> Erro = null
FuncNormal(1, (erro, dados) => {
    if (erro == null) {
        console.log(dados)
    }
    else {
        console.error(erro)
    }
})

// Deu Errado -> Erro != null
FuncNormal(0, (erro, dados) => {
    if (erro == null) {
        console.log(dados)
    }
    else {
        console.error(erro)
    }
})


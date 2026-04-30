# Tratamento de erros

## Middleware global de Erros
- Ele tem 4 argumento - Recebe 4 parametros -> (error, req, res, next)
- Ele é a última coisas a ser adicionada no app.js antes do app.listen()
- Ele é chamado no meio de uma cadeia de middleware se houver erros. A forma de chamar ele é usando o `next(error);`

- Fica em: `src/middlewares/error.middleware.js`

### Código middleware de erros:
```javascript

export const globalErrorHandler = (error, req, res, next) => {
    console.error("Erro detectado:", error.message);
    console.error("Stack:", error.stack);

    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        statusCode: 'statusCode',
        message: error.statusCode ? error.message: 'Ocorreu um erro interno no servidor.'
    });
}

```

### Forma de chamar ele:
```javascript
static async getById(req, res, next) {
    try {
        const { id } = req.params;
        const petDto = await PetService.getById(id);
        res.status(200).json(petDto);

    } catch (error) {
        next(error); // Vai chamar o middleware global de erros
    }
}

```

## Observações importantes
- Os erros sempre deve retornar ao usuário a mesma estrutura: `({status, statusCode, message})`


# Templetes PUG
## Introdução
- Usa renderização pelo lado do servidor o chamado **Server-Side Redering (SSR)**
- Consegue gerar uma visualização dos dados que antes eram enviados apenas no formato JSON
- Esse templetes tem a extensão `.pug`, contendo onde ele vai colocar cada dados vindos dos services
- Ele retorna um HTML puro no final misturando os dados com o templete

## Passos para utilizar o PUG
### Instalar o PUG
`npm install pug`

### Configurar o Express para usar o PUG
- No arquivo app.js: 
```javascript
```

### Caminho de criação dos templetes PUG
- `src/views/templete.pug`

### Código básico
```pug

doctype html
html(lang = "pt-br")
    head
        title = title
        link(rel="stylesheet", href="/css/style.css")
    body
        h1 conteudo
```

### Renderizando o templete PUG:
- Ele na sua url não tem antes do seu nome `/api`, para diferenciar só do envio de dados
- Ele vai ficar associado nas rotas com a rota raiz `/`
- para enviar a renderização do templete usasse o `res.rende()`
- Padrão de arquivos de rotas para o templete: `src/routes/web.routes.js`

### Utilizando CSS nos templates
- `/public/css/style.css` -> Fica dentro da pasta raiz do projeto

## Layouts reutilizaveis
- Criar um documento base pug para aparecer em todas as outras páginas, para não precisar importar para as outras

### Layout base
- `src/views/layouts/main.pug`
- Cógido exemplo:
```pug

```

### Extendendo o Layout base

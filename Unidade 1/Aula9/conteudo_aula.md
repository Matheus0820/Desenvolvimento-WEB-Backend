# Aula 9 - HTTP verbs and Errors

## Métodos de requisição HTTP
### Verbos
- **GET**: Solicita a representação de recurso especifico -> Dados são passados na URL
- **POST**: Submete uma nova entidade ao servidor -> Dados invisíveis e não na URL como o *GET*
- **PUT**: Atualiza um recurso dentro do servidor - Entidade já existe
- **DELETE**: Remove um recurso dentro do servidor
- **PATCH**: Funciona comitante ao *PUT*, mas só atualiza parte da entidade

#### Método GET
- Solicita dados de um recurso especificado
- Essa solicitação é passada na URL da página
- Exemplo: ```https://meusite.com?name1=value1&name2=value2```

#### Método POST
- Utilizado para mandar dados a um servidor
- Geralmente usado para enviar novos dados
- Os dados enviados são enviados no corpo da requisição e não na URL, como o *GET* faz.
- Exemplo: ```[
data: {
    nome1:value1, 
    nome2:value2
    },
]```

### Mensagens de erro HTTP
- **404**: Not found -> Página não encontrada;
- **200**: Requisição bem sucedida;
- Não são necessariamente erros, são códigos de status de requisição

#### Códigos de **Informação**
- Começam com 1
- Os mas comuns são os: 100, 101,...

#### Códigos de **Sucesso de requisição**
- Começam com 2
- Simbolizam o sucesso em um requisição
- Os mais comuns são:
    - 200 - Sucesso na requisição
    - 201 - Sucesso no recurso de criação

#### Códigos de **Redirecionamento**
- Começam com 3
- Os mais comuns são os: 300, 301, ...

#### Códigos de **Erros no cliente**
- Começam com 4
- Simbolizam erros ocorridos na parte do cliente, como página não encontrada, acesso de URLs não permitidas ao cliente, entre outros
- Os mais comuns são: 404 (Not Found), 405 (método não permitido)

#### Códigos de **Erros no Servidor**
- Começam com 5
- Ocorre quando há um erro por parte do servidor, como erros de conexão com o cliente
- O mais comum é o 500, que é o erro interno no servidor
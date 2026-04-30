# Arquitetura em Camadas e separação de responsabilidades

## Fluxo de uma requisição em uma arquitetura em camadas: 

- Requisição
    - Uma rota é selecionada
        - Essa rota seleciona um controller específico
            - Esses cotrole trata a requisição e chama um serviço específico
                - Chama uma função de "alto nível" para o repositório para fazer uma requisição ao banco de dados
                    - Banco de dados retorna ou recebe os dados retornando o dado junto a um status dessa requisição (200, 201, etc...)


## Camadas existentes
### Camada de validação
- Usa o express-validator
- Faz com que os dados que chegam nas camadas subsequentes estejam de acordo com o padrão definido

- caminho base dos validadores: `src/validators/entidade.validator.js`

### Camada de Roteamento
- Mapea uma URL específica e metódo para cada controlador específico dentro da API
- Define endponint e direciona a requisição
- Ele não sabe o que o que ocorre dentro do controler e nem faz nenhuma lógica de negócio 

- Caminho para o roteamento: `src/routes/entidade.routes.js`

### Camada Controlador
- Manipula as requisições e retorna uma resposta para ele. Implemente a lógica da API

- Ele extrai dados do `req.params`(get) ou  `req.body`(post)

- Não implemente diretamente a lógica de negócio e nem acessa diretamento o banco de dados

- Caminho para os controladores: `src/controllers/entidade.controller.js`

### Camada de Serviço
- Ela implementa as regras de negócio
- Ele é responsavel por ligar o controller com a função (repositório) que acessa os dados do banco de dados
- Ele não sabe nada sobre as requisições HTTP - Não faz nenhum resposta a requisição -> Retornar a requisição é responsabilidade do controller

- Caminho dos services: `src/services/entidade.service.js`

### Camada de Repositório
- Única camada que tem acesso ao banco de dados
- Abstrai o acesso ao banco de dados - Torna esse acesso mais fácil e seguro
- Ele não possui regras de negócio - Só implementa as ordens mandadas pelo Services (Camada de serviço)

- Caminho para o respositório: `src/repositories/entidade.repository.js`

### DTO
- Pega os dados salvos no banco de dados e repassa para o controller apenas o dados que ele deseja mostrar ao cliente

- Caminho para o DTO: `src/dtos/entidades.dto.js`
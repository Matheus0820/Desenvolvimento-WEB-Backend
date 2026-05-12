import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de pessoas',
            version: '1.0.0',
            description: 'API para gerenciamento de pessoas',
        },
        tags: [
            {
                name: 'Pessoas',
                description: 'Operações relacionadas a pessoas',
            },
            {
                name: 'Usuários',
                description: 'Operações relacionadas a usuários',
            },
            {
                name: 'Autenticação',
                description: 'Operações relacionadas à autenticação',
            },
        ],
    },
    
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
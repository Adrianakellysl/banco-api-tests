# Banco API Tests

## Objetivo

Este projeto tem como objetivo automatizar testes de API REST do
projeto: Banco API| https://github.com/juliodelimas/banco-api

Os testes garantem o correto funcionamento dos endpoints, validando
regras de negócio, status codes e estrutura das respostas.

------------------------------------------------------------------------

## Stack Utilizada

-   JavaScript (Node.js)
-   Mocha (framework de testes)
-   Chai (assertions)
-   Supertest (requisições HTTP)
-   Mochawesome (relatórios HTML)

------------------------------------------------------------------------

## Estrutura de Diretórios

    banco-api-tests/
    ├── test/                # Casos de teste
    ├── mochawesome/         # Relatórios gerados
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    └── README.md

------------------------------------------------------------------------

## Configuração do ambiente

### Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

    BASE_URL=http://localhost:3000

> Ajuste a URL conforme o ambiente onde a API estiver rodando.

------------------------------------------------------------------------

## Como executar os testes

### Instalar dependências:

    npm install

### Executar testes:

    npm test

------------------------------------------------------------------------

## Relatórios com Mochawesome

Após rodar os testes, será gerado um relatório em:

    /mochawesome

Abra o arquivo `.html` no navegador para visualizar os resultados.

------------------------------------------------------------------------

## Documentação das dependências

-   Mocha: https://mochajs.org/
-   Chai: https://www.chaijs.com/
-   Supertest: https://github.com/visionmedia/supertest
-   Mochawesome: https://github.com/adamgruber/mochawesome

------------------------------------------------------------------------

## Observações

-   Certifique-se de que a API esteja rodando antes de executar os
    testes.
-   O projeto depende da variável `BASE_URL` para realizar as
    requisições.

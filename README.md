# Repository Management System - Back-end b

Este é um sistema desenvolvido em Node.js e TypeScript para buscar usuários do GitHub e seus respectivos repositórios. O projeto foi criado para facilitar a consulta de informações sobre usuários e seus repositórios de maneira simples e eficiente.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de iniciar:

- [Node.js](https://nodejs.org/) (versão 16.17.0 ou superior)
- Pacotes [npm](https://www.npmjs.com/) (Node Package Manager)

## Instruções de Configuração

1. Clone o repositório

```bash
git clone https://github.com/JoseEduardoMartins/repository-manager-backend-b.git

cd repository-manager-backend-b
```

3. Instale as dependências:

```bash
 npm install
```

4. Configure as variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e preencha as informações necessárias.

5. Inicie o microserviço:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## Uso

Verificar Status da API

- GET /status/

Acesse a API para buscar usuário e seus repositórios.

- Obter um usuário específico: GET /users/:login

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões, por favor, abra uma [issue](https://github.com/JoseEduardoMartins/repository-manager-backend-b/issues/new).

## Autor

- José Eduardo Martins

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter detalhes.

## Contato

Para qualquer dúvida ou problema, entre em contato com `m4rt1ns.jose@gmail.com`.

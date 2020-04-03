# helloworldTS

**Objetivo**: Hello world com TypeScript, do básico ao avançado, usando frameworks e lançando as versões em escala de dificuldade. Vou implementar os recursos e avançando com o projeto de Hello World até chegar a uma API.

* Planejamento de estudo:

O que pretendo entender e construir no projeto TS

[Node JS](https://nodejs.org/en/)

[Express - Framework web para Node JS](https://expressjs.com/)

[Typescript](https://www.typescriptlang.org/index.html)

[npm: Gerenciador de dependências](https://www.npmjs.com/)

[Sequelize - ORM ](https://sequelize.org/) ou [Query Builder Knex](http://knexjs.org/)

[Mongoose: Modelador de objetos de MongoDB para node JS](https://mongoosejs.com/)

* Ferramentas:

[Prettier - Formatador de códigos opinativo](https://prettier.io/)

[Eslint - Analise de padrão de código](https://eslint.org/)

[Nodemon - Reiniciar automaticamente a aplicação](https://www.npmjs.com/package/nodemon)

[Sucrase - development build](https://www.npmjs.com/package/sucrase)

[Cors - Middleware](https://www.npmjs.com/package/cors)

[Jest: Testes](https://jestjs.io/)

[cross-env - Acesso ao banco para testes](https://www.npmjs.com/package/cross-env)

[Supertest - requisição a APIs para teste](https://www.npmjs.com/package/supertest)

[Celebrate - Validações](https://www.npmjs.com/package/celebrate)

[Cross-env - Variáveis de ambiente](https://www.npmjs.com/package/cross-env)

* extra:

[Documentação do JS](https://devdocs.io/javascript/)

* v0.1.0:

    - To compile:

        `tsc hello.ts`

    - To execute:

        `node hello.js`

* v0.2.0:

    Usando o nodemon para monitorar modificações nos arquivos TS, no arquivo de configuração do nodemon (nodemon.json), uso o sucrase para compilar o TS em JS antes de reiniciar a aplicação. Uso o sucrase também para fazer a build com o comando `npm run-script build`

    Criei os diretórios de models, controllers, database e tests para ter uma visão do todo que pretendo estudar seguindo as documentações dos mesmos.

    Criei também o Dockerfile e o Procfile para containerizar a aplicação e jogar ela no Heroku para testes, já configurei o Heroku para monitorar o repositório Github.

    - To execute:

        `npm run-script start` 

* v0.3.0

    implementei teste unitário com Jest e instalei o Babel para interpretar os testes com TS. Também separei a interface e criei uma classe implementando. Além disso utilizei Gets e Setters para a classe.

    - To execute:

    `npm run-script start` ou `npm run-script test`
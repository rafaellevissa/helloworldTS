* v0.1.0:

    Hello World simples com único arquivo
    
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

* v0.4.0

    Transformei o projeto de Hello World para um sistema de controle de turmas de uma escola. Criei os arquivos das classes de domínio e configurei licença, entre outros os arquivos de configuração docker.

    `docker build -t hello .`
    `docker run -it --rm -p 3000:3000 hello`

    ou 

    `docker-compose up`
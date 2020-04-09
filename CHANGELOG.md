# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- logs manager typescript
- externalize configuration typescript
- Implementar Deno
- Implementar Adonis v5


## [0.5.0] - 2020-04-07
### Added
- Implementação do docker e docker-compose para containerização da aplicação
- Gitlab CI: Criei um repositório no Gitlab, foi feito ajustes para fazer a réplica do repositório no GITHUb. Decidi usar o gitlab como padrão e apenas replicar para o github para poder usar o gitlab-CI . Seguindo conceitos de Devops do Patrick Debois et al., Agile Manifest de Kent Beck et al.
- Pipeline de teste
- Usei conceitos de Clean Code e SOLID do Robert C. Martin.
- AutoBuild com pipeline de build no gitlab-ci usando container com imagem do node. Após a Build uso o registry do gitlab para empacotar a aplicação.
- AutoDeploy no ambiente da AWS. Criei uma instância t2.micro para fazer deploy automático e testes com infra, configurei chaves SSH no gitlab e na aws e montei o arquivo do pipeline, criei usuário deployer na instância, instalei o docker, criei chaves ssh, adicionei o usuário deployer no grupo docker.
- Acesso ao deploy na AWS `http://3.133.58.237:3000/`

### Fixed
- ChangeLog: estudei a documentação do changelog para implementar nesse projeto.
- Ajustei o arquivo de configuração para o Heroku (procfile)
- ajustes na licença do software
- Criei uma pasta para documentação e já adicionei o diagrama de classes feito no software DIA. Utilizando práticas do UML

## [0.4.0] - 2020-04-07
### Added
- Transformei o projeto de Hello World para um sistema de controle de turmas de uma escola(API Rest), retornando um Json
- Criei os arquivos das classes de domínio seguindo orientações de DDD (Eric Evans)
- Configurei licença
- Arquivos de configuração docker. (seguindo conceitos de Devops)

    `docker build -t hello .`

    `docker run -it --rm -p 3000:3000 hello`

    ou

    `docker-compose up`

## [0.3.0] - 2020-04-03
### Added
- implementei teste unitário com Jest e instalei o Babel para interpretar os testes com TS. TDD 
- Também separei a interface e criei uma classe implementando. Utilizando práticas de OO
- Além disso utilizei Gets e Setters para a classe. Design Pattern
- To execute: `npm run-script start` ou `npm run-script test`

## [0.2.0] - 2020-04-03
### Added
- Usando o nodemon para monitorar modificações nos arquivos TS, no arquivo de configuração do nodemon (nodemon.json), uso o sucrase para compilar o TS em JS antes de reiniciar a aplicação.
- Uso o sucrase também para fazer a build com o comando `npm run-script build`
- Criei os diretórios de models, controllers, database e tests para ter uma visão do todo que pretendo estudar seguindo as documentações dos mesmos.
- Criei também o Dockerfile e o Procfile para containerizar a aplicação e jogar ela no Heroku para testes, já configurei o Heroku para monitorar o repositório Github.
- To execute: `npm run-script start` 

## [0.1.0] - 2020-04-03
### Added
- Hello World simples com único arquivo
- To compile:
    `tsc hello.ts`
- To execute:
    `node hello.js`

[Unreleased]:
[0.5.0]: https://github.com/rafaellevissa/helloworldTS/releases/tag/v0.5.0
[0.4.0]: https://github.com/rafaellevissa/helloworldTS/releases/tag/v0.4.0
[0.3.0]: https://github.com/rafaellevissa/helloworldTS/releases/tag/v0.3.0
[0.2.0]: https://github.com/rafaellevissa/helloworldTS/releases/tag/v0.2.0
[0.1.0]: https://github.com/rafaellevissa/helloworldTS/releases/tag/v0.1.0

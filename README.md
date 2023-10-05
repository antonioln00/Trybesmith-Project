## Trybesmith - Projeto de Desenvolvimento de API em Typescript


O Trybesmith é um projeto pessoal que representa meu primeiro passo no mundo do desenvolvimento de API em Typescript. Utilizei as melhores práticas e ferramentas disponíveis para criar uma aplicação robusta e organizada. Neste projeto, desenvolvi uma loja de itens medievais, como espadas feitas sob encomenda, no formato de uma API.

## Tecnologias Utilizadas
* Node.js e Express: Utilizei o Node.js como ambiente de execução e o Express.js como framework para criar a API.
* Typescript: Escolhi o Typescript para adicionar tipagem estática ao JavaScript, tornando o código mais seguro e fácil de manter.
* Docker: Utilizei o Docker para criar containers que parametrizam o projeto e facilitam o ambiente de desenvolvimento.
* JWT (JSON Web Tokens): Implementei autenticação JWT para garantir a segurança de algumas rotas da aplicação.
* Sequelize: Utilizei o Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados.
* Testes: Criei testes para garantir o correto funcionamento das rotas e serviços da aplicação.
* Arquitetura de Camadas: Organizei o código em camadas de Service e Controllers para torná-lo mais legível e escalável.

## Configuração do Ambiente
Para executar o projeto em sua máquina, siga os seguintes passos:

1. Clone o repositório Trybesmith em seu ambiente local.
2. Certifique-se de que o MySQL local não está em execução na porta padrão (3306). Caso contrário, ajuste as configurações de porta conforme necessário.
3. Utilize o Docker Compose para iniciar os serviços do Trybesmith com o seguinte comando (bash):

docker-compose up -d --build

Isso criará e iniciará dois containers chamados trybesmith_api e trybesmith_db.
4. Execute o comando npm run db:reset para criar o banco de dados, as tabelas e preenchê-las com os dados iniciais necessários. Certifique-se de que os tipos solicitados nos requisitos foram criados com sucesso antes de executar este comando.
5. Para acessar o terminal interativo do container trybesmith_api, utilize o comando (bash):

docker exec -it trybesmith_api bash

Isso fornecerá acesso ao ambiente de desenvolvimento dentro do container.
6. Para visualizar os logs do Nodemon em seu terminal, siga os seguintes passos:
* Execute o comando docker ps para listar os containers ativos e obter o ID do container trybesmith_api.
* Use o ID do container para visualizar os logs do servidor com Nodemon (bash):

docker logs -f <id_do_container>

Isso permitirá que você monitore os logs em tempo real.

## Contribuições
Se você deseja contribuir para o projeto Trybesmith ou tem sugestões de melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

Espero que o Trybesmith seja útil para sua jornada de aprendizado em desenvolvimento de API com Typescript. Divirta-se explorando e expandindo este projeto!

Antonio Léo Neto
Desenvolvedor de Software

# TESTE FULLSTACK QUIKDEV #

## 🚀 Introdução

Os times da **QuikDev** enfrentam um grande problema. Criar um sistema para cadastro de perguntas e respostas que auxilie no atendimento os usuários.

Vamos fazer um pequeno sistema que auxilie essa tomada de decisão!

Este teste busca identificar diferentes níveis de habilidade, medindo conhecimento, 
organização e esforço. Para isso ele é dividido em 3 níveis:

- O marcador **(*):** é obrigatório para júnior e acima;
- O marcador **(\**):** é obrigatório para pleno e acima;
- O marcador **(*\*\*):** é obrigatório para sênior.

**Instruções:**

1. (*):</span> Elabore um documento Readme.md no projeto que tenha os seguintes detalhes: ❌
  - *Descreva a stack utilizada, como versão da linguagem utilizada, framework e o porquê de ter escolhido, pacotes adicionados, banco de dados, etc....* ❌
  - *Descreva como subir o sistema para executar os testes.* ❌
  - [O que vale destacar no código implementado?](#Considerações) 📌
  - [O que poderia ser feito para melhorar o sistema?](#Considerações) 📌
  - [Algo a mais que você tenha a dizer](#Considerações) 📌
2. (*): A estrutura base do sistema vai contar com 3 entidades (essas são as exigências mínimas para essa atividade): ❌
```json
  User:
    id: id primary_key
    name: string:100
    email: string:191
  Post:
    id: id primary_key
    user_id: id foreign:users
    title: string:100
    description: text
  Comment:
    id: id primary_key
    user_id: id foreign:users
    post_id: id foreign:posts
    description: text
```
3. (**): Crie um sistema de autenticação. ❌
4. (*): Com o usuário você pode fazer dois processos de CRUD: ❌
  - *CRUD simples;* ❌
    - *Colocar checagem de permissão se possuir autenticação.* ❌
  - *Ou se possuir autenticação;* ❌
    - *Registro na fase de autenticação com edição de perfil do usuário logado.* ❌
5. (*): Com as postagens é preciso fazer um CRUD simples com algumas exigências: ❌
  - *Apenas o próprio usuário pode editar ou excluir as postagens;* ❌
  - *(\*\*): a postagem tenha a possibilidade de adicionar uma imagem;* ❌
  - *(\*\*\*): as edições sejam salvas como um histórico;* ❌
  - *(\*\*\*): a postagem tenha um contador de visualizações;* ❌
  - *(\*\*\*): a postagem tenha um contador de curtidas e não curtidas.* ❌
6. (*): Com os comentários é preciso fazer um CRUD simples com algumas exigências: ❌
  - *Apenas o próprio usuário pode editar os comentários;* ❌
  - *Usuário do comentário pode remover o comentário;* ❌
  - *(\*\*): Usuário da postagem também pode remover o comentário;* ❌
  - *(\*\*\*): Adicionar marcador que foi removida pelo usuário ou dono da postagem;* ❌
  - *(\*\*\*): Mandar um e-mail para o usuário da postagem que ele possui um novo comentário em seu post;* ❌
7. (**): Crie uma rota que gere um relatório que traga os posts com os seguintes campos: ❌
  - *Título;* ❌
  - *Quantos comentários eles possuem;* ❌
  - *(\*\*\*): Quantas visualizações;* ❌
  - *(\*\*\*): Quantas curtidas;* ❌
  - *(\*\*\*): Quantas não curtidas.* ❌
8. Considerações e Documentação: ✔️
  - [Documentação da API](https://github.com/devluma/postquik/tree/develop/api) 📌
  - [Documentação do APP](https://github.com/devluma/postquik/tree/develop/web) 📌
  - [O que vale destacar no código implementado?](#Considerações) 📌
  - [O que poderia ser feito para melhorar o sistema?](#Considerações) 📌
  - [Algo a mais que você tenha a dizer](#Considerações) 📌

## 🔖 Estórias

### Estória 1:

Eu como **usuário do postquik;** <br />
Quero **poder cadastrar um post;** <br />
Para que **eu possa visualizar os meus comentarios e dos outros usuários.**

- **Critério de Aceitação**
- ❌ @TODO;
- ❌ @TODO.

## 💻 Tecnologias utilizadas no Projeto

O projeto foi criado utilizando as seguintes tecnologias: `NodeJS`, `ReactJS`, `Typescript`,  `Styled-components` e como Storage no ambiente foi utilizado o `Postgres` como banco de dados. 

E para rodar os testes da aplicação foi utilizado o `Jest` com o `Supertest`.

Segue abaixo as principais tecnologias utilizadas neste projeto:

- JavaScript ✔️
- HTML/CSS ✔️
- NodeJS ✔️
- ReactJS ✔️
- React-hooks ✔️
- React-components ✔️
- Styled-components ✔️
- Typescript ✔️
- JWT Auth ✔️
- Jest/Supertest ✔️
- KnexJS Query Builder ✔️
- Postgres ✔️

## Considerações

- **O que vale destacar no código implementado?**
  - A implementação da interface da apliacação utilizando typescript e Styled-components;
  - A separação da API de consulta do APP;
  - A implementação do mecanismo de autenticação utilizando JWT;
  - A possibilidade de implementação de DevOps com o docker;
  - A implementação das camada de consulta com o database utilizando um query builder;
  - A implementação de migrations e seeds para facilitar a criação da estrutura de storage;
  - A implementação de testes tanto na API como na interface do APP.
- **O que poderia ser feito para melhorar o sistema?**
  - Melhorar os Styled-components separando eles em componentes;
  - Melhorar a responsividade da aplicação utilizando @media no CSS;
  - Melhorar o DevOps do docker utilizando um manager como o Docker Compose ou Kubernetes separando por serviços;
  - Melhorar os gráficos de exibição dos registros;
  - Refatorar as Controllers da API e separar as consultas em Models/Entities;
  - Criar script de build e deploy na API;
  - Adicionar mais casos de testes na Aplicação;
  - Adicionar uma páginação na lista de restaurantes;
  - Ajustar a lógica de votação do ganhador, hoje ela só pega a maior pontuação e não cobsidera os empates.
- **Algo a mais que você tenha a dizer!**
  - ❌ @TODO;
  
😉 Obrigado por me proporcionar este desafio! <br />
🌈 Espero ansiosamente pelo seu feedback! <br />

## 📜 Direitos e Licença

✌ Este projeto está sobre Direitos / Licença (MIT License) e foi criado por [Luiz Marcelo Schmitt](https://github.com/devluma/) 💙 para o Teste de Dev Fullstack da QuikDev 🚀

---

Copyright 2022 Luiz Marcelo Schmitt.
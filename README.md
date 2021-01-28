# Desafio
## Descrição do Projeto
A proposta é desenvolver um desafio proposto com a seguinte narrativa:

<i> "A escola Alf aplica provas de múltipla escolha para os alunos. A nota do aluno na prova é determinada pela média ponderada das questões com os pesos de cada questão. Cada questão correta soma 1 ponto multiplicada pelo peso e cada questão errada 0. A nota final é a média aritmética das notas de todas as provas.

Requisitos obrigatórios:

Criar uma API HTTP que permita à escola:

- Cadastrar o gabarito de cada prova;

- Cadastrar as respostas de cada aluno para cada prova;

- Verificar a nota final de cada aluno;

- Listar os alunos aprovados;

Restrições

- A nota total da prova é sempre maior que 0 e menor que 10.

- A quantidade máxima de alunos é 100.

- O peso de cada questão é sempre um inteiro maior que 0.

- Os alunos aprovados tem média de notas maior do que 7.

- A entrada e saída de dados deverá ser em JSON." </i>

Tabela de conteúdos
=================
<!--ts-->
   * Sobre
   * Tabela de Conteudo
   * Instalação
   * Pre Requisitos
   * Tecnologias
<!--te-->

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:marianamitterlehner/desafio.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org)


Status do Projeto
=================
 -- Em desenvolvimento --
 
Funcionalidades da Aplicação
=================
- [x] Crud de Aluno
- [x] Crud de Avaliação
- [x] Crud de Gabarito

Estrutura da Aplicação
=================
- [x] Estrutura MVC

=================

#### Observações:

- A escolha sob o uso do typeORM se deve pelo seu nivel de abstração, enquanto a escolha do 
postgre foi pelo fato de ele já está instalado na maquina e por isso seria mais facil utilização.
A utilização do react em conjunto com o node.js, se deve pelo fato que venho tendo contato com a 
linguegem faz alguns meses. E utilizar o typescript, é uma forma de trabalhar com a linguagem tipada
que facilita muito na compreenção do codigo.

- A escolha do modelo MVC se deve pelo fato que assim conseguiria me aproximar da estrutura utilizada
pela orientação a objetos. 

- Pelo estilo da linguagem teria que adaptar alguns pontos que seria principalmente a utilização do 
FOREACH para pecorrer todo o array de dados fazendo uma comparação e depois que tivessemos esse arrey 
verficariamos a quantidade e gerariamos os pontos, logo ativaria uma condição que avaliaria se o aluno
foi aprovado ou não.

=================

### Autor
---

<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQHbuaN3q9GEgg/profile-displayphoto-shrink_100_100/0/1591642102871?e=1617235200&v=beta&t=mOuU0vtLLa0wFRUNuamVDi4Kkxo516G6AKfuQ4QBk-w" width="100px;" alt=""/>
Feito com ❤️ por Mariana Miguel 👋🏽 Entre em contato!
<br />

[![Twitter Badge](https://img.shields.io/badge/-@maricookie26-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/maricookie26)](https://twitter.com/maricookie26) [![Linkedin Badge](https://img.shields.io/badge/-Mariana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mariana-miguel-95268713b/)](https://www.linkedin.com/in/mariana-miguel-95268713b) 
[![Gmail Badge](https://img.shields.io/badge/-mariana.m.miguel.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mariana.m.miguel@gmail.com)](mailto:mariana.m.miguel@gmail.com)

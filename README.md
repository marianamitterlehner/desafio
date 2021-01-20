# Desafio
Desafio em API RESTful
A escola Alf aplica provas de múltipla escolha para os alunos. A nota do aluno na prova é determinada pela média ponderada das questões com os pesos de cada questão. Cada questão correta soma 1 ponto multiplicada pelo peso e cada questão errada 0. A nota final é a média aritmética das notas de todas as provas.

Requisitos obrigatórios:

Crie uma API HTTP que permita à escola:

- Cadastrar o gabarito de cada prova;

- Cadastrar as respostas de cada aluno para cada prova;

- Verificar a nota final de cada aluno;

- Listar os alunos aprovados;

Restrições

- A nota total da prova é sempre maior que 0 e menor que 10.

- A quantidade máxima de alunos é 100.

- O peso de cada questão é sempre um inteiro maior que 0.

- Os alunos aprovados tem média de notas maior do que 7.

- A entrada e saída de dados deverá ser em JSON.

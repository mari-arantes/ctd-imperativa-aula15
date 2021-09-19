var Alunos = require('./alunos');

var novoAlunoI = new Alunos('Mariana', 'Arantes');

console.log('Nome:', novoAlunoI.pegarNome()); 
console.log('Sobrenome:', novoAlunoI.pegarSobrenome()); 
console.log('Nome Completo:', novoAlunoI.pegarNomeCompleto()); 
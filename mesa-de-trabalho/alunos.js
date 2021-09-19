/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
    O controlador deve ser capaz de:
    (  ) Cadastrar um novo aluno com nome, sobrenome.
    (  ) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.
    (  ) Caso passe na validação:
        (  ) Salvar o cadastro em um arquivo json.
    (  ) Caso o contrário:
        (  ) Recusar o Cadastro com uma mensagem de erro.
*/

var fs = require ('fs');

var arquivo = fs.readFileSync(__dirname + '/aluno.bancodedados.json');
var arquivoConvertidoEmJSON = JSON.parse(arquivo);


function Alunos(nomeDoAluno, sobrenomeDoAluno){

    var nome = nomeDoAluno;
    var sobrenome = sobrenomeDoAluno;

    this.pegarNome = function(){
        return nome;
    }

    this.pegarSobrenome = function(){
        return sobrenome;
    }

    this.pegarNomeCompleto = function(){
        return `${nome} ${sobrenome}`;
    }

    this.definirNome = function(novoNome){
        nome = novoNome;
        return nome;
    }

    this.definirSobrenome = function(novoSobrenome) {
        sobrenome = novoSobrenome;
        return sobrenome;
    }

    function salvarNoBancoDeDados() {
        
        if(validarSeOValorEhUmaString()) {
            
            arquivoConvertidoEmJSON.push({
                nome,
                sobrenome
            });
            
            var arquivoConvertidoEmString = JSON.stringify(arquivoConvertidoEmJSON);
            
            fs.writeFileSync(__dirname + '/aluno.bancodedados.json', arquivoConvertidoEmString);
        } 
        else {
            return 'Não é um nome válido.';
        }
    }

    function validarSeOValorEhUmaString() {
        var naoEstaVazio = (nome && sobrenome);
        var ehUmaString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');
                
        return (naoEstaVazio && ehUmaString);
    }

    salvarNoBancoDeDados();
}

module.exports = Alunos;

